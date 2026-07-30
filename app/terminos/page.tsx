import type { Metadata } from "next";
import SiteHeader from "../_components/site-header";
import SiteFooter from "../_components/site-footer";
import SectionEyebrow from "../_components/section-eyebrow";
import { CONTACT_EMAILS } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Términos y condiciones | Tenzor Labs",
  description:
    "Condiciones de uso del sitio y de los servicios de desarrollo de software de Tenzor Labs.",
};

export default function Terminos() {
  return (
    <main className="landing-canvas min-h-screen overflow-hidden">
      <div aria-hidden="true" className="ambient-field" />
      <SiteHeader />

      <section className="relative z-10 px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <SectionEyebrow>Legal</SectionEyebrow>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-[-0.055em] text-ink sm:text-5xl">
            Términos y condiciones
          </h1>
          <p className="mt-4 text-sm text-dim">
            [FALTA: fecha de última actualización real]
          </p>

          <div className="reveal mt-10 space-y-8 text-base leading-7 text-muted">
            <p className="rounded-2xl border border-dashed border-line/80 p-4 text-sm text-dim">
              [FALTA: texto legal completo validado por Pavel. El contenido
              de esta página es un borrador estructural, no un documento
              legal vigente.]
            </p>

            <section>
              <h2 className="text-xl font-semibold text-ink">Objeto</h2>
              <p className="mt-3">
                [FALTA: descripción de los servicios que ofrece Tenzor Labs
                y a qué se aplican estos términos.]
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">
                Alcance de los servicios
              </h2>
              <p className="mt-3">
                [FALTA: qué incluye y qué no incluye un proyecto — alineado
                con la propuesta con precio de la sección &ldquo;Cómo
                trabajo&rdquo;.]
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">
                Precios y forma de pago
              </h2>
              <p className="mt-3">
                [FALTA: condiciones comerciales — anticipos, hitos de pago,
                moneda.]
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">
                Propiedad intelectual
              </h2>
              <p className="mt-3">
                [FALTA: a quién pertenece el código y los entregables una
                vez pagado el proyecto.]
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">
                Responsabilidad
              </h2>
              <p className="mt-3">
                [FALTA: límites de responsabilidad de Tenzor Labs frente al
                cliente.]
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">
                Ley aplicable
              </h2>
              <p className="mt-3">
                Estos términos se rigen por las leyes de la República de
                Chile.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">Contacto</h2>
              <p className="mt-3">
                Para consultas sobre estos términos, escribe a{" "}
                {CONTACT_EMAILS.general}.
              </p>
            </section>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
