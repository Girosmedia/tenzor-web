import type { PostFrontmatter } from "@/lib/blog";

export default function PostHeader({
  frontmatter,
}: {
  frontmatter: PostFrontmatter;
}) {
  return (
    <header className="reveal mx-auto max-w-3xl text-center">
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-aqua">
        {frontmatter.category}
      </p>
      <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-[-0.055em] text-ink sm:text-6xl">
        {frontmatter.title}
      </h1>
      <p className="mt-6 text-lg leading-8 text-muted">
        {frontmatter.description}
      </p>
      <p className="mt-4 text-sm text-dim">
        {new Date(frontmatter.date).toLocaleDateString("es-CL", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </header>
  );
}
