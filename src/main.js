import { createApp } from 'vue'
import './style.css'

  createApp({ //puedes crear n instancias, para cada div seria lo recomendado
    data() {
      return {
        contador: 0
      }
    },
    methods: {
      aumentarContador() {
        this.contador++
      }
    }
  }).mount('#app')