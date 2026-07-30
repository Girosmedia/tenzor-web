import Link from "next/link";
import CTAButton from "./cta-button";
import LogoMark from "./logo-mark";

const navItems = [
  { label: "Qué hago", href: "/#que-hago" },
  { label: "Cómo trabajo", href: "/#como-trabajo" },
  { label: "Blog", href: "/blog" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-4 py-4 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-line/80 bg-shell/70 px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl">
        <Link className="group flex items-center gap-3" href="/" aria-label="Tenzor Labs">
          <LogoMark />
          <div className="leading-none">
            <p className="text-sm font-semibold tracking-[-0.02em] text-ink">
              Tenzor Labs
            </p>
            <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-dim">
              software para PyMEs
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Principal">
          {navItems.map((item) => (
            <Link
              className="rounded-full px-4 py-2 text-sm font-medium text-muted transition duration-300 hover:bg-panel-soft hover:text-ink"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <CTAButton className="hidden sm:inline-flex">Hablemos</CTAButton>
      </div>
    </header>
  );
}
