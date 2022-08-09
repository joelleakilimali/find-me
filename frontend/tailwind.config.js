/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        default: "background-color: #f5f5f5",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
