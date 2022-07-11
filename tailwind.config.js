module.exports = {
  content: [
    "./src/pages/index.js",
    "./src/pages/404.js"
  ],
  theme: {
    width: {
      '128': '32rem',
    },
    colors: {
      'green': '#3DC172',
      'white': '#FFFFFF',
      'gray': '#2F2B33',
      'black': '#000000',
      'red': '#EB5452',
      'lightgray': "#8F8F8F",
    },
    fontFamily: {
      bree: ["Bree Serif"],
      ceviche: ["Ceviche One"],
      brush: ["Caveat Brush"],
      manrope: ["Manrope"],
    }
  },
  plugins: [
    'gatsby-plugin-postcss',
    // ...
  ],
}