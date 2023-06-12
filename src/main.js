import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/styles.css'

//rutas 
import Contacto from './Contacto.vue'
import Mantenimiento from './Mantenimiento.vue'

const routes = [
    { path: '/', name: 'Inicio', component: App },
    { path: '/Contacto', name: "Contacto", component: Contacto},
    { path: '/Mantenimiento', name: "Mantenimiento", component: Mantenimiento },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
  
  export default router
createApp(App).use(router).mount('#app')

