/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary colors derived from logo - Orange/Amber (#FF9600)
        primary: {
          50: '#fff5e6',
          100: '#ffe8cc',
          200: '#ffd699',
          300: '#ffbd66',
          400: '#ffa333',
          500: '#ff9600',  // Logo primary: #FF9600
          600: '#e68500',
          700: '#cc7500',
          800: '#b36400',
          900: '#995400',
          950: '#4d2a00',
        },
        // Secondary colors from logo - Blue/Cyan (#0078E1)
        secondary: {
          50: '#e6f0ff',
          100: '#cce0ff',
          200: '#99c2ff',
          300: '#66a3ff',
          400: '#3385ff',
          500: '#0078e1',  // Logo secondary: #0078E1
          600: '#0060b4',
          700: '#004887',
          800: '#00305a',
          900: '#00182d',
          950: '#000c16',
        },
        // Accent gold from logo highlights
        gold: {
          50: '#fffdf5',
          100: '#fff9eb',
          200: '#fff0cc',
          300: '#ffe099',
          400: '#ffd066',
          500: '#ffc133',
          600: '#e6ad2e',
          700: '#cc9b29',
          800: '#b38824',
          900: '#99751f',
          950: '#4d3a0f',
        },
        neon: {
          cyan: '#00ffff',
          pink: '#ff00ff',
          gold: '#ffd700',
          orange: '#ff6b00',
          green: '#39ff14',
        },
        dark: {
          50: '#1a1a2e',
          100: '#161628',
          200: '#121220',
          300: '#0e0e18',
          400: '#0a0a12',
          500: '#080810',
          600: '#06060c',
          700: '#040408',
          800: '#030306',
          900: '#020204',
          950: '#010102',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-down': 'slideDown 0.8s ease-out forwards',
        'slide-left': 'slideLeft 0.8s ease-out forwards',
        'slide-right': 'slideRight 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 150, 0, 0.4), 0 0 40px rgba(0, 120, 225, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 150, 0, 0.6), 0 0 80px rgba(0, 120, 225, 0.4)' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'logo-gradient': 'linear-gradient(135deg, #FF9600 0%, #0078E1 100%)',
        'hero-pattern': "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff9600' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
}