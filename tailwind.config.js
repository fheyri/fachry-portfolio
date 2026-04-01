/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
      colors: {
        cyan: {
          primary: '#00d4aa',
          secondary: '#00a8ff',
        }
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s ease-out infinite',
        'scan': 'scan 3s linear infinite',
      }
    },
  },
  plugins: [],
}
