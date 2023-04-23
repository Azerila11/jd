/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          "dark-black": "#000",
        },
      },
      fontFamily: {
        vazir: ["VazirLight"],
        vazirMedium: ["VazirMedium"],
        vazirBold: ["VazirBold"],
      },
    },
  },
  plugins: [],
};
