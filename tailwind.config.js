/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"], // adjust if using React/Vite
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
         aliceblue: "#7dd3fc",
        primary: '#f0f8ff', // Alice Blue (correct hex)
        accent: {
          light: '#7dd3fc',
          dark: '#38bdf8',
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      }
    }
  },
  plugins: [],
}