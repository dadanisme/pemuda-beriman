/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "main-red": "#D2001A",
      "main-yellow": "#FFDE00",
      "main-pink": "#FFFAE7",
      "main-gray": "#EFEFEF",
    },
  },
  plugins: [require("flowbite/plugin")],
};
