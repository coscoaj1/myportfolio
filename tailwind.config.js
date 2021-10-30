module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans"],
    },

    extend: {
      textColor: {
        text: "#1abc9c",
      },
    },
  },
  variants: {
    extend: {
      transitionProperty: ["hover", "focus"],
    },
  },
  plugins: [],
};
