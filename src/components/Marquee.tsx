import { useReducedMotion } from "framer-motion";

/* ── Real brand logos ── */
const TOOLS = [
  {
    name: "GoHighLevel",
    img: "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a94dd817fb05fdeb809523c.svg",
  },
  { name: "Meta", img: "https://cdn.simpleicons.org/meta/0866FF" },
  { name: "Google Ads", img: "https://cdn.simpleicons.org/googleads/4285F4" },
  {
    name: "Google Analytics 4",
    img: "https://cdn.simpleicons.org/googleanalytics/E37400",
  },
  {
    name: "Google Tag Manager",
    img: "https://cdn.simpleicons.org/googletagmanager/246FDB",
  },
  { name: "Zapier", img: "https://cdn.simpleicons.org/zapier/FF4A00" },
  { name: "n8n", img: "https://cdn.simpleicons.org/n8n/EA4B71" },
];

const Marquee = () => {
  const reduced = useReducedMotion();
  const track = [...TOOLS, ...TOOLS];

  return (
    <section
      aria-label="Tools and platforms I work in daily"
      className="relative pt-14 sm:pt-12 lg:pt-14 pb-4 sm:pb-8 lg:pb-10"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Label with flanking lines */}
        <div className="mb-9 flex items-center justify-center gap-4">
          <span
            className="h-px w-12 sm:w-20"
            style={{
              background:
                "linear-gradient(90deg, transparent, hsl(215 10% 36% / 0.35))",
            }}
            aria-hidden
          />
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-hero-muted/70">
            Tools &amp; platforms I work in daily
          </span>
          <span
            className="h-px w-12 sm:w-20"
            style={{
              background:
                "linear-gradient(90deg, hsl(215 10% 36% / 0.35), transparent)",
            }}
            aria-hidden
          />
        </div>

        {/* Marquee viewport */}
        <div
          className="group relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          }}
        >
          <div
            className="flex w-max items-center group-hover:[animation-play-state:paused]"
            style={
              reduced
                ? undefined
                : {
                    animation: "marquee-scroll 42s linear infinite",
                    willChange: "transform",
                  }
            }
          >
            {track.map((tool, i) => (
              <div
                key={`${tool.name}-${i}`}
                className="flex items-center gap-3.5 px-7 sm:px-8"
              >
                <span className="transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={tool.img}
                    alt={`${tool.name} logo`}
                    width={38}
                    height={38}
                    loading="lazy"
                    decoding="async"
                    className="h-[38px] w-[38px] object-contain"
                  />
                </span>
                <span className="whitespace-nowrap font-display text-[17px] font-semibold tracking-tight text-hero-ink/85 transition-colors duration-300">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
