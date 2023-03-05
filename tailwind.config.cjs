/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'timberwolf': '#E6E1DB',
        'payne': '#536373',
        'slate-grey': '#7F8894',
        'cadet': '#ced5de',
        'linen': '#FAEFE4',
        'rose': '#846a6a',
        'eerie': '#1c221e'
      }
    },
  },
  plugins: [],
}
