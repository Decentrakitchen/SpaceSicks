module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'cosmic': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        'nebula': {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        }
      },
      animation: {
        'cosmic-drift': 'cosmic-drift 60s linear infinite',
        'nebula-pulse': 'nebula-pulse 20s ease-in-out infinite',
        'scan-line': 'scan-line 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'cosmic-drift': {
          '0%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-50px) translateX(10px)' },
          '50%': { transform: 'translateY(-100px) translateX(0px)' },
          '75%': { transform: 'translateY(-150px) translateX(-10px)' },
          '100%': { transform: 'translateY(-200px) translateX(0px)' },
        },
        'nebula-pulse': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.1)' },
        },
        'scan-line': {
          '0%, 100%': { opacity: '0', transform: 'translateX(-50%) scaleX(0)' },
          '50%': { opacity: '1', transform: 'translateX(-50%) scaleX(1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.8)' },
        }
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
