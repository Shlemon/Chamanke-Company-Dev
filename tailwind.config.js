/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'chamanke-red': 'var(--chamanke-red)',
        'chamanke-blue': 'var(--chamanke-blue)',
        'chamanke-light-blue':'var(--chamanke-light-blue)',
        'chamanke-green':'var(--chamanke-green)',
      },
    },
  },
  plugins: [],
};