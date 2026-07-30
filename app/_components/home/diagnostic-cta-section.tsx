import CTAButton from "../cta-button";
import SectionEyebrow from "../section-eyebrow";
import ContactForm from "./contact-form";

// TODO(diagnóstico-real): reemplazar este CTA por la herramienta de
// diagnóstico embebida cuando esté lista, sin tocar el resto del home.
// Este componente no recibe props ni depende de otras secciones a propósito.
export default function DiagnosticCtaSection() {
  return (
    <section className="relative z-10 px-5 py-20 sm:px-6 sm:py-28">
      <div className="cta-stage reveal mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-aqua/20 bg-panel/80 p-8 text-center shadow-2xl shadow-aqua/5 backdrop-blur-xl sm:p-14 lg:p-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center">
          <SectionEyebrow>Diagnóstico gratuito</SectionEyebrow>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-[-0.055em] text-ink sm:text-5xl">
            ¿No sabes por dónde partir? Te lo digo gratis.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Agenda 20 minutos y te muestro qué le falta a tu sitio o a tu
            proceso actual — sin compromiso.
          </p>
          <div className="mt-10">
            <CTAButton large>Agenda tu diagnóstico gratuito</CTAButton>
          </div>

          <div className="mt-10 flex w-full max-w-md items-center gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-dim">
            <span className="h-px flex-1 bg-line/80" />
            o escríbeme directamente
            <span className="h-px flex-1 bg-line/80" />
          </div>

          <div className="mt-8 w-full max-w-md">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
