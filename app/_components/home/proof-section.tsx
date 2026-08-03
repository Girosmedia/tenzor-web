import Image from "next/image";
import SectionEyebrow from "../section-eyebrow";
import tendoImg from "@/public/tendo.png"
import tendoPersonaImg from "@/public/tendoPersona.png"
const proofs = [
  {
    name: "Tendo",
    description: "Software que diseñé y construí de cero.",
    href: "https://tendo.cl/",
    image: tendoImg
  },
  {
    name: "Tendo Personas",
    description: "Software que diseñé y construí de cero.",
    href: "https://personas.tendo.cl/",
    image: tendoPersonaImg
  },
];

export default function ProofSection() {
  return (
    <section className="relative z-10 px-5 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mx-auto max-w-3xl text-center">
          <SectionEyebrow>Prueba real</SectionEyebrow>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-[-0.055em] text-ink sm:text-6xl">
            Software que ya está funcionando.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            Sin clientes inventados ni testimonios de relleno: esto es lo que
            he diseñado y construido de cero.
          </p>
        </div>

        <div className="reveal mt-14 grid gap-6 sm:grid-cols-2">
          {proofs.map((proof) => (
            <article className="signal-card" key={proof.name}>
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-line/80">
                <Image
                  src={proof.image}
                  alt={`Captura de ${proof.name}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-ink">
                {proof.name}
              </h3>
              <p className="mt-2 text-base leading-7 text-muted">
                {proof.description}
              </p>
              <a
                className="mt-4 inline-flex items-center text-sm font-semibold text-aqua"
                href={proof.href}
              >
                Ver {proof.name}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
