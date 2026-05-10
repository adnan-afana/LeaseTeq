/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00d4ff',
        secondary: '#1a1a2e',
        accent: '#ff6b35',
        dark: '#0f0f1e',
      },
    },
  },
  plugins: [],
}
