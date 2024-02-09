import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import './assets/style.css'
import 'aos/dist/aos.css';
import AOS from 'aos';
import App from './App.vue'
import routes from './assets/routes'
import page from './assets/modules/Page'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
const app = createApp(App)
app.use(router)
app.use(page)
app.mount('#app')

AOS.init({
  duration: 1200,
});