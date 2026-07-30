import Link from "next/link";
import SiteHeader from "../../_components/site-header";
import SiteFooter from "../../_components/site-footer";
import SectionEyebrow from "../../_components/section-eyebrow";

export default function PostNotFound() {
  return (
    <main className="landing-canvas min-h-screen overflow-hidden">
      <div aria-hidden="true" className="ambient-field" />
      <SiteHeader />

      <section className="relative z-10 px-5 py-24 text-center sm:px-6 sm:py-32">
        <div className="mx-auto max-w-2xl">
          <SectionEyebrow>404</SectionEyebrow>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-[-0.055em] text-ink sm:text-5xl">
            No encontramos este artículo.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            Puede que el enlace esté mal escrito o que el post todavía no
            esté publicado.
          </p>
          <Link
            className="mt-10 inline-flex items-center justify-center rounded-full border border-line/80 bg-panel/50 px-7 py-4 text-base font-semibold text-ink transition duration-300 hover:border-aqua/70 hover:text-aqua"
            href="/blog"
          >
            Volver al blog
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
