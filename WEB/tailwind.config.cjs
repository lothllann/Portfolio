/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      colors:{
        background: '#1C1C1C',
        GitHub: '#BABBBD',
        Linkedin: '#0A66C2',
        Instagram: '#E4405F',
        Gmail: '#D14836',
        WhatsApp: '#25D366'
      }
    },
  },
  plugins: [],
}
