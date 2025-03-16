/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        pink: '#FF99C8',
        yellow: '#FCF6BD',
        mint: '#D0F4DE',
        blue: '#A9DEF9',
        purple: '#E4C1F9',
      },
    },
  },
  plugins: [],
}
