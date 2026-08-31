/* ── Icons for Platforms & Skills section ───────────────────── */

export const FunnelIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M3 4h18l-7 8v7l-4 2v-9L3 4z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const NodesIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="6" cy="6" r="3" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="18" cy="6" r="3" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="18" r="3" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M8.5 7.5L11 15M15.5 7.5L13 15M9 6h6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);
export const ChatIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M4 5h16v11H8l-4 4V5z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 9h8M8 12h5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);
export const MicIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect
      x="9"
      y="3"
      width="6"
      height="11"
      rx="3"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M5 11a7 7 0 0 0 14 0M12 18v3"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);
export const LayersIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M12 3l9 5-9 5-9-5 9-5z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 13l9 5 9-5M3 16l9 5 9-5"
      stroke="currentColor"
      strokeWidth="1.8"
      opacity="0.5"
    />
  </svg>
);
export const DocIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M6 3h9l5 5v13H6V3z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 3v5h5M9 13h6M9 17h4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);
export const PlugIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M9 2v6M15 2v6M6 8h12v3a6 6 0 0 1-12 0V8zM12 17v5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const GridIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect
      x="3"
      y="3"
      width="7"
      height="7"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <rect
      x="14"
      y="3"
      width="7"
      height="7"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <rect
      x="3"
      y="14"
      width="7"
      height="7"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <rect
      x="14"
      y="14"
      width="7"
      height="7"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.8"
    />
  </svg>
);
export const DashboardIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2.5"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M3 9h18M9 21V9"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M6 17l1.5-2.5L9 16l1.5-3"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* Tool chip icons — real brand logos */
export const ChartSmall = () => (
  <img
    src="https://cdn.simpleicons.org/googleanalytics/E37400"
    alt="GA4"
    width={16}
    height={16}
    loading="lazy"
    decoding="async"
    className="h-4 w-4 object-contain"
    aria-hidden
  />
);
export const TagSmall = () => (
  <img
    src="https://cdn.simpleicons.org/googletagmanager/246FDB"
    alt="Google Tag Manager"
    width={16}
    height={16}
    loading="lazy"
    decoding="async"
    className="h-4 w-4 object-contain"
    aria-hidden
  />
);
export const MetaSmall = () => (
  <img
    src="https://cdn.simpleicons.org/meta/0866FF"
    alt="Meta Ads"
    width={16}
    height={16}
    loading="lazy"
    decoding="async"
    className="h-4 w-4 object-contain"
    aria-hidden
  />
);
export const TargetSmall = () => (
  <img
    src="https://cdn.simpleicons.org/googleads/4285F4"
    alt="Google Ads"
    width={16}
    height={16}
    loading="lazy"
    decoding="async"
    className="h-4 w-4 object-contain"
    aria-hidden
  />
);
