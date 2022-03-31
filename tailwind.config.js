module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'opensans': ['Open Sans']
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
