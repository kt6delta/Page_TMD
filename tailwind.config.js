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
        principal: "url('./principal.jpg')",
        mantenimiento: "url('./mantenimineto.png')",
        ojoAbierto:"url('./ojo_abierto.png')",
        ojoCerrado:"url('./ojos_cerrado.png')",
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
        "black-1": "#2b2c32",
        gray: "#595959",
        "gray-light": "#EBEBEB",
        white: "#FCFCFC",
        yellow: "#F4CC66",
        "yellow-2": "#F9BA4E",
        brown: "#E0BF7E",
        blue: "#92a9c3",
        "blue-1": "#89939C",
        "blue-2": "#828D96",
        "blue-3": "#7C90A0",
        'gradient-start': 'rgba(252, 252, 252, 0.2)',
        'gradient-middle': 'rgba(122, 134, 144, 0.4)',
        'gradient-end': 'rgba(120, 151, 176, 0.5)',
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        Fuente_primaria: ["Hind Vadodara", "sans-serif"],
        Fuente_secundaria: ["Dancing Script", "cursive"],
        Fuente_terciaria: ["Maitree", "serif"],
      },
    },
  },
};
