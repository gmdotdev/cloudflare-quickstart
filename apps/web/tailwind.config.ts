import type { Config } from 'tailwindcss';

module.exports = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  plugins: [],
  theme: {},
} satisfies Config;
