/** @type {import('tailwindcss').Config} */

export default {
  content: [ //Agregue las rutas
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-0": '#262626',
        "white" : "#FCFCFC",
        "gray" : "#595959",
        "gray-light" : "#EBEBEB",
        "yellow" : "#F4CC66",
        "yellow-2" : "#F9BA4E",
        "brown" : "#E0BF7E",
        "blue-1" : "#89939C",
        "blue-2" : "#828D96",
        "blue-3" : "#7C90A0",
      },
      fontFamily: {
        dancing: ['Dancing Script', 'cursive']
      }
    }
  },
  plugins: [require('@tailwindcss/forms')],
}

