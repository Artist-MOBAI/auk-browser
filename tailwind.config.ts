import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mobai: {
          orange: "#FF7356",
        },
      },
      fontFamily: {
        vivo: ["var(--font-vivo-sans)"],
        rosarivo: ["var(--font-rosarivo)"],
        tinos: ["var(--font-tinos)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
