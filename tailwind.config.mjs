/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          paper: '#faf7f0',
          cream: '#f3eee2',
          ink: '#1a1611',
          soft: '#575046',
          faint: '#8a8177',
          line: '#e2d9c8',
          terracotta: '#c85c3a',
          'terracotta-deep': '#a84a2e',
          sage: '#3e7a4e',
          'sage-wash': '#e4efe3',
          wa: '#1fa855',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'step--1': ['0.875rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        'step-0': ['1rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        'step-1': ['1.25rem', { lineHeight: '1.55', letterSpacing: '-0.015em' }],
        'step-2': ['1.6rem', { lineHeight: '1.45', letterSpacing: '-0.02em' }],
        'step-3': ['2.15rem', { lineHeight: '1.35', letterSpacing: '-0.025em' }],
        'step-4': ['2.9rem', { lineHeight: '1.25', letterSpacing: '-0.03em' }],
        'step-5': ['3.9rem', { lineHeight: '1.15', letterSpacing: '-0.035em' }],
        'step-6': ['5.3rem', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
      },
      maxWidth: {
        prose: '72ch',
        container: '1152px',
      },
      borderRadius: {
        card: '0.75rem',
        pill: '9999px',
      },
    },
  },
  plugins: [],
};
