/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    fontFamily: {
      body: ["IRANSansX", "sans-serif"],
      display: ["IRANSansX", "sans-serif"]
    },
    extend: {
      backgroundImage: {
        "hero-image": "url('./src/assets/images/apartment.webp')"
      },
      colors: {
        mohammad: "#fab222"
      }
    },
  },
  plugins: [],
}