import { notFound } from "next/navigation";
import SiteHeader from "../../_components/site-header";
import SiteFooter from "../../_components/site-footer";
import PostHeader from "../../_components/blog/post-header";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { compilePostContent } from "@/lib/mdx";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.frontmatter.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || post.frontmatter.draft) {
    notFound();
  }

  const content = await compilePostContent(post.content);

  return (
    <main className="landing-canvas min-h-screen overflow-hidden">
      <div aria-hidden="true" className="ambient-field" />
      <SiteHeader />

      <article className="relative z-10 px-5 py-20 sm:px-6 sm:py-28">
        <PostHeader frontmatter={post.frontmatter} />
        <div className="reveal mx-auto mt-4 max-w-3xl">{content}</div>
      </article>

      <SiteFooter />
    </main>
  );
}
