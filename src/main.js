import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import './style.css'

import App from './App.vue'
import Contactenos from './Contactenos.vue'
import Alquiler from './Alquiler.vue'
import Mantenimiento from './Mantenimiento.vue'
import Venta from './Venta.vue'
import Ingresar from './Ingresar.vue'
import Registrarse from './Registrarse.vue'


const routes = [
    { path: '/', name: 'Inicio', component: App },
    { path: '/Contactenos', name: "Contactenos", component: Contactenos},
    { path: '/Alquiler', name: "Alquiler", component: Alquiler },
    { path: '/Mantenimiento', name: "Mantenimiento", component: Mantenimiento },
    { path: '/Venta', name: "Venta", component: Venta },
    { path: '/Ingresar', name: "Ingresar", component: Ingresar },
    { path: '/Registrarse', name: "Registrarse", component: Registrarse }
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })

  export default router
createApp(App).use(router).mount('#app')
//createApp(Contactenos).mount('#contactenos')
//createApp(Alquiler).mount('#alquiler')
//createApp(Mantenimiento).mount('#mantenimiento')
//createApp(Venta).mount("#venta")
//createApp(Ingresar).mount("#ingresar")
//createApp(Registrarse).mount("#registrarse")

//<router-link to="/contacto" tag="button">Contacto</router-link>