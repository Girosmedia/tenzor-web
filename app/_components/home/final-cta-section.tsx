import CTAButton from "../cta-button";
import SectionEyebrow from "../section-eyebrow";

export default function FinalCtaSection() {
  return (
    <section className="relative z-10 px-5 py-20 sm:px-6 sm:py-28">
      <div className="cta-stage reveal mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-aqua/20 bg-panel/80 p-8 text-center shadow-2xl shadow-aqua/5 backdrop-blur-xl sm:p-14 lg:p-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center">
          <SectionEyebrow>El siguiente paso</SectionEyebrow>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-[-0.055em] text-ink sm:text-6xl">
            Si tu operación ya tiene tensión, construyamos el sistema que la
            libere.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Cuéntame tu cuello de botella y te propongo una ruta clara: qué
            automatizar, qué construir y qué medir primero.
          </p>
          <div className="mt-10">
            <CTAButton large>Agenda un diagnóstico gratuito</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
