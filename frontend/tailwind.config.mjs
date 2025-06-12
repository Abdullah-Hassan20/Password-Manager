// tailwind.config.mjs
import scrollbar from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        xs: '420px',
      }
    },
  },
  plugins: [
    scrollbar({ nocompatible: true })
  ]
}

