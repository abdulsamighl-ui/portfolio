import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Platforms from "@/components/Platforms";
import Projects from "@/components/Projects";
import Certificates from "@/components/certificates/FlipCards";
import Testimonials from "@/components/testimonials/VideoWall";
import Pricing from "@/components/sections/Pricing";
import Faqs from "@/components/sections/faqs/TabsByCategory";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "#FAF5EF" }}
    >
      {/* ── Continuous page background — part of document flow, no parallax ── */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        {/* Soft gradient mesh — subtle, low opacity */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 45% at 18% 12%, hsl(193 62% 45% / 0.08) 0%, transparent 55%), radial-gradient(50% 40% at 82% 28%, hsl(38 90% 54% / 0.07) 0%, transparent 50%), radial-gradient(50% 45% at 50% 65%, hsl(193 55% 50% / 0.05) 0%, transparent 55%), radial-gradient(45% 40% at 88% 85%, hsl(38 90% 54% / 0.06) 0%, transparent 50%)",
          }}
        />

        {/* Thin elegant decorative lines — subtle, part of flow */}
        <svg
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden
        >
          <path
            d="M-40 160 C 280 60, 580 260, 880 160 S 1280 80, 1480 200"
            stroke="hsl(193 62% 45%)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.10"
          />
          <path
            d="M-40 680 C 280 580, 580 780, 880 680 S 1280 620, 1480 740"
            stroke="hsl(38 90% 54%)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.08"
          />
          <path
            d="M220 -20 C 340 220, 140 400, 300 580 S 420 760, 360 940"
            stroke="hsl(193 55% 50%)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.07"
          />
        </svg>

        {/* Faint grain texture — small tiled pattern */}
        <div
          className="absolute inset-0 opacity-[0.025] mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "120px 120px",
          }}
        />
      </div>

      {/* ── Page content above background ── */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Marquee />
        <About />
        <Platforms />
        <Projects />
        <Certificates />
        <Testimonials />
        <Pricing />
        <Faqs />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
