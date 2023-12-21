/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      backgroundColor: {
        dark: "#1e1e1e",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
    },
  },
};
