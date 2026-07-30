import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteHeader from "../../_components/site-header";
import SiteFooter from "../../_components/site-footer";
import PostHeader from "../../_components/blog/post-header";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { compilePostContent } from "@/lib/mdx";
import { buildArticleJsonLd, postImage, postUrl } from "@/lib/seo";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.frontmatter.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || post.frontmatter.draft) {
    return {};
  }

  const { frontmatter } = post;
  const url = postUrl(frontmatter.slug);
  const image = postImage(frontmatter);

  return {
    title: `${frontmatter.title} | Tenzor Labs`,
    description: frontmatter.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      url,
      siteName: "Tenzor Labs",
      images: [
        { url: image, width: 1200, height: 630, alt: frontmatter.title },
      ],
      locale: "es_CL",
      type: "article",
      publishedTime: frontmatter.date,
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description: frontmatter.description,
      images: [image],
    },
  };
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
  const jsonLd = buildArticleJsonLd(post.frontmatter);

  return (
    <main className="landing-canvas min-h-screen overflow-hidden">
      <div aria-hidden="true" className="ambient-field" />
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="relative z-10 px-5 py-20 sm:px-6 sm:py-28">
        <PostHeader frontmatter={post.frontmatter} />
        <div className="reveal mx-auto mt-4 max-w-3xl">{content}</div>
      </article>

      <SiteFooter />
    </main>
  );
}
