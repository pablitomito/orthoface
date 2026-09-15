/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0072ce',
          hover: '#005fae',
          deep: '#03234b',
          navy: '#06172d',
          ice: '#f3f8fd',
          iceSubtle: '#eaf2fa',
          surface: '#ffffff',
          border: '#dbe7f3',
          muted: '#546b82',
          canvas: '#f8fafc',
          line: 'rgba(3, 35, 75, 0.08)'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Albert Sans"', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Source Sans 3"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
