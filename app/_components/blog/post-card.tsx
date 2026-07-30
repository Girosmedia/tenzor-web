import Link from "next/link";
import type { Post } from "@/lib/blog";

export default function PostCard({ post }: { post: Post }) {
  const { frontmatter } = post;

  return (
    <Link className="signal-card block" href={`/blog/${frontmatter.slug}`}>
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-aqua">
        {frontmatter.category}
      </p>
      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-ink">
        {frontmatter.title}
      </h3>
      <p className="mt-3 text-base leading-7 text-muted">
        {frontmatter.description}
      </p>
      <p className="mt-4 text-sm text-dim">
        {new Date(frontmatter.date).toLocaleDateString("es-CL", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </Link>
  );
}
