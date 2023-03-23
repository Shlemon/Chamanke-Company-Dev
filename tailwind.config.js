/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'chamanke-main-blue': '#0C4773',
        'chamanke-dark-blue': '#2e3c49',
        'chamanke-light-blue': '#0a88a3',
        'chamanke-red': '#e04639',
        'chamanke-midnight-green': '#164E63',
        'chamanke-dark-green': '#2C463F',
        'chamanke-slate-gray': '#74878e',
        'chamanke-off-white': '#fafbfa',
      },
    },
  },
  plugins: [],
};