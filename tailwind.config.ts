import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        cobalt: {
          50: '#FFF8E8',
          100: '#FFF1D0',
          200: '#FFE3A8',
          300: '#FFD580',
          400: '#FFC75C',
          500: '#FFC541',
          600: '#E6A82B',
          700: '#CC9220',
          800: '#B37B1A',
          900: '#996614',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        hero: {
          bg: 'hsl(var(--hero-bg))',
          ink: 'hsl(var(--hero-ink))',
          emerald: 'hsl(var(--hero-emerald))',
          'emerald-soft': 'hsl(var(--hero-emerald-soft))',
          cobalt: 'hsl(var(--hero-cobalt))',
          gold: 'hsl(var(--hero-gold))',
          muted: 'hsl(var(--hero-muted))',
        },
        about: {
          bg: 'hsl(var(--about-bg))',
          ink: 'hsl(var(--about-ink))',
          muted: 'hsl(var(--about-muted))',
          emerald: 'hsl(var(--about-emerald))',
          cobalt: 'hsl(var(--about-cobalt))',
          card: 'hsl(var(--about-card))',
          border: 'hsl(var(--about-border))',
        },
        platforms: {
          bg: 'hsl(var(--platforms-bg))',
          bg2: 'hsl(var(--platforms-bg2))',
          ink: 'hsl(var(--platforms-ink))',
          muted: 'hsl(var(--platforms-muted))',
          emerald: 'hsl(var(--platforms-emerald))',
          cobalt: 'hsl(var(--platforms-cobalt))',
          border: 'hsl(var(--platforms-border))',
        },
        services: {
          bg: 'hsl(var(--services-bg))',
          ink: 'hsl(var(--services-ink))',
          muted: 'hsl(var(--services-muted))',
          emerald: 'hsl(var(--services-emerald))',
          border: 'hsl(var(--services-border))',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
