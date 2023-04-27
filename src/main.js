import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Contactenos from './Contactenos.vue'
import Alquiler from './Alquiler.vue'
import Mantenimiento from './Mantenimiento.vue' 


createApp(App).mount('#app')
createApp(Contactenos).mount('#contactenos')
createApp(Alquiler).mount('#alquiler')
createApp(Mantenimiento).mount('#mantenimiento')