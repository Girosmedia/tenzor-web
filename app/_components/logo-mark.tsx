export default function LogoMark() {
  return (
    <span className="relative grid size-11 place-items-center rounded-full border border-aqua/30 bg-aqua/10 text-aqua shadow-[0_0_30px_rgba(34,241,209,0.16)]">
      <svg aria-hidden="true" className="size-6" viewBox="0 0 32 32" fill="none">
        <path
          d="M6 8h20L15.5 24M26 8 16.5 24H6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </span>
  );
}
