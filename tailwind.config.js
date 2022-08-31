/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
      'back-image': "url('/assets/back.jpg')",
      'seen' : "url('/assets/seen.jpeg')",
      'seen11' : "url('/assets/seen11.jpeg')",
      'seen12' : "url('/assets/seen12.jpeg')",
      'seen13' : "url('/assets/seen13.jpeg')",

      'seen14' : "url('/assets/seen14.jpg')",

      'seen15' : "url('/assets/seen15.jpg')",
      'seen16' : "url('/assets/seen16.jpg')",
      'seen17' : "url('/assets/seen17.jpg')",
      'seen18' : "url('/assets/seen18.jpg')",


      }
    },
  },
  plugins: [],
}
