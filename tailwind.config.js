/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#80B82D",
        secondary: "#F5F5F5",
        content: "#666666",
        third: "#f4f4f4",
      },
      fontFamily: {
        pacifico: "Pacifico,cursive",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: { rtl: true },
};
