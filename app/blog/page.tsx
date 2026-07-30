import type { Metadata } from "next";
import SiteHeader from "../_components/site-header";
import SiteFooter from "../_components/site-footer";
import SectionEyebrow from "../_components/section-eyebrow";
import PostCard from "../_components/blog/post-card";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Tenzor Labs",
  description:
    "Notas sobre sitios que convierten, automatización y cumplimiento de la Ley 21.719 para PyMEs chilenas.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="landing-canvas min-h-screen overflow-hidden">
      <div aria-hidden="true" className="ambient-field" />
      <SiteHeader />

      <section className="relative z-10 px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mx-auto max-w-3xl text-center">
            <SectionEyebrow>Blog</SectionEyebrow>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-[-0.055em] text-ink sm:text-6xl">
              Notas para dueños de PyME.
            </h1>
          </div>

          {posts.length === 0 ? (
            <p className="reveal mt-14 text-center text-lg text-muted">
              Todavía no hay artículos publicados.
            </p>
          ) : (
            <div className="reveal mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post.frontmatter.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
