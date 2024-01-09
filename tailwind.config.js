/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        600: "37.5rem",
        500: "31.25rem",
      },
      maxHeight: {
        600: "37.5rem",
        500: "31.25rem",
      },
    },
  },
  plugins: [],
};

