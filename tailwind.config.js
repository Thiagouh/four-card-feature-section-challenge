/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "c-red": "hsl(0, 78%, 62%)",
        "c-cyan": "hsl(180, 62%, 55%)",
        "c-orange": "hsl(34, 97%, 64%)",
        "c-blue": "hsl(212, 86%, 64%)",
      },
    },
  },
  plugins: [],
};
