/* ── Icons ──────────────────────────────────────────────────── */
export const CheckSmall = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M5 13l4 4L19 7"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const BarChartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M4 20V10M10 20V4M16 20v-6M22 20H2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const TagIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M3 7l8-4 8 4-8 4-8-4z M3 7v10l8 4 8-4V7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const TargetIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);
export const CertificateIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="9" r="6" stroke="currentColor" strokeWidth="2" />
    <path
      d="M8.5 13.5L7 22l5-2.5L17 22l-1.5-8.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const FlowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M4 7h16M4 12h10M4 17h7"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ── Real brand logos ── */
const GHL_LOGO =
  "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a94dd817fb05fdeb809523c.svg";

export const GhlLogo = ({ size = 20 }: { size?: number }) => (
  <img
    src={GHL_LOGO}
    alt="GoHighLevel"
    width={size}
    height={size}
    loading="lazy"
    decoding="async"
    className="object-contain"
    style={{ height: size, width: size }}
    aria-hidden
  />
);

export const Ga4Logo = () => (
  <img
    src="https://cdn.simpleicons.org/googleanalytics/E37400"
    alt="Google Analytics"
    width={20}
    height={20}
    loading="lazy"
    decoding="async"
    className="h-5 w-5 object-contain"
    aria-hidden
  />
);

export const GtmLogo = () => (
  <img
    src="https://cdn.simpleicons.org/googletagmanager/246FDB"
    alt="Google Tag Manager"
    width={20}
    height={20}
    loading="lazy"
    decoding="async"
    className="h-5 w-5 object-contain"
    aria-hidden
  />
);

export const MetaAdsLogos = () => (
  <img
    src="https://cdn.simpleicons.org/meta/0866FF"
    alt="Meta"
    width={20}
    height={20}
    loading="lazy"
    decoding="async"
    className="h-5 w-5 shrink-0 object-contain"
    aria-hidden
  />
);

/* ── Static pipeline diagram (CSS-animated pulse, no SMIL) ── */
export const WorkflowDiagram = () => (
  <svg
    className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-[0.13]"
    viewBox="0 0 240 200"
    fill="none"
    aria-hidden
  >
    <defs>
      <linearGradient id="flowLine" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="hsl(193 62% 45%)" />
        <stop offset="100%" stopColor="hsl(193 55% 50%)" />
      </linearGradient>
      <radialGradient id="nodeGlow">
        <stop offset="0%" stopColor="hsl(193 62% 50%)" stopOpacity="0.8" />
        <stop offset="100%" stopColor="hsl(193 62% 50%)" stopOpacity="0" />
      </radialGradient>
    </defs>
    <path
      d="M30,40 C80,40 80,100 120,100"
      stroke="url(#flowLine)"
      strokeWidth="1.5"
      fill="none"
      opacity="0.6"
    />
    <path
      d="M30,160 C80,160 80,100 120,100"
      stroke="url(#flowLine)"
      strokeWidth="1.5"
      fill="none"
      opacity="0.6"
    />
    <path
      d="M120,100 C170,100 170,60 210,60"
      stroke="url(#flowLine)"
      strokeWidth="1.5"
      fill="none"
      opacity="0.6"
    />
    <path
      d="M120,100 C170,100 170,140 210,140"
      stroke="url(#flowLine)"
      strokeWidth="1.5"
      fill="none"
      opacity="0.6"
    />
    <circle cx="30" cy="40" r="16" fill="url(#nodeGlow)" />
    <circle cx="30" cy="160" r="16" fill="url(#nodeGlow)" />
    <circle cx="120" cy="100" r="22" fill="url(#nodeGlow)" />
    <circle cx="210" cy="60" r="16" fill="url(#nodeGlow)" />
    <circle cx="210" cy="140" r="16" fill="url(#nodeGlow)" />
    <circle cx="30" cy="40" r="7" fill="hsl(193 62% 45%)" />
    <circle cx="30" cy="160" r="7" fill="hsl(193 62% 45%)" />
    <circle cx="120" cy="100" r="11" fill="hsl(193 62% 45%)" />
    <circle cx="210" cy="60" r="7" fill="hsl(193 55% 50%)" />
    <circle cx="210" cy="140" r="7" fill="hsl(193 55% 50%)" />
    {/* CSS-animated pulse ring on center node */}
    <circle
      cx="120"
      cy="100"
      r="11"
      fill="none"
      stroke="hsl(193 55% 50%)"
      strokeWidth="1.5"
      className="origin-center animate-[wfmpulse_2.5s_ease-out_infinite]"
      style={{ transformBox: "fill-box" }}
    />
  </svg>
);
