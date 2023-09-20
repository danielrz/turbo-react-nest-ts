/** @type {import('tailwindcss').Config} */
const sharedConfig = require("tailwindconfig");
export default  {
  ...sharedConfig,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui1/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

