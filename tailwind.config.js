

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Include all relevant file types
  theme: {
    extend: {},
  },
  backgroundImage:{
     heroLight:"url('src/images/heroLigt.jpg')",
     heroDark:"url('src/images/heroDark.jpg')",
  },
  plugins: [],
}
