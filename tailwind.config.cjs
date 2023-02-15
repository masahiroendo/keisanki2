/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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
        calculatorContainerLight:
          "25px 25px 75px rgba(0,0,0,0.15), 10px 10px 70px rgba(0,0,0,0.15), inset -5px -5px 15px rgba(0,0,0,0.15), inset 5px 5px 15px rgba(0,0,0,0.05)",
        calculatorButton:
          "inset -8px 0 8px rgba(0,0,0,0.15), inset 0 -8px 8px rgba(0,0,0,0.25), 0 0 0 2px rgba(0,0,0,0.75), 10px 20px 25px rgba(0,0,0,0.4)",
        calculatorButtonLight:
          "inset -8px 0 8px rgba(0,0,0,0.15), inset 0 -8px 8px rgba(0,0,0,0.15), 0 0 0 2px rgba(0,0,0,1), 10px 20px 25px rgba(0,0,0,0.25)",
        calculatorButtonBefore:
          "-5px -5px 15px rgba(0,0,0,0.1), 10px 5px 10px (0,0,0,0.15)",
        calculatorButtonBeforeLight:
          "-10px -10px 10px rgba(255,255,255,0.25), 10px 5px 10px (0,0,0,0.15)",
        switchThemeButtonDark:
          "5px 5px 15px rgba(0,0,0,0.25), 5px 5px 30px rgba(0,0,0,0.25), inset -2px -2px 5px rgba(0,0,0,0.25), inset 2px 2px 5px rgba(0,0,0,0.25)",
        switchThemeButtonLight:
          "5px 5px 15px rgba(0,0,0,0.1), 5px 5px 30px rgba(0,0,0,0.05), inset -2px -2px 5px rgba(0,0,0,0.1), inset 2px 2px 5px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
};
