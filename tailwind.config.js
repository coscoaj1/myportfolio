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
        aboutbg: "url('/images/shapelined-_JBKdviweXI-unsplash.jpg')",
        herobg: "url('/images/shubham-dhage-MIvbZPmY9Ds-unsplash.jpg')",
        skillsbg: "url('/images/esther-jiao-B3FyeM21GdA-unsplash.jpg')",
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
