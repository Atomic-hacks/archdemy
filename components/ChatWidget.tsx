"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle, Send, X } from "lucide-react";

type ChatRole = "user" | "assistant";

type PageContext = {
  title?: string;
  description?: string;
  location?: string;
  year?: string;
  materials?: string | string[];
  designIntent?: string;
};

type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
};

type ChatWidgetProps = {
  pageContext?: PageContext;
};

const MAX_INPUT_CHARS = 1000;
const MAX_HISTORY_ITEMS = 12;
const MIN_SEND_INTERVAL_MS = 1200;

const assistantWelcome =
  "Hi, I can help explain this studio's architecture work, design intent, material choices, and project story.";

function normalizeContent(content: string) {
  const trimmed = content.trim();
  if (!trimmed) return "";
  return trimmed.length > MAX_INPUT_CHARS
    ? `${trimmed.slice(0, MAX_INPUT_CHARS)}...`
    : trimmed;
}

export default function ChatWidget({ pageContext }: ChatWidgetProps) {
  const pathname = usePathname();
  const storageKey = useMemo(() => `archdemy-chat:${pathname}`, [pathname]);

  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "welcome", role: "assistant", content: assistantWelcome },
  ]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const lastSentAtRef = useRef(0);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (!raw) return;

      const parsed = JSON.parse(raw) as ChatMessage[];
      if (!Array.isArray(parsed) || parsed.length === 0) return;

      const safe = parsed
        .filter((entry) => {
          return (
            !!entry &&
            (entry.role === "user" || entry.role === "assistant") &&
            typeof entry.content === "string" &&
            typeof entry.id === "string"
          );
        })
        .slice(-50);

      if (safe.length > 0) {
        setMessages(safe);
      }
    } catch {
      // Ignore localStorage parsing errors.
    }
  }, [storageKey]);

  useEffect(() => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(messages.slice(-50)));
    } catch {
      // Ignore localStorage write errors.
    }
  }, [messages, storageKey]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isStreaming, isOpen]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const now = Date.now();
    if (now - lastSentAtRef.current < MIN_SEND_INTERVAL_MS) {
      setError("Please wait a moment before sending another message.");
      return;
    }

    const normalizedInput = normalizeContent(input);
    if (!normalizedInput || isStreaming) return;

    const userMessage: ChatMessage = {
      id: `user-${now}`,
      role: "user",
      content: normalizedInput,
    };

    const assistantId = `assistant-${now}`;

    const historyForApi = messages
      .filter((entry) => entry.content.trim().length > 0)
      .slice(-MAX_HISTORY_ITEMS)
      .map((entry) => ({
        role: entry.role,
        content: entry.content,
      }));

    setMessages((prev) => [...prev, userMessage, { id: assistantId, role: "assistant", content: "" }]);
    setInput("");
    setError(null);
    setIsStreaming(true);
    lastSentAtRef.current = now;

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: normalizedInput,
          pageContext,
          history: historyForApi,
        }),
      });

      if (!response.ok) {
        let message = "Something went wrong. Please try again.";
        try {
          const data = (await response.json()) as { error?: string };
          if (data.error) {
            message = data.error;
          }
        } catch {
          // Use generic fallback message.
        }
        throw new Error(message);
      }

      if (!response.body) {
        throw new Error("Streaming not available in this browser.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        assistantText += decoder.decode(value, { stream: true });
        setMessages((prev) =>
          prev.map((entry) =>
            entry.id === assistantId ? { ...entry, content: assistantText } : entry,
          ),
        );
      }

      if (!assistantText.trim()) {
        setMessages((prev) =>
          prev.map((entry) =>
            entry.id === assistantId
              ? {
                  ...entry,
                  content: "I do not have a response yet. Please try again.",
                }
              : entry,
          ),
        );
      }
    } catch (streamError) {
      const message =
        streamError instanceof Error ? streamError.message : "Unable to reach chat service.";

      setMessages((prev) =>
        prev.map((entry) =>
          entry.id === assistantId
            ? {
                ...entry,
                content: "Sorry, I hit an error. Please try again in a moment.",
              }
            : entry,
        ),
      );
      setError(message);
    } finally {
      setIsStreaming(false);
    }
  }

  return (
    <>
      {isOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[1px]"
          aria-label="Close chat overlay"
          onClick={() => setIsOpen(false)}
        />
      ) : null}

      <div className="fixed bottom-5 right-5 z-50">
        <button
          type="button"
          aria-label={isOpen ? "Close chat" : "Open chat"}
          onClick={() => setIsOpen((prev) => !prev)}
          className="group flex h-14 w-14 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-900 shadow-xl transition hover:border-neutral-900"
        >
          {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
        </button>
      </div>

      {isOpen ? (
        <section
          aria-label="Portfolio assistant"
          className="fixed inset-x-0 bottom-0 top-[15vh] z-50 flex flex-col rounded-t-2xl border border-neutral-200 bg-white shadow-2xl md:inset-auto md:bottom-[5.5rem] md:right-5 md:top-auto md:h-[36rem] md:w-[24rem] md:max-w-[calc(100vw-2rem)] md:rounded-2xl"
        >
          <header className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-neutral-500">Architectural Assistant</p>
              <h2 className="text-sm font-semibold text-neutral-900">Project Q&A</h2>
            </div>
            <button
              type="button"
              aria-label="Close chat"
              className="rounded-md p-2 text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900"
              onClick={() => setIsOpen(false)}
            >
              <X size={18} />
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                  message.role === "user"
                    ? "ml-auto bg-neutral-900 text-white"
                    : "bg-neutral-100 text-neutral-900"
                }`}
              >
                {message.content || (isStreaming && message.role === "assistant" ? "Thinking..." : "")}
              </div>
            ))}
            {isStreaming ? (
              <p className="text-xs tracking-wide text-neutral-500">Streaming response...</p>
            ) : null}
            <div ref={bottomRef} />
          </div>

          {error ? (
            <div className="border-t border-neutral-200 bg-red-50 px-4 py-2 text-xs text-red-700">{error}</div>
          ) : null}

          <form onSubmit={onSubmit} className="border-t border-neutral-200 p-3">
            <div className="flex items-end gap-2">
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value.slice(0, MAX_INPUT_CHARS))}
                placeholder="Ask about this project..."
                rows={2}
                className="max-h-28 min-h-[2.75rem] w-full resize-y rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none transition focus:border-neutral-900"
              />
              <button
                type="submit"
                disabled={isStreaming || !input.trim()}
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-900 text-white transition enabled:hover:bg-neutral-700 disabled:cursor-not-allowed disabled:bg-neutral-300"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
            <p className="mt-2 text-[11px] text-neutral-500">{input.length}/{MAX_INPUT_CHARS}</p>
          </form>
        </section>
      ) : null}
    </>
  );
}
