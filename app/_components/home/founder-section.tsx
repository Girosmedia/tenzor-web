import SectionEyebrow from "../section-eyebrow";

// FALTA: confirmar el texto exacto de las 3 credenciales con Pavel.
const credentials = [
  "Publicista",
  "Ingeniero administrador de empresas",
  "Magíster en Inteligencia Artificial",
];

export default function FounderSection() {
  return (
    <section className="relative z-10 px-5 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-[auto_1fr] sm:items-center">
        <div className="reveal mx-auto flex size-40 shrink-0 items-center justify-center rounded-full border border-dashed border-line/80 px-4 text-center text-xs text-dim sm:mx-0 sm:size-48">
          [FALTA: foto de Pavel]
        </div>

        <div className="reveal">
          <SectionEyebrow>Quién está detrás</SectionEyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-ink sm:text-4xl">
            Pavel Chávez
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {credentials.map((credential) => (
              <li
                className="capability-chip capability-chip-sm"
                key={credential}
              >
                {credential}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-lg leading-8 text-muted">
            Entiendo de negocio, de marketing y de tecnología — no solo
            programo. Por eso el software que construyo está pensado para
            traerte clientes, no solo para verse bien.
          </p>
        </div>
      </div>
    </section>
  );
}
