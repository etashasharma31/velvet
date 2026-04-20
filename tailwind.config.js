/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: 'var(--color-surface)',
        'on-surface': 'var(--color-on-surface)',
        primary: 'var(--color-primary)',
        'primary-container': 'var(--color-primary-container)',
        'on-primary': 'var(--color-on-primary)',
        secondary: 'var(--color-secondary)',
        'secondary-container': 'var(--color-secondary-container)',
        'surface-container': 'var(--color-surface-container)',
        'surface-container-low': 'var(--color-surface-container-low)',
        'surface-container-high': 'var(--color-surface-container-high)',
        'outline-variant': 'var(--color-outline-variant)',
        'on-surface-variant': 'var(--color-on-surface-variant)',
      },
      fontFamily: {
        headline: 'var(--font-headline)',
        brand: 'var(--font-brand)',
        body: 'var(--font-body)',
        label: 'var(--font-label)',
      }
    },
  },
  plugins: [],
}
