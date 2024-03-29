// prettier-ignore

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      sans: ['Montserrat', 'Lato', 'sans-serif'],
      logo: ['Poppins', 'Montserrat', 'Lato', 'sans-serif'],
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
        indigo: '#333333',
        darkblue: '#1a1b1f',
        nicered: '#f26d6d',
        happyyellow: '#f2d680',
        darkerblue: '#0d1626',
        lightblue: '#c1cec9',
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      },
    },
  },
  variants: {},
  plugins: [],
};