export default function PillarIcon({ type }: { type: string }) {
  const common = "var(--color-aqua)";

  return (
    <div className="grid size-16 shrink-0 place-items-center rounded-2xl border border-aqua/20 bg-aqua/10 text-aqua transition duration-300 group-hover:scale-105 group-hover:border-aqua/50">
      <svg aria-hidden="true" className="size-9" fill="none" viewBox="0 0 48 48">
        {type === "agents" && (
          <>
            <circle cx="24" cy="24" r="9" stroke={common} strokeWidth="2" />
            <path d="M24 5v10M24 33v10M5 24h10M33 24h10" stroke={common} strokeLinecap="round" strokeWidth="2" />
            <path d="m11 11 7 7M37 11l-7 7M11 37l7-7M37 37l-7-7" stroke={common} strokeLinecap="round" strokeWidth="2" />
            <circle cx="24" cy="24" r="3" fill={common} />
          </>
        )}
        {type === "product" && (
          <>
            <rect x="8" y="10" width="32" height="26" rx="6" stroke={common} strokeWidth="2" />
            <path d="M8 18h32M17 28h14M17 23h22" stroke={common} strokeLinecap="round" strokeWidth="2" />
            <circle cx="15" cy="14" r="1.5" fill={common} />
            <circle cx="20" cy="14" r="1.5" fill={common} />
          </>
        )}
        {type === "systems" && (
          <>
            <path d="M13 13h22v22H13z" stroke={common} strokeLinejoin="round" strokeWidth="2" />
            <path d="M19 5v8M29 5v8M19 35v8M29 35v8M5 19h8M5 29h8M35 19h8M35 29h8" stroke={common} strokeLinecap="round" strokeWidth="2" />
            <path d="M20 24h8m-4-4v8" stroke={common} strokeLinecap="round" strokeWidth="2" />
          </>
        )}
      </svg>
    </div>
  );
}
