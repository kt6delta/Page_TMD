const Inicio = () => import('../Inicio.vue')
const Contacto = () => import('../Contacto.vue')
const Alquiler = () => import('../Alquiler.vue')
const Mantenimiento = () => import('../Mantenimiento.vue')
const Ingresar = () => import('../Ingresar.vue')
const Registrarse = () => import('../Registrarse.vue')
const Registro_Correo = () => import('../Registro_Correo.vue')
const Confirmacion = () => import('../Confirmacion.vue')
const Recupera_Contraseña = () => import('../Recupera_Contraseña.vue')
const Recuperar = () => import('../Recuperar.vue')
export default [
    { path: '/', name: 'Inicio', component: Inicio },
    { path: '/Contacto', name: "Contacto", component: Contacto },
    { path: '/Alquiler', name: "Alquiler", component: Alquiler },
    { path: '/Mantenimiento', name: "Mantenimiento", component: Mantenimiento },
    { path: '/Ingresar', name: "Ingresar", component: Ingresar },
    { path: '/Registrarse', name: "Registrarse", component: Registrarse },
    { path: '/Registro_Correo/:user', name: "Registro_Correo", component: Registro_Correo },
    { path: '/Confirmacion/:mail', name: "Confirmacion", component: Confirmacion },
    { path: '/Recupera_Contraseña', name: "Recupera_Contraseña", component: Recupera_Contraseña },
    { path: '/recuperar', name: "Recuperar", component:Recuperar }
]