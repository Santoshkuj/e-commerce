/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg,#fde1ff,#e1ffea22 60%)',
        'custom-newsletter': 'linear-gradient(180deg,#fde1ff 0%,#e1ffea22 60%)',
      },
      lineHeight: {
        '1.1': '1.1',
      },
      gridTemplateColumns :{
        'shopCategory' : 'repeat(auto-fit, minmax(280px, 1fr))'
      }
    },
  },
  plugins: [],
}

