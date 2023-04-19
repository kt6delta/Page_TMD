import { createApp } from 'vue'
import './style.css'

  createApp({ //puedes crear n instancias, para cada div seria lo recomendado
    data() { //variables
      return {
        message: 'Hello Vue.js3!', //enviar dato al html
        count: 0,
        counter: {
          conta: 1 //enviar dato al html
        }, 
        VRojo: 'rojo'
      }
    },  
    methods: { //metodos
      Agregar() {
        this.count++ 
      }
    }
  }).mount('#footer')