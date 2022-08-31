/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      screen: "500px",
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        "main-yellow": "#F7D281",
        "main-light-yellow": "#FDF6E4",
        "main-dark-green": "#2D4633",
        "main-mid-green": "#77AB56",
        "main-light-green": "#B6E399",
      },
    },
  },
  plugins: [],
};
