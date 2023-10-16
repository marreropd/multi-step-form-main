/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "marine-blue": "var(--marine-blue)",
        "purplish-blue": "var(--purplish-blue)",
        "pastel-blue": "var(--pastel-blue)",
        "light-blue": "var(--light-blue)",
        "strawberry-red": "var(--strawberry-blue)",
        "cool-gray": "var(--cool-gray)",
        "light-gray": "var(--light-gray)",
        magnolia: "var(--magnolia)",
        alabaster: "var(--alabaster)",
        white: "var(--white)",
      },
      fontFamily: {
        "main-font": "var(--main-font)",
      },
    },
    plugins: [],
  },
};
