import SectionEyebrow from "../section-eyebrow";

const steps = [
  {
    label: "01",
    title: "Diagnóstico",
    text: "Reviso tu sitio, tu operación y dónde se te están escapando clientes.",
  },
  {
    label: "02",
    title: "Propuesta con precio",
    text: "Recibes un alcance claro y un precio cerrado antes de empezar, sin sorpresas.",
  },
  {
    label: "03",
    title: "Construcción con avance semanal",
    text: "Ves el progreso real cada semana, no una entrega a ciegas al final.",
  },
  {
    label: "04",
    title: "Entrega y medición",
    text: "Lanzamos y dejamos configurado cómo vas a saber si está funcionando.",
  },
];

export default function ProcessSection() {
  return (
    <section
      className="relative z-10 px-5 py-20 sm:px-6 sm:py-28"
      id="como-trabajo"
    >
      <div className="mx-auto max-w-7xl">
        <div className="reveal mx-auto max-w-3xl text-center">
          <SectionEyebrow>Cómo trabajo</SectionEyebrow>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-[-0.055em] text-ink sm:text-6xl">
            Sin sorpresas, con avance visible.
          </h2>
        </div>

        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li className="process-card reveal" key={step.label}>
              <span className="process-index">{step.label}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
