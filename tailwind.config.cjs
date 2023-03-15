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
        WhatsApp: '#25D366',
        ligth_green: '#29fd53',
        blackGlass: 'rgba(0, 0, 0, 0.2)',
        greyGlass1:'rgba(255, 255, 255, 0.05)',
        greyGlass2: 'rgba(255, 255, 255, 0.07)',
        greyGlass3: 'rgba(255, 255, 255, 0.1)'
      },
      keyframes:{
        showUp:{
          '0%': {transform: 'scale(0)'},
          '50%': {transform: 'scale(1.1)'},
          '100%': {transform: 'scale(1)'}
        },
        slideRight:{
          'to':{opacity: 1, transform: 'translateX(0)'},
        },
        slideUpAndFade: {
          '0%': { opacity: 0, transform: 'translateY(2px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation:{
        'showUp': 'showUp 500ms forwards',
        'slideRight': 'slideRight 900ms forwards',
        'slideUpAndFade': 'slideUpAndFade 500ms cubic-bezier(0.16, 0, 0.13, 1)'
      }
    },
  },
  plugins: [],
}
