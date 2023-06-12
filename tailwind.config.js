/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'principal': "url('../src/components/img/principal.jpg')",
        'maquina_E': "url('../src/components/icons/maquina-elevadora.svg')",
        'constructor': "url('../src/components/img/constructor.jpg')",
        'montacarga':"url('../src/components/img/montacargas.jpeg')",
        'mantenimiento':"url('../src/components/img/mantenimiento.jpeg')",
        'montacarga_2':"url('../src/components/img/montacargas_2.jpg')",
        'jungher':"url('../src/components/img/jungher.jpg')",
        'portaestiba':"url('../src/components/img/portaestibas.jpg')",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#262626',
        'secondary': '#595959',
        'tertiary': '#7A8690',
        'quaternary': '#828D96',
        'quinary': '#89939C',
        'senary': '#E0BF7E',
        'septenary': '#F9BA4E',
        'octonary': '#F4CC66',
        'nonary': '#EBEBEB',
      }),
      textColor:{
        'primary': '#262626',
        'secondary': '#595959',
        'tertiary': '#7A8690',
        'quaternary': '#828D96',
        'quinary': '#89939C',
        'senary': '#E0BF7E',
        'septenary': '#F9BA4E',
        'octonary': '#F4CC66',
        'nonary': '#EBEBEB',
      },
      fontFamily:{
        'Fuente_primaria':['Hind Vadodara', 'sans-serif'],
        'Fuente_secundaria':['Dancing Script', 'cursive'],
        'Fuente_terciaria':['Maitree', 'serif'],
      },
    },
  },
  plugins: [],
}

