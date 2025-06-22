/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  safelist: [
    // Background colors
    {
      pattern:
        /^bg-(red|blue|green|yellow|purple|pink|gray|slate|zinc|neutral|stone|amber|orange|lime|emerald|teal|cyan|sky|indigo|violet|fuchsia|rose)-(50|100|200|300|400|500|600|700|800|900)$/,
    },
    // Text colors
    {
      pattern:
        /^text-(red|blue|green|yellow|purple|pink|gray|slate|zinc|neutral|stone|amber|orange|lime|emerald|teal|cyan|sky|indigo|violet|fuchsia|rose)-(50|100|200|300|400|500|600|700|800|900)$/,
    },
    // Optional: hover/focus variants
    {
      pattern: /^hover:bg-(.+)$/,
    },
    {
      pattern: /^hover:text-(.+)$/,
    },
  ],
  theme: {
    boxShadow: {
      "3xl": "0 0 100px 40px rgba(247, 7, 143, 1)",
      xl: "0 0 100px 32px rgba(247, 7, 143, 1)",
      lg: "0 0 30px 10px rgba(247, 7, 143, 0.5)",
      md: "0 0 20px 2px rgba(247, 7, 143, 0.5)",
    },
    colors: {
      "primary-1": "#f7078f",
      "primary-2": "#981961",
      "primary-3": "#ff026f",
      "dark-1": "#000717",
      "dark-2": "#1d212c",
      "dark-3": "#353842",
      white: "rgb(255 255 255)",
      "slate-300": "rgb(203 213 225)",
      "slate-400": "rgb(148 163 184)",
      "violet-500": "rgb(139 92 246)",
      red: "rgb(220 38 38)",
      "blue-500": "rgb(59 130 246)",
    },
    fontFamily: {
      system: ["system-ui"],
    },
    extend: {
      spacing: {
        200: "200px",
        250: "250px",
        300: "300px",
        400: "400px",
        500: "500px",
        700: "700px",
        800: "800px",
        900: "900px",
        1100: "1100px",
      },
      ringWidth: {
        15: "15px",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out",
        slideUp: "slideUp 0.8s ease-out",
        float: "float 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
