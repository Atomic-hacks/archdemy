import { notFound } from "next/navigation";
import { journal } from "@/lib/studio";
import MotionSurface from "@/components/ui/MotionSurface";
import PageHero from "@/components/ui/PageHero";
import Link from "@/components/ui/TransitionLink";
export function generateStaticParams() {
  return journal.map((post) => ({ slug: post.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = journal.find((p) => p.slug === slug);
  return {
    title: `${post?.title ?? "Journal"} | Archademy`,
    description: post?.summary,
  };
}
export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = journal.find((p) => p.slug === slug);
  if (!post) notFound();
  return (
    <main>
      <MotionSurface key={slug}>
        <PageHero
          title={post.title}
          image={post.image}
          left="Studio journal"
          right={post.category}
        />
        <article id="page-content" className="site-gutter journal-article">
          <p className="journal-standfirst" data-reveal="text">
            {post.summary}
          </p>
          <div>
            {post.paragraphs.map((paragraph) => (
              <p key={paragraph} data-reveal="text">
                {paragraph}
              </p>
            ))}
            <Link href="/journal" className="text-link">
              Back to the journal
            </Link>
          </div>
        </article>
      </MotionSurface>
    </main>
  );
}
