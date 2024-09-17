/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cricket': "url('/src/utilities/images/—Pngtree—3d render of a cricket_11173054.jpg')",
      },
    },
  },
  plugins: [],
}