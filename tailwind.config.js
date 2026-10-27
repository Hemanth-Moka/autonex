/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      colors: {
        sahora: {
          bg: '#262729',
          card: '#2e3033',
          border: '#3f4247',
          beige: '#FFE7C2',
          cream: '#FFF4E3',
          gold: '#dfbe8f',
          muted: '#9a9ea7',
        },
        brand: {
          50: '#fff9ed',
          100: '#ffeecd',
          200: '#ffe7c2',
          300: '#fad495',
          400: '#f5b958',
          500: '#e59a24',
          600: '#ca7a17',
          700: '#a35715',
          800: '#844419',
          900: '#6d3918',
        },
      },
      animation: {
        'ticker': 'ticker 30s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
