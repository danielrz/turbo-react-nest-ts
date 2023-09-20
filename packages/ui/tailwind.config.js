/** @type {import('tailwindcss').Config} */
// import * as sharedConfig from 'tailwindconfig'
const sharedConfig = require("tailwindconfig");
console.log('!!!sharedConfig', sharedConfig)

export default {
  content: [
    // ...sharedConfig,
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}