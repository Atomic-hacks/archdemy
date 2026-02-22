import { NextRequest, NextResponse } from "next/server";

import { chatModel, getOpenAIClient } from "@/lib/openai";

export const runtime = "nodejs";

type ChatRole = "user" | "assistant";

type PageContext = {
  title?: string;
  description?: string;
  location?: string;
  year?: string;
  materials?: string;
  designIntent?: string;
};

type HistoryItem = {
  role: ChatRole;
  content: string;
};

type ChatBody = {
  message?: unknown;
  pageContext?: unknown;
  history?: unknown;
};

const MAX_MESSAGE_CHARS = 1000;
const MAX_HISTORY_ITEMS = 12;
const MAX_HISTORY_CHARS = 600;
const MAX_CONTEXT_CHARS = 300;
const MIN_REQUEST_INTERVAL_MS = 1200;

const lastRequestByIp = new Map<string, number>();

type OpenAIErrorShape = {
  status?: number;
  code?: string | null;
  type?: string | null;
  message?: string;
};

function clampText(input: string, maxChars: number) {
  const cleaned = input.trim().replace(/\s+/g, " ");
  return cleaned.length > maxChars ? `${cleaned.slice(0, maxChars)}...` : cleaned;
}

function parsePageContext(pageContext: unknown): PageContext | undefined {
  if (!pageContext || typeof pageContext !== "object" || Array.isArray(pageContext)) {
    return undefined;
  }

  const source = pageContext as Record<string, unknown>;

  const normalized: PageContext = {
    title: typeof source.title === "string" ? clampText(source.title, MAX_CONTEXT_CHARS) : undefined,
    description:
      typeof source.description === "string"
        ? clampText(source.description, MAX_CONTEXT_CHARS)
        : undefined,
    location:
      typeof source.location === "string" ? clampText(source.location, MAX_CONTEXT_CHARS) : undefined,
    year:
      typeof source.year === "string" || typeof source.year === "number"
        ? clampText(String(source.year), 40)
        : undefined,
    materials:
      typeof source.materials === "string"
        ? clampText(source.materials, MAX_CONTEXT_CHARS)
        : Array.isArray(source.materials)
          ? clampText(
              source.materials.filter((item): item is string => typeof item === "string").join(", "),
              MAX_CONTEXT_CHARS,
            )
          : undefined,
    designIntent:
      typeof source.designIntent === "string"
        ? clampText(source.designIntent, MAX_CONTEXT_CHARS)
        : undefined,
  };

  const hasValues = Object.values(normalized).some(Boolean);
  return hasValues ? normalized : undefined;
}

function parseHistory(history: unknown): HistoryItem[] {
  if (!Array.isArray(history)) {
    return [];
  }

  return history
    .filter((entry): entry is { role: unknown; content: unknown } => {
      return !!entry && typeof entry === "object";
    })
    .filter(
      (
        entry,
      ): entry is {
        role: ChatRole;
        content: unknown;
      } => {
        return entry.role === "user" || entry.role === "assistant";
      },
    )
    .map((entry) => ({
      role: entry.role,
      content: typeof entry.content === "string" ? clampText(entry.content, MAX_HISTORY_CHARS) : "",
    }))
    .filter((entry) => entry.content.length > 0)
    .slice(-MAX_HISTORY_ITEMS);
}

function getClientIp(req: NextRequest) {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const first = forwardedFor.split(",")[0]?.trim();
    if (first) return first;
  }

  return req.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const last = lastRequestByIp.get(ip) ?? 0;

  if (now - last < MIN_REQUEST_INTERVAL_MS) {
    return true;
  }

  lastRequestByIp.set(ip, now);

  if (lastRequestByIp.size > 2000) {
    for (const [key, value] of lastRequestByIp.entries()) {
      if (now - value > 10 * MIN_REQUEST_INTERVAL_MS) {
        lastRequestByIp.delete(key);
      }
    }
  }

  return false;
}

function buildSystemPrompt(pageContext?: PageContext) {
  const basePrompt =
    "You are an architectural portfolio assistant. Respond with concise, accurate, professional guidance focused on architecture, project storytelling, materials, site context, and design rationale. If project details are missing, ask one clarifying question.";

  if (!pageContext) {
    return basePrompt;
  }

  const contextLines = [
    pageContext.title ? `Title: ${pageContext.title}` : null,
    pageContext.description ? `Description: ${pageContext.description}` : null,
    pageContext.location ? `Location: ${pageContext.location}` : null,
    pageContext.year ? `Year: ${pageContext.year}` : null,
    pageContext.materials ? `Materials: ${pageContext.materials}` : null,
    pageContext.designIntent ? `Design intent: ${pageContext.designIntent}` : null,
  ].filter(Boolean);

  return `${basePrompt}\n\nProject context:\n${contextLines.join("\n")}`;
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment and try again." },
        { status: 429 },
      );
    }

    let body: ChatBody;
    try {
      body = (await req.json()) as ChatBody;
    } catch {
      return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
    }

    if (typeof body.message !== "string") {
      return NextResponse.json({ error: "`message` must be a string." }, { status: 400 });
    }

    const message = clampText(body.message, MAX_MESSAGE_CHARS);
    if (!message) {
      return NextResponse.json({ error: "`message` is required." }, { status: 400 });
    }

    const history = parseHistory(body.history);
    const pageContext = parsePageContext(body.pageContext);
    const systemPrompt = buildSystemPrompt(pageContext);

    const stream = await getOpenAIClient().chat.completions.create({
      model: chatModel,
      temperature: 0.5,
      stream: true,
      messages: [
        { role: "system", content: systemPrompt },
        ...history,
        { role: "user", content: message },
      ],
    });

    const encoder = new TextEncoder();

    const responseStream = new ReadableStream<Uint8Array>({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const delta = chunk.choices[0]?.delta?.content;
            if (!delta) continue;
            controller.enqueue(encoder.encode(delta));
          }

          controller.close();
        } catch (error) {
          console.error("OpenAI stream error:", error);
          controller.error(error);
        }
      },
    });

    return new Response(responseStream, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);

    const openAIError = error as OpenAIErrorShape;

    if (openAIError?.status === 429 || openAIError?.type === "insufficient_quota") {
      return NextResponse.json(
        {
          error:
            "OpenAI quota exceeded for this API key. Please verify billing, usage limits, or switch to a funded key.",
        },
        { status: 429 },
      );
    }

    if (openAIError?.status === 401) {
      return NextResponse.json(
        { error: "OpenAI authentication failed. Check OPENAI_API_KEY in .env.local." },
        { status: 401 },
      );
    }

    if (openAIError?.status === 403) {
      return NextResponse.json(
        { error: "OpenAI request was forbidden. Verify project permissions and model access." },
        { status: 403 },
      );
    }

    if (openAIError?.status === 400) {
      return NextResponse.json(
        { error: openAIError.message ?? "Invalid request sent to OpenAI." },
        { status: 400 },
      );
    }

    return NextResponse.json({ error: "Unable to generate a response right now." }, { status: 500 });
  }
}
