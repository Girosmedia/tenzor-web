import type { Metadata } from "next";
import SiteHeader from "../_components/site-header";
import SiteFooter from "../_components/site-footer";
import SectionEyebrow from "../_components/section-eyebrow";
import { CONTACT_EMAILS } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Política de privacidad | Tenzor Labs",
  description:
    "Cómo Tenzor Labs recolecta, usa y protege tus datos personales, en línea con la Ley 21.719.",
};

export default function Privacidad() {
  return (
    <main className="landing-canvas min-h-screen overflow-hidden">
      <div aria-hidden="true" className="ambient-field" />
      <SiteHeader />

      <section className="relative z-10 px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <SectionEyebrow>Legal</SectionEyebrow>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-[-0.055em] text-ink sm:text-5xl">
            Política de privacidad
          </h1>
          <p className="mt-4 text-sm text-dim">
            [FALTA: fecha de última actualización real]
          </p>

          <div className="reveal mt-10 space-y-8 text-base leading-7 text-muted">
            <p className="rounded-2xl border border-dashed border-line/80 p-4 text-sm text-dim">
              [FALTA: texto legal completo validado por Pavel, en línea con
              la Ley 21.719. El contenido de esta página es un borrador
              estructural, no un documento legal vigente.]
            </p>

            <section>
              <h2 className="text-xl font-semibold text-ink">
                Responsable del tratamiento
              </h2>
              <p className="mt-3">
                [FALTA: identificación del responsable — nombre, RUT y
                domicilio de Tenzor Labs / Pavel Chávez.]
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">
                Datos que recolectamos
              </h2>
              <p className="mt-3">
                [FALTA: detalle de los datos recolectados — formularios de
                contacto, agendamiento en Cal.com, analítica del sitio.]
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">
                Para qué usamos tus datos
              </h2>
              <p className="mt-3">
                [FALTA: finalidades del tratamiento de datos.]
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">
                Tus derechos bajo la Ley 21.719
              </h2>
              <p className="mt-3">
                [FALTA: detalle de los derechos de acceso, rectificación,
                cancelación, oposición y portabilidad, y el procedimiento
                para ejercerlos.]
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">Contacto</h2>
              <p className="mt-3">
                Para consultas sobre esta política, escribe a{" "}
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
