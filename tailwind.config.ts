import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{cjs,cts,mjs,mts,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;