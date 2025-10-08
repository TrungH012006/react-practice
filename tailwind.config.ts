import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        offBlack: "#222222",
        minimalistGray: "#F5F5F5",
        primary: {
          DEFAULT: '#2563eb', // Blue
          hover: '#1d4ed8'
        },
        secondary: {
          DEFAULT: '#4f46e5', // Indigo
          hover: '#4338ca'
        },
        accent: {
          DEFAULT: '#06b6d4', // Cyan
          hover: '#0891b2'
        }
      },
      fontFamily: {
        rethink: ['Rethink Sans', 'sans-serif']
      }
    },
  },
};

export default config;