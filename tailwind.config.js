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
      backgroundImage: {
        aboutbg: "url('/images/aboutBG.webp')",
        herobg: "url('/images/heroImage.webp')",
      },
    },
  },
  variants: {
    extend: {
      transitionProperty: ["hover", "focus", "active"],
    },
  },
  plugins: [],
};
