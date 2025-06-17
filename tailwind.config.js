/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#0a192f',
        darkSurface: '#112240',
        darkAccent: '#2563eb',
        darkAccent2: '#1e40af',
        darkText: '#f3f4f6',
      },
      boxShadow: {
        'glow': '0 0 20px 5px #2563eb, 0 0 40px 10px #1e40af',
      },
      animation: {
        'gradient-move': 'gradientMove 15s ease infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
    },
  },
  plugins: [],
}; 