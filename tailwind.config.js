/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        zx: {
          1: '#eff6ff', // 浅色文字
          2: '#aed2ff',
          3: '#32e4fe',
          4: '#45a2ff',
          5: '#3d6dbc',
          6: '#1d4ed8',
          7: '#172554',
          8: '#051c45',
          9: '#000c29' // 超级深色但不黑
        }
      }
    }
  },
  plugins: []
}
