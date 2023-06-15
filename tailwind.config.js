/** @type {import('tailwindcss').Config} */

export default {
  content: [
    //Agregue las rutas
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        principal: "url('../src/components/img/principal.jpg')",
        maquina_E: "url('../src/components/icons/maquina-elevadora.svg')",
        constructor: "url('../src/components/img/constructor.jpg')",
        montacarga: "url('../src/components/img/montacarga_1.jpeg')",
        mantenimiento: "url('../src/components/img/montacarga_3.jpeg')",
        montacarga_2: "url('../src/components/img/montacarga_2.jpg')",
        jungher: "url('../src/components/img/jungher.jpg')",
        portaestiba: "url('../src/components/img/portaestiba_1.jpg')",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#262626",
        secondary: "#595959",
        tertiary: "#7A8690",
        quaternary: "#828D96",
        quinary: "#89939C",
        senary: "#E0BF7E",
        septenary: "#F9BA4E",
        octonary: "#F4CC66",
        nonary: "#EBEBEB",
      }),
      textColor: {
        primary: "#262626",
        secondary: "#595959",
        tertiary: "#7A8690",
        quaternary: "#828D96",
        quinary: "#89939C",
        senary: "#E0BF7E",
        septenary: "#F9BA4E",
        octonary: "#F4CC66",
        nonary: "#EBEBEB",
      },
      colors: {
        "black-0": "#262626",
        white: "#FCFCFC",
        gray: "#595959",
        "gray-light": "#EBEBEB",
        yellow: "#F4CC66",
        "yellow-2": "#F9BA4E",
        brown: "#E0BF7E",
        "blue-1": "#89939C",
        "blue-2": "#828D96",
        "blue-3": "#7C90A0",
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        Fuente_primaria: ["Hind Vadodara", "sans-serif"],
        Fuente_secundaria: ["Dancing Script", "cursive"],
        Fuente_terciaria: ["Maitree", "serif"],
      },
    },
  },
  //plugins: [require("@tailwindcss/forms")],
};
