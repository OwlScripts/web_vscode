module.exports = {
  content: [
    "./index.html",
    "./src/js/*.js"
  ],
  theme: {
    fontFamily: {
      sans: ['firaCode'],
    },
    extend: {
      translate: {
        '7p': '7px',
        '14p': '14px',
      },
      colors: {
        "primary-white": "#ffffff",
        "secondary-white": "#E5E9F0",
        "back-black": "#010C15",
        "primary-navy": "#011627",
        "secondary-navy": "#1E2D3D",
        "primary-purple": "#4D5BCE",
        "secondary-purple": "#607B96",
        "main-pink": "#E99287",
        "main-green": "#43D9AD",
        "light-orange":"#FEA55F",
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      }
    },
  },
  plugins: [],
}