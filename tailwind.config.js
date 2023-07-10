/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
    colors: {
      textPrimary: '#4E4E4E',
      textSecondary: '#ACACAC',
      inputField: '#DBDBDB',
      inputText: '#C3C3C3',
      modalText: '#F5F5F5',
      primaryGreen: '#48C78E',
      lightGreen: '#B6E9D2',
      darkGreen: '#21A86B',
      deleteButton: '#EF5F5F',
      deleteButtonHover: '#FBCFCF',
      linkColor: '#5C9AD2',
      alert: '#DB9758',
      peach: '#F2D8D8',
      teal: '#5C8984',
      navy: '#545B77',
      navyDark: '#374259',
      gradientPrimaryVertical: 'linear-gradient(180deg, #48C78E 0%, #21A86B 100%)',
      gradientSecondaryVertical: 'linear-gradient(180deg, #5C9AD2 0%, #48C78E 100%);',
      gradientSecondaryHorizontal: 'linear-gradient(90deg, #5C9AD2 0%, #48C78E 100%);',
      white: '#FFFFFF',
    },
  },
  plugins: [],
}

