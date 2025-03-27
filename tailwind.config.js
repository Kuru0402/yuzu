/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure Tailwind scans your files
    theme: {
      extend: {
        backgroundImage: {
          'yuzu': "url('/src/assets/Images/homeBg.webp')", // If bg.jpg is inside public/
        },
      },
    },
    plugins: [],
  };
  