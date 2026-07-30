import SectionEyebrow from "../section-eyebrow";

const services = [
  {
    title: "Sitios que convierten",
    text: "Páginas rápidas y claras, pensadas para que quien te encuentra termine escribiéndote.",
  },
  {
    title: "Automatización de procesos",
    text: "Menos trabajo manual repetitivo: cotizaciones, seguimientos y tareas que hoy haces a mano.",
  },
  {
    title: "Integraciones y software a medida",
    text: "Herramientas conectadas a cómo realmente trabaja tu negocio, no plantillas genéricas.",
  },
  {
    title: "Cumplimiento Ley 21.719",
    text: "Tu sitio y tus datos con la configuración correcta para cumplir con la nueva ley de protección de datos.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative z-10 px-5 py-20 sm:px-6 sm:py-28" id="que-hago">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mx-auto max-w-3xl text-center">
          <SectionEyebrow>Qué hago</SectionEyebrow>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-[-0.055em] text-ink sm:text-6xl">
            Un socio técnico, no solo un desarrollador.
          </h2>
        </div>

        <div className="reveal mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article className="signal-card" key={service.title}>
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-ink">
                {service.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-muted">
                {service.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
