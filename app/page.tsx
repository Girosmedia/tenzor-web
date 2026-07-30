import SiteHeader from "./_components/site-header";
import SiteFooter from "./_components/site-footer";
import SectionEyebrow from "./_components/section-eyebrow";
import BlueprintIllustration from "./_components/illustrations/blueprint-illustration";
import CTAButton from "./_components/cta-button";
import HeroSection from "./_components/home/hero-section";
import ProblemSection from "./_components/home/problem-section";
import ServicesSection from "./_components/home/services-section";
import ProofSection from "./_components/home/proof-section";
import FounderSection from "./_components/home/founder-section";
import ProcessSection from "./_components/home/process-section";
import DiagnosticCtaSection from "./_components/home/diagnostic-cta-section";

const capabilities = [
  "Agentes multi-step",
  "SaaS B2B",
  "Dashboards ejecutivos",
  "Integraciones API",
  "Automatización backoffice",
  "Portales de clientes",
  "Observabilidad",
  "Modernización legacy",
];

const systemModules = [
  {
    label: "Mecanismo 01",
    title: "Captura operativa",
    text: "Convertimos formularios, solicitudes, tickets, documentos y eventos del negocio en datos ordenados desde el primer contacto.",
  },
  {
    label: "Mecanismo 02",
    title: "Decisión asistida",
    text: "Diseñamos reglas, scoring y agentes que priorizan casos, recomiendan acciones y reducen decisiones repetitivas.",
  },
  {
    label: "Mecanismo 03",
    title: "Ejecución automática",
    text: "Conectamos APIs, bases de datos y herramientas internas para que el sistema haga avanzar el trabajo sin persecución manual.",
  },
  {
    label: "Mecanismo 04",
    title: "Aprendizaje medible",
    text: "Cada flujo deja trazas, métricas y evidencia para saber qué mejora, qué se atasca y dónde invertir la siguiente iteración.",
  },
];

export default function Home() {
  return (
    <main className="landing-canvas min-h-screen overflow-hidden">
      <div aria-hidden="true" className="ambient-field" />

      <SiteHeader />

      <HeroSection />

      <ProblemSection />

      <ServicesSection />

      <ProofSection />

      <FounderSection />

      <section className="relative z-10 px-5 py-20 sm:px-6 sm:py-28" id="sistema">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mx-auto max-w-3xl text-center">
            <SectionEyebrow>Sistema operativo de crecimiento</SectionEyebrow>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-[-0.055em] text-ink sm:text-6xl">
              No entregamos páginas. Entregamos mecanismos.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              La capa visual, la lógica de negocio y las automatizaciones se
              diseñan juntas para que el producto no solo se vea avanzado: opere
              con inteligencia.
            </p>
          </div>

          <div className="reveal mx-auto mt-14 max-w-4xl">
            <div className="flex flex-wrap justify-center gap-2">
              {capabilities.map((capability) => (
                <span className="capability-chip capability-chip-sm" key={capability}>
                  {capability}
                </span>
              ))}
            </div>
          </div>

          <div className="blueprint-panel reveal mt-6 overflow-hidden rounded-[2rem] border border-line/80 bg-panel/70 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="space-y-4">
                  {systemModules.map((module, index) => (
                    <div
                      className="system-module-card group"
                      key={module.label}
                    >
                      <div className="flex items-start gap-4">
                        <span className="system-module-index">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.24em] text-aqua">
                            {module.label}
                          </p>
                          <h3 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-ink">
                            {module.title}
                          </h3>
                          <p className="mt-3 text-sm leading-6 text-muted">
                            {module.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[440px] overflow-hidden border-t border-line/80 bg-shell-soft/70 p-4 sm:p-8 lg:border-l lg:border-t-0">
                <BlueprintIllustration />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessSection />

      <DiagnosticCtaSection />

      <section className="relative z-10 px-5 py-20 sm:px-6 sm:py-28">
        <div className="cta-stage reveal mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-aqua/20 bg-panel/80 p-8 text-center shadow-2xl shadow-aqua/5 backdrop-blur-xl sm:p-14 lg:p-20">
          <div className="mx-auto flex max-w-4xl flex-col items-center">
            <SectionEyebrow>El siguiente movimiento</SectionEyebrow>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-[-0.055em] text-ink sm:text-6xl">
              Si tu operación ya tiene tensión, construyamos el sistema que la
              libere.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              Cuéntanos tu cuello de botella y diseñamos una ruta técnica clara:
              que automatizar, que construir y que medir primero.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <CTAButton large>Agendar diagnóstico</CTAButton>
              <CTAButton large variant="secondary">
                Hablar con un Arquitecto
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
