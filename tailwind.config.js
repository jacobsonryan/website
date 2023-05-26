/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'text': '0 0 10px rgba(255, 255, 255, 1)', // Customize the shadow color and other properties as needed
      },
    },
    screens: {
      'xsm': '420',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
    plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          'text-shadow': '0 0 10px rgba(255, 255, 255, 1)', // Customize the shadow color and other properties as needed
        },
      }, ['responsive', 'hover', 'focus']);
    },
  ],
}
