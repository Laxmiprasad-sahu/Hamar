/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#2B0B63',
          light: '#5A189A',
          DEFAULT: '#5A189A',
        },
        secondary: {
          DEFAULT: '#FFD60A',
          dark: '#E5C100',
        },
        accent: {
          gold: '#FF9500',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'Montserrat', 'sans-serif'],
        body: ['Inter', 'Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #2B0B63 0%, #5A189A 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #FFD60A 0%, #FF9500 100%)',
        'gradient-hero': 'linear-gradient(135deg, #2B0B63 0%, #5A189A 50%, #7B2CBF 100%)',
        'gradient-card': 'linear-gradient(145deg, rgba(43, 11, 99, 0.1) 0%, rgba(90, 24, 154, 0.05) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'glow': '0 0 40px rgba(255, 214, 10, 0.3)',
        'glow-purple': '0 0 60px rgba(90, 24, 154, 0.4)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 16px 48px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
