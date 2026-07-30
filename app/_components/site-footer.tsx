import CTAButton from "./cta-button";
import LogoMark from "./logo-mark";

const footerNav = [
  { label: "Arquitectura", href: "#arquitectura" },
  { label: "Sistema", href: "#sistema" },
  { label: "Método", href: "#metodo" },
];

const footerServices = [
  "Producto B2B",
  "Agentes de IA",
  "Automatización",
  "Modernización legacy",
];

export default function SiteFooter() {
  return (
    <footer className="footer-shell relative z-10 px-5 pb-8 pt-4 sm:px-6">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-line/80 bg-panel/70 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.2fr_0.7fr_0.7fr_1fr] lg:p-12">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark />
              <div>
                <p className="text-lg font-semibold tracking-[-0.03em] text-ink">
                  Tenzor Labs
                </p>
                <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-dim">
                  software · IA · automatización
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-base leading-7 text-muted">
              Diseñamos sistemas digitales para empresas que necesitan operar
              más rápido, con menos fricción y una experiencia que se sienta
              inevitablemente moderna.
            </p>
          </div>

          <div>
            <h3 className="footer-title">Navegación</h3>
            <div className="mt-4 grid gap-3">
              {footerNav.map((item) => (
                <a className="footer-link" href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="footer-title">Especialidades</h3>
            <div className="mt-4 grid gap-3">
              {footerServices.map((service) => (
                <span className="footer-link" key={service}>
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className="footer-contact">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-aqua">
              Discovery directo
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-ink">
              Convirtamos tu operación en producto.
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              Santiago, Chile. Trabajamos con equipos B2B que necesitan mover
              una métrica concreta.
            </p>
            <div className="mt-6">
              <CTAButton>hola@tenzorlabs.cl</CTAButton>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-line/70 px-8 py-5 text-sm text-dim sm:flex-row sm:items-center sm:justify-between lg:px-12">
          <p>Tenzor Labs © 2026 | Santiago, Chile.</p>
          <p className="font-mono uppercase tracking-[0.22em]">
            Build the operating edge
          </p>
        </div>
      </div>
    </footer>
  );
}
