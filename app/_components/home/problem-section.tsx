import SectionEyebrow from "../section-eyebrow";

const problems = [
  {
    title: "No apareces cuando te buscan",
    text: "Tu negocio existe, pero en Google no se nota. Los clientes buscan y encuentran primero a la competencia.",
  },
  {
    title: "Las consultas se pierden",
    text: "Llegan mensajes por WhatsApp, formulario o redes sociales y terminan perdidos entre chats, sin seguimiento ni registro.",
  },
  {
    title: "No sabes qué está funcionando",
    text: "Inviertes en marketing o en una web, pero no tienes forma clara de saber qué te trae clientes y qué no.",
  },
];

export default function ProblemSection() {
  return (
    <section className="relative z-10 px-5 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mx-auto max-w-3xl text-center">
          <SectionEyebrow>El problema</SectionEyebrow>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-[-0.055em] text-ink sm:text-6xl">
            Lo que le pasa a la mayoría de las PyMEs.
          </h2>
        </div>

        <div className="reveal mt-14 grid gap-5 sm:grid-cols-3">
          {problems.map((problem) => (
            <article className="signal-card" key={problem.title}>
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-ink">
                {problem.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-muted">
                {problem.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
