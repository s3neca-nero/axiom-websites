/**
 * Shared Tailwind preset for Axiom websites.
 *
 * Brand tokens are defined in packages/ui/src/tokens.css as CSS variables
 * and referenced here so Tailwind utilities like `bg-brand-navy` pick them up.
 *
 * TODO: Verify color hex values and font families against the Figma source
 * files once HappySimple delivers them.
 */
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          // Placeholder biotech-professional palette. Replace with Figma values.
          ink: 'rgb(var(--brand-ink) / <alpha-value>)',       // near-black text
          navy: 'rgb(var(--brand-navy) / <alpha-value>)',     // primary dark
          accent: 'rgb(var(--brand-accent) / <alpha-value>)', // CTA / highlight
          bone: 'rgb(var(--brand-bone) / <alpha-value>)',     // off-white bg
          mist: 'rgb(var(--brand-mist) / <alpha-value>)',     // muted surface
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      maxWidth: {
        prose: '68ch',
        page: '1200px',
      },
    },
  },
};
