/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores extraídas da Logo Nexo Saúde
        nexo: {
          dark: '#162A45',  // Azul marinho profundo (Texto "Nexo")
          main: '#0D9488',  // Verde-água principal (Texto "Saúde" e Botões)
          light: '#CCFBF1', // Verde bem clarinho para fundos
          accent: '#2DD4BF' // Um tom mais vibrante para hovers/detalhes
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Uma fonte limpa combina com essa logo
      }
    },
  },
  plugins: [],
}