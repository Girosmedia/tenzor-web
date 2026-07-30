import CTAButton from "../cta-button";

export default function HeroSection() {
  return (
    <section className="relative z-10 px-5 pb-20 pt-16 sm:px-6 sm:pb-28 lg:pb-32 lg:pt-24">
      <div className="reveal mx-auto max-w-4xl text-center">
        <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-line/80 bg-panel/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-muted shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl">
          <span className="size-2 rounded-full bg-aqua shadow-[0_0_22px_var(--color-aqua)]" />
          Estudio de software para PyMEs chilenas
        </div>

        {/* FALTA: validar copy final del hero con Pavel */}
        <h1 className="mt-8 text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-ink sm:text-6xl lg:text-7xl">
          Software que hace crecer{" "}
          <span className="font-serif font-normal italic tracking-[-0.03em] text-aqua">
            tu negocio
          </span>
          , no solo tu sitio web.
        </h1>

        <p className="mt-8 text-pretty text-lg leading-8 text-muted sm:text-xl">
          Diseño y construyo sitios que convierten, software a medida y
          automatizaciones para PyMEs y empresas chilenas que necesitan más
          clientes, no solo una web más bonita.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <CTAButton large>Agenda un diagnóstico gratuito</CTAButton>
          <a
            className="group inline-flex items-center justify-center rounded-full border border-line/80 bg-panel/50 px-7 py-4 text-base font-semibold text-ink transition duration-300 hover:border-aqua/70 hover:text-aqua"
            href="#que-hago"
          >
            Ver qué hago
            <span
              aria-hidden="true"
              className="ml-2 transition-transform duration-300 group-hover:translate-y-0.5"
            >
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
