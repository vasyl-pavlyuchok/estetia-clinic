import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Estetia V2 monochrome luxury palette
        nude: '#FFFFFF',
        beige: '#F6F7F8',
        petrol: '#2C5F6F',
        gold: '#C9A96E',
        carbon: '#000000',
        whitecold: '#FFFFFF',
        inksoft: '#121212',
        darkstage: '#0D1418',
        darkelev: '#111A1F',
        serumBlueBright: '#7FAFC2',
        serumGoldBright: '#D5B884',
        // Semantic aliases
        background: '#FFFFFF',
        'background-secondary': '#F6F7F8',
        accent: '#2C5F6F',
        cta: '#C9A96E',
        foreground: '#000000',
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      // CSS custom properties are exposed via globals.css
    },
  },
  plugins: [],
};

export default config;
