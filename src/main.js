import { createApp } from 'vue'
import './style.css'
import Inicio from './Inicio.vue'
import Contactenos from './Contactenos.vue'
import Alquiler from './Alquiler.vue'
import Mantenimiento from './Mantenimiento.vue' 
import Venta from './Venta.vue'
import Ingresar from './Ingresar.vue'
import Registrarse from './Registrarse.vue'


createApp(Inicio).mount('#inicio')
createApp(Contactenos).mount('#contactenos')
createApp(Alquiler).mount('#alquiler')
createApp(Mantenimiento).mount('#mantenimiento')
createApp(Venta).mount("#venta")
createApp(Ingresar).mount("#ingresar")
createApp(Registrarse).mount("#registrarse")