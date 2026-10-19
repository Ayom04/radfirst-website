// One inline SVG sprite for the whole site; icons reference it with <use href="#i-…">.
export function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <symbol id="i-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></symbol>
      <symbol id="i-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 8h16M4 16h16" /></symbol>
      <symbol id="i-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></symbol>
      <symbol id="i-play" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l13-7.5z" /></symbol>
      <symbol id="i-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></symbol>
      <symbol id="i-up" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 16V4M7 9l5-5 5 5M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" /></symbol>
      <symbol id="i-info" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 7.5v.5" /></symbol>
      <symbol id="i-ig" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r=".6" fill="currentColor" /></symbol>
      <symbol id="i-tt" viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 3c.3 2.2 1.6 3.7 3.9 3.9v3.1c-1.4.1-2.7-.3-3.9-1.1v6.2c0 3.6-2.6 5.9-5.8 5.9A5.6 5.6 0 015.1 15c.1-3.7 3.3-6.1 7-5.5v3.3c-1.7-.5-3.6.4-3.7 2.3-.1 1.6 1.1 2.8 2.6 2.8 1.6 0 2.5-1.1 2.5-2.9V3h3.1z" /></symbol>
      <symbol id="i-fb" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1z" /></symbol>
    </svg>
  );
}

type IconName = "arrow" | "menu" | "close" | "play" | "check" | "up" | "info" | "ig" | "tt" | "fb";

export function Icon({ name, className, style }: { name: IconName; className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} aria-hidden="true">
      <use href={`#i-${name}`} />
    </svg>
  );
}

/** The arrow used inside buttons; `.btn:hover svg.i-arrow` nudges it right. */
export const Arrow = () => <Icon name="arrow" className="i-arrow" />;

export function Ecg({ tail = 0.15, footer = false }: { tail?: number; footer?: boolean }) {
  return (
    <div className="ecg" aria-hidden="true">
      <i />
      <svg viewBox="0 0 220 70" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round">
        <path d="M0 40h62l10-20 12 40 22-58 26 66 14-28h74" />
      </svg>
      {footer ? <i style={{ flex: 0.4 }} /> : <><i /><span className="dot" /><i style={{ flex: tail }} /></>}
    </div>
  );
}
