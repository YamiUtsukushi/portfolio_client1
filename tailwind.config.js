/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Vert Sapin — couleur principale (boutons, titres, header cartes)
        sapin: {
          50:  '#f0f7f0',
          100: '#d9edd9',
          200: '#b3dbb4',
          300: '#7ec17f',
          400: '#4da04f',
          500: '#2d7d2e',
          600: '#1e6320',
          700: '#174d18',
          800: '#113c12',
          900: '#0c2e0d',
          DEFAULT: '#1a4d2e', // Vert Sapin principal
        },
        // Vert Sauge / Menthe — accents, bordures, cercles graphiques
        sauge: {
          50:  '#f2f7f4',
          100: '#dceee3',
          200: '#b9ddc8',
          300: '#8ec5a7',
          400: '#5fa882',
          500: '#3d8c62',
          600: '#2d7050',
          700: '#235840',
          800: '#1b4332',
          900: '#143326',
          DEFAULT: '#6b9e7e', // Vert Sauge principal
        },
        // Crème / Fond — background doux
        cream: {
          50:  '#fdfcf8',
          100: '#faf8f2',
          200: '#f5f1e8',
          300: '#ede7d5',
          400: '#e0d8bf',
          DEFAULT: '#f7f5ee', // Fond crème principal
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        cursive: ['"Dancing Script"', 'cursive'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'card': '0 4px 24px 0 rgba(26, 77, 46, 0.07)',
        'card-hover': '0 8px 32px 0 rgba(26, 77, 46, 0.13)',
      },
    },
  },
  plugins: [],
}
