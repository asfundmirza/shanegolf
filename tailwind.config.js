/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bounceOnce: {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
      animation: {
        bounceOnce: "bounceOnce 1s ease",
      },
    },
  },
  plugins: [],
};
