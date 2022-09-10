/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "minus-header": "calc(100vh - 4rem)",
      },
    },
    colors: {
      "main-red": "#D2001A",
      "main-yellow": "#FFDE00",
      "main-pink": "#FFFAE7",
      "main-gray": "#EFEFEF",
    },
  },
  plugins: [require("flowbite/plugin")],
};
