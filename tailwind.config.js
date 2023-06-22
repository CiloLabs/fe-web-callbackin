export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      '2xl': {max: '1535px'},
      xl: {max: '1280px'},
      lg: {max: '1114px'},
      md: {max: '912px'},
      sm: {max: '820px'},
      xsm: {max: '540px'},
      mobile: {max: '428px'},
      se: {max: '375px'},
      verysmall: {max: '320px'},
    },
  },
  plugins: [],
};
