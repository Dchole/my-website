module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        headline: '"Nunito Sans", sans-serif',
        body: "Roboto, sans-serif"
      },
      backgroundImage: _theme => ({
        "waves-light": "url('/waves-bg-light.png')",
        "waves-dark": "url('/waves-bg-dark.png')"
      })
    }
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      boxShadow: ["active"]
    }
  },
  plugins: []
};
