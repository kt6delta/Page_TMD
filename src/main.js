import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import './assets/style.css'

import App from './App.vue'
import Contacto from './Contacto.vue'
import Alquiler from './Alquiler.vue'
import Mantenimiento from './Mantenimiento.vue'
import Ingresar from './Ingresar.vue'
import Registrarse from './Registrarse.vue'
import Registro_Correo from './Registro_Correo.vue'


const routes = [
    { path: '/', name: 'Inicio', component: App },
    { path: '/Contacto', name: "Contacto", component: Contacto},
    { path: '/Alquiler', name: "Alquiler", component: Alquiler },
    { path: '/Mantenimiento', name: "Mantenimiento", component: Mantenimiento },
    { path: '/Ingresar', name: "Ingresar", component: Ingresar },
    { path: '/Registrarse', name: "Registrarse", component: Registrarse },
    { path: '/Registro_Correo', name: "Registro_Correo", component: Registro_Correo}
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })

  export default router
createApp(App).use(router).mount('#app')
