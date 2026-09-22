export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0E1C2B',
          soft: '#1B3047',
          muted: '#5A6A79',
        },
        gold: {
          DEFAULT: '#B98E3E',
          light: '#D9B86A',
          wash: '#F3EADA',
        },
        azure: {
          DEFAULT: '#2E7CB8',
          wash: '#E7F0F7',
        },
        cream: {
          DEFAULT: '#FAF7F1',
          deep: '#F2EDE4',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        overline: '0.22em',
      },
      transitionTimingFunction: {
        refined: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
}
