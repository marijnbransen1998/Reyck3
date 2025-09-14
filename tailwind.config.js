/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A1A',    // Deep Black
        secondary: '#D4145A',  // Vibrant Pink/Red from Reyck logo
        accent: '#FF4081',     // Lighter Pink
        background: '#F5F5F5', // Light Gray
        text: '#2D2D2D',       // Dark Gray
      },
      fontFamily: {
        sans: ['Cabinet Grotesk', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        accent: ['Clash Display', 'serif'],
        optien: ['Optien', 'Space Grotesk', 'Helvetica Neue', 'Arial', 'sans-serif'],
        din: ['DIN Alternate', 'Cabinet Grotesk', 'Arial Black', 'sans-serif'],
      },
      animation: {
        'slide-up': 'slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-down': 'slideDown 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-left': 'slideLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-right': 'slideRight 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100px) rotate(5deg)', opacity: '0' },
          '100%': { transform: 'translateY(0) rotate(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100px) rotate(-5deg)', opacity: '0' },
          '100%': { transform: 'translateY(0) rotate(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(-100px) rotate(-5deg)', opacity: '0' },
          '100%': { transform: 'translateX(0) rotate(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(100px) rotate(5deg)', opacity: '0' },
          '100%': { transform: 'translateX(0) rotate(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
};