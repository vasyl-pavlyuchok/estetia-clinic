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
        // Estetia brand palette
        nude: '#F5F0EB',
        beige: '#E8DDD3',
        petrol: '#2C5F6F',
        gold: '#C9A96E',
        carbon: '#2D2D2D',
        // Semantic aliases
        background: '#F5F0EB',
        'background-secondary': '#E8DDD3',
        accent: '#2C5F6F',
        cta: '#C9A96E',
        foreground: '#2D2D2D',
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
