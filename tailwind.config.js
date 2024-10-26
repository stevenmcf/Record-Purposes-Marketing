/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,md,liquid,erb,serb,rb}',
    './frontend/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        light: '#EDECE5',
        dark: '#181617',
        primary: '#F6D200',
        secondary: '#2F9C95'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

