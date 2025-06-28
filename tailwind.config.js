/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fefbf3',
          100: '#fdf7e7',
          200: '#fbeed0',
          300: '#f8e0a8',
          400: '#f4cc75',
          500: '#f0b341',
          600: '#e89a1f',
          700: '#c47a15',
          800: '#9c5f15',
          900: '#7e4d16',
        },
        navy: {
          50: '#f0f4f8',
          100: '#e1e9f2',
          200: '#c3d3e6',
          300: '#9bb8d4',
          400: '#6b95c0',
          500: '#4a7ba8',
          600: '#3b6389',
          700: '#32506f',
          800: '#2d435d',
          900: '#2a3a4f',
          950: '#0b3565',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

