/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        consolas: "consolas",
      },
      gridTemplateColumns: {
        calculator: "repeat(4, 5rem)",
      },
      gridAutoRows: {
        calculator: "5rem",
      },
      // gridTemplateRows: {
      //   calculator: "minmax(6rem, auto), repeat(5, 6rem)",
      // },
      boxShadow: {
        calculatorContainer:
          "25px 25px 75px rgba(0,0,0,0.25), 10px 10px 70px rgba(0,0,0,0.25), inset -5px -5px 15px rgba(0,0,0,0.5), inset 5px 5px 15px rgba(0,0,0,0.5)",
        calculatorButton:
          "inset -8px 0 8px rgba(0,0,0,0.15), inset 0 0 0 2px rgba(0,0,0,0.25), 0 0 0 2px rgba(0,0,0,0.75), 10px 20px 25px rgba(0,0,0,0.4)",
        calculatorButtonBefore:
          "-5px -5px 15px rgba(0,0,0,0.1), 10px 5px 10px (0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
