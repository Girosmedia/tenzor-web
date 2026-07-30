import type { ReactNode } from "react";
import { CALCOM_URL } from "@/lib/site-config";

interface CTAButtonProps {
  children?: ReactNode;
  className?: string;
  large?: boolean;
  variant?: "primary" | "secondary";
  href?: string;
}

export default function CTAButton({
  children = "Agenda un diagnóstico gratuito",
  className = "",
  large = false,
  variant = "primary",
  href = CALCOM_URL,
}: CTAButtonProps) {
  const sizeClass = large
    ? "px-7 py-4 text-base sm:px-10 sm:text-lg"
    : "px-5 py-3 text-sm";

  return (
    <a
      className={[
        "group inline-flex items-center justify-center rounded-full font-semibold tracking-[-0.01em] transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-aqua focus-visible:ring-offset-2 focus-visible:ring-offset-shell",
        sizeClass,
        variant === "primary" ? "cta-primary" : "cta-secondary",
        className,
      ].join(" ")}
      href={href}
    >
      {children}
      <svg
        aria-hidden="true"
        className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
      </svg>
    </a>
  );
}
