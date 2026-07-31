import type { Metadata } from "next";
import type { ReactNode } from "react";
import SiteHeader from "../_components/site-header";
import SiteFooter from "../_components/site-footer";
import SectionEyebrow from "../_components/section-eyebrow";
import { CONTACT_EMAILS } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Términos y condiciones | Tenzor Labs",
  description:
    "Condiciones de uso del sitio y de los servicios de desarrollo de software de Tenzor Labs.",
};

function Heading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-xl font-semibold tracking-[-0.02em] text-ink">
      {children}
    </h2>
  );
}

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
            Última actualización: 31-07-2026
          </p>

          <div className="reveal mt-10 space-y-10 text-base leading-7 text-muted">
            <p>
              Estos términos y condiciones regulan el uso del sitio
              tenzorlabs.cl y la contratación de servicios de{" "}
              <strong className="text-ink">Tenzor Labs SpA</strong>, RUT
              78.428.179-5, con domicilio en General Sandino 3735,
              Conchalí, Santiago de Chile (en adelante, &ldquo;Tenzor
              Labs&rdquo;).
            </p>
            <p>
              Al contratar un servicio con Tenzor Labs, usted acepta estos
              términos. Las condiciones específicas de cada proyecto
              (alcance, precio, plazo) se definen en una propuesta o
              contrato particular, que prevalece sobre lo aquí dispuesto
              en caso de conflicto.
            </p>

            <section>
              <Heading>1. Objeto</Heading>
              <p className="mt-3">
                Tenzor Labs presta servicios de desarrollo de software,
                sitios web, automatización de procesos e implementación
                de productos propios (Tendo, Tendo Personas) para
                empresas en Chile. Estos términos aplican a toda relación
                comercial derivada de una propuesta aceptada, salvo que
                un contrato específico indique lo contrario.
              </p>
            </section>

            <section>
              <Heading>2. Alcance de los servicios</Heading>
              <p className="mt-3">
                Cada proyecto se rige por el alcance descrito en su
                propuesta comercial específica. Como regla general:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Todo lo no listado explícitamente como incluido en la
                  propuesta se considera fuera de alcance y se cotiza por
                  separado.
                </li>
                <li>
                  Los plazos comprometidos cuentan desde que el cliente
                  entrega los insumos necesarios para iniciar el trabajo
                  (accesos, contenidos, información, aprobaciones), no
                  desde la firma de la propuesta.
                </li>
                <li>
                  Cambios de alcance solicitados durante el desarrollo se
                  cotizan como adicionales y requieren aceptación expresa
                  antes de ejecutarse.
                </li>
              </ul>
            </section>

            <section>
              <Heading>3. Precios y forma de pago</Heading>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Los precios se expresan en UF o en pesos chilenos más
                  IVA, según lo indicado en cada propuesta.
                </li>
                <li>
                  La modalidad estándar es 50% de anticipo al inicio y
                  50% contra la entrega del hito o proyecto acordado,
                  mediante transferencia bancaria, salvo que la propuesta
                  específica indique otra modalidad.
                </li>
                <li>
                  Los servicios con componente mensual (mantención,
                  hosting, soporte, licencia de producto) se facturan por
                  adelantado y de forma recurrente mientras el servicio
                  esté activo.
                </li>
                <li>
                  El atraso en el pago de un hito puede significar la
                  suspensión del trabajo hasta regularizar la situación.
                </li>
              </ul>
            </section>

            <section>
              <Heading>4. Propiedad intelectual</Heading>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  El código y los entregables desarrollados a medida para
                  un cliente son de propiedad del cliente una vez pagada
                  la totalidad del proyecto. Antes del pago completo,
                  Tenzor Labs conserva la propiedad sobre lo desarrollado.
                </li>
                <li>
                  Se exceptúan las librerías, componentes, plantillas y
                  herramientas de uso general preexistentes o de
                  desarrollo propio de Tenzor Labs, que se reutilizan
                  entre proyectos y permanecen de su propiedad. Respecto
                  de estos, el cliente recibe una licencia de uso
                  indefinida, no exclusiva e intransferible, en el
                  contexto del entregable contratado.
                </li>
                <li>
                  Los productos propios de Tenzor Labs (Tendo, Tendo
                  Personas) no se transfieren: se licencian para uso del
                  cliente mientras la relación comercial esté vigente. El
                  cliente es propietario de los datos que ingrese en
                  ellos, no del software.
                </li>
                <li>
                  Tenzor Labs puede mencionar el trabajo realizado como
                  referencia o caso de estudio únicamente con
                  autorización expresa y por escrito del cliente.
                </li>
              </ul>
            </section>

            <section>
              <Heading>5. Garantía y soporte</Heading>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Los proyectos de desarrollo a medida incluyen 30 días
                  de garantía desde la entrega, cubriendo la corrección
                  de errores sobre lo específicamente acordado en la
                  propuesta. No cubre cambios de alcance ni nuevas
                  funcionalidades.
                </li>
                <li>
                  El soporte estándar de los servicios con mantención
                  mensual responde por correo en un plazo de hasta 2 días
                  hábiles. Planes de soporte con tiempos de respuesta
                  menores se cotizan aparte.
                </li>
              </ul>
            </section>

            <section>
              <Heading>6. Protección de datos personales</Heading>
              <p className="mt-3">
                El tratamiento de datos personales por parte de Tenzor
                Labs, tanto en el sitio web como en la prestación de
                servicios, se rige por la{" "}
                <a
                  className="text-aqua underline underline-offset-4"
                  href="/privacidad"
                >
                  Política de Privacidad
                </a>
                , disponible en tenzorlabs.cl/privacidad, que forma parte
                integral de estos términos.
              </p>
              <p className="mt-3">
                Cuando un proyecto implique que Tenzor Labs trate datos
                personales por cuenta del cliente (por ejemplo, al
                implementar Tendo Personas con datos de trabajadores), el
                cliente actúa como responsable del tratamiento y Tenzor
                Labs como encargado, conforme a un contrato de encargo de
                tratamiento de datos que se suscribe de forma separada
                para ese proyecto.
              </p>
            </section>

            <section>
              <Heading>7. Responsabilidad</Heading>
              <p className="mt-3">
                Tenzor Labs presta sus servicios con estándares
                profesionales y responde por la correcta ejecución de lo
                expresamente acordado en cada propuesta.
              </p>
              <p className="mt-3">Tenzor Labs no responde por:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Decisiones comerciales, operativas o legales que el
                  cliente adopte a partir del uso del software entregado.
                </li>
                <li>
                  Errores o perjuicios derivados de información
                  incorrecta, incompleta o desactualizada entregada por
                  el cliente.
                </li>
                <li>
                  Interrupciones, fallas o cambios en servicios de
                  terceros de los que depende el proyecto (proveedores de
                  hosting, APIs externas, pasarelas de pago, servicios de
                  correo).
                </li>
                <li>
                  Daños indirectos, lucro cesante o pérdida de
                  oportunidades comerciales.
                </li>
                <li>
                  El uso que el cliente haga del software fuera de las
                  condiciones o finalidades acordadas.
                </li>
              </ul>
              <p className="mt-4">
                <strong className="text-ink">
                  Límite de responsabilidad.
                </strong>{" "}
                La responsabilidad total de Tenzor Labs frente al
                cliente, por cualquier causa, no excederá el monto
                efectivamente pagado por el cliente por el proyecto o
                servicio en que se origine el reclamo.
              </p>
              <p className="mt-4">
                <strong className="text-ink">
                  Software de gestión de personas.
                </strong>{" "}
                Los productos que asisten en cálculos remuneracionales o
                previsionales (Tendo Personas) son herramientas de apoyo.
                La revisión y validación de los cálculos, así como el
                cumplimiento de las obligaciones laborales, previsionales
                y tributarias, corresponden en todo caso al cliente en su
                calidad de empleador. Tenzor Labs mantiene los parámetros
                normativos actualizados según lo comprometido en el
                servicio de mantención contratado, cuando corresponda.
              </p>
            </section>

            <section>
              <Heading>8. Terminación</Heading>
              <p className="mt-3">
                Cualquiera de las partes puede terminar una relación de
                servicio mensual con aviso previo de 60 días. No existe
                permanencia mínima salvo que se indique lo contrario en
                una propuesta específica. Al terminar, Tenzor Labs
                entrega al cliente sus datos exportados sin costo
                adicional.
              </p>
            </section>

            <section>
              <Heading>9. Modificaciones</Heading>
              <p className="mt-3">
                Tenzor Labs puede actualizar estos términos para
                reflejar cambios en sus servicios o en la normativa
                vigente. La fecha de &ldquo;Última actualización&rdquo;
                indica la versión vigente. Cambios sustanciales se
                comunicarán a los clientes con contratos activos antes de
                entrar en vigor.
              </p>
            </section>

            <section>
              <Heading>10. Ley aplicable y resolución de controversias</Heading>
              <p className="mt-3">
                Estos términos se rigen por las leyes de la República de
                Chile.
              </p>
              <p className="mt-3">
                Ante cualquier controversia derivada de estos términos o
                de un proyecto contratado, las partes se obligan a
                intentar resolverla de buena fe mediante los siguientes
                pasos, en orden:
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-6">
                <li>
                  <strong className="text-ink">
                    Negociación directa
                  </strong>{" "}
                  entre las partes, por un plazo de 30 días corridos
                  desde que una de ellas notifique la controversia por
                  escrito.
                </li>
                <li>
                  <strong className="text-ink">Mediación</strong>, ante
                  un mediador designado de común acuerdo por las partes,
                  cuyos honorarios se dividirán en partes iguales. Este
                  proceso tendrá un plazo máximo de 30 días corridos
                  desde la designación del mediador.
                </li>
              </ol>
              <p className="mt-3">
                Si transcurridas ambas etapas no existe acuerdo,
                cualquiera de las partes podrá recurrir a los tribunales
                ordinarios de justicia con asiento en la ciudad de
                Santiago de Chile.
              </p>
            </section>

            <section>
              <Heading>11. Contacto</Heading>
              <p className="mt-3">
                Para consultas sobre estos términos: {CONTACT_EMAILS.general}
              </p>
            </section>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
