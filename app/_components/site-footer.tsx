import CTAButton from "./cta-button";
import LogoMark from "./logo-mark";
import { CONTACT_EMAILS } from "@/lib/site-config";

const footerNav = [
  { label: "Qué hago", href: "/#que-hago" },
  { label: "Cómo trabajo", href: "/#como-trabajo" },
  { label: "Blog", href: "/blog" },
  { label: "Capacidades técnicas", href: "/capacidades" },
];

const footerServices = [
  "Sitios que convierten",
  "Automatización de procesos",
  "Software a medida",
  "Cumplimiento Ley 21.719",
];

const footerProducts = [
  // FALTA: URLs reales de las landings de Tendo y Tendo Personas.
  { label: "Tendo", href: "#" },
  { label: "Tendo Personas", href: "#" },
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
                  software para PyMEs chilenas
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-base leading-7 text-muted">
              Diseño y construyo sitios, software a medida y automatizaciones
              para negocios chilenos que necesitan más clientes.
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
            <h3 className="footer-title">Servicios</h3>
            <div className="mt-4 grid gap-3">
              {footerServices.map((service) => (
                <span className="footer-link" key={service}>
                  {service}
                </span>
              ))}
            </div>
            <h3 className="footer-title mt-6">Productos</h3>
            <div className="mt-4 grid gap-3">
              {footerProducts.map((product) => (
                <a
                  className="footer-link"
                  href={product.href}
                  key={product.label}
                >
                  {product.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-contact">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-aqua">
              Contacto directo
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-ink">
              Construyamos el sistema que te trae clientes.
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              Santiago, Chile. Trabajo con PyMEs y empresas chilenas que
              quieren crecer con software real.
            </p>
            <p className="mt-3 text-sm leading-6 text-muted">
              {CONTACT_EMAILS.general} · {CONTACT_EMAILS.founder}
            </p>
            <div className="mt-6">
              <CTAButton href={`mailto:${CONTACT_EMAILS.general}`}>
                {CONTACT_EMAILS.general}
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-line/70 px-8 py-5 text-sm text-dim sm:flex-row sm:items-center sm:justify-between lg:px-12">
          <p>Tenzor Labs © 2026 | Santiago, Chile.</p>
          <div className="flex gap-4">
            <a className="footer-link" href="/privacidad">
              Privacidad
            </a>
            <a className="footer-link" href="/terminos">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
