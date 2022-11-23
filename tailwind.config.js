/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#291334",
          "base-100": "#FFFFFF"
        },
      },
      "night",
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
