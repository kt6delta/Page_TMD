<script>
import MenuLateral from './components/MenuLateral_Cel.vue';
import MenuBarra_Cel from './components/MenuBarra_Cel.vue';
import MenuBarra_PC from './components/MenuBarra_PC.vue';
import Footer_PC from './components/Footer_PC.vue';
export default {

    components: {
    MenuLateral,
    MenuBarra_Cel,
    MenuBarra_PC,
    Footer_PC
},
    data() {
        return {
            mostrarMenu: false,
            mostrarContenido: true,
            windowWidth: window.innerWidth,
            padre: 'Registrarse'
        };
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
        },
        actualizarMenu(nuevoValor) {
            this.mostrarMenu = nuevoValor;
        },
        actualizarContenido(nuevoValor) {
            this.mostrarContenido = nuevoValor;
        }
    },
};
</script>

<template>
    <router-view v-if="!mostrarContenido"></router-view>

    <div v-if="mostrarContenido">
        <MenuLateral v-if="windowWidth < 1024" :menuProp="mostrarMenu" :contenidoProp="mostrarContenido" :PadreProp="padre"
            @actualizar-menu="actualizarMenu" @actualizar-contenido="actualizarContenido" />
        <div v-show="!mostrarMenu" class="w-full h-screen dark:bg-gray bg-white">
            <MenuBarra_Cel v-if="windowWidth < 1024" :menuProp="mostrarMenu" @actualizar-menu="actualizarMenu" />
            <MenuBarra_PC v-else/>

            <main class="bg-white dark:bg-gray w-full h-5/6 relative my-2">
                <div class="w-full h-full flex items-center justify-center flex-col">
                    <h2 class="text-gray dark:text-white text-3xl font-serif font-bold text-center">
                        Registro
                    </h2>
                    <form class="bg-white dark:bg-gray shadow-md rounded px-3 pt-3 pb-4 mb-4 w-5/6">
                        <div class="mb-4">
                            <label class="block text-gray dark:text-gray-light font-serif italic text-xl font-bold mb-2"
                                for="username">
                                Correo
                            </label>
                            <div class="relative">
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-base text-gray font-serif italic leading-tight focus:outline-none focus:shadow-outline dark:placeholder:text-white dark:text-gray-light dark:bg-blue-1"
                                    id="username" type="text" placeholder="Ingrese su usuario">
                                <img class="w-8 h-8 absolute top-0 right-0 mr-2 mt-1"
                                    src="./components/img/persona_icono_cel.webp" alt="">
                            </div>
                        </div>
                        <div class="flex items-center justify-center">
                            <router-link to="/Registro_Correo" tag="button"
                                    class="bg-yellow-2 dark:text-black-0 hover:bg-blue-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Continue con el correo
                            </router-link>
                        </div>
                    </form>

                    <div class="flex items-center w-full mb-2">
                        <div class="border-t border-black-0 dark:border-white  w-1/2 h-1 ml-4">&nbsp;</div>
                        <div class="px-2 pb-1 text-black-0 dark:text-white">O</div>
                        <div class="border-t border-black-0 dark:border-white  w-1/2 h-1 mr-4">&nbsp;</div>
                    </div>

                    <div class="flex flex-col items-center justify-center">
                        <button
                            class="inline-flex bg-white dark:bg-yellow-2  py-1 px-3  mb-3 rounded focus:outline-none focus:shadow-outline shadow appearance-none border border-yellow-2 dark:border-white  w-full leading-tight focus:shadow-outline"
                            type="button">
                            <img class="w-5 h-5" src="./components/img/google_icon_cel.png" alt="google">
                            <p class="text-black-0 font-bold font-serif italic text-xl ml-2">Continue con Google</p>
                        </button>
                        <button
                            class="inline-flex bg-white dark:bg-yellow-2 py-1 px-3  mb-3 rounded focus:outline-none focus:shadow-outline shadow appearance-none border border-yellow-2 dark:border-white w-full leading-tight focus:shadow-outline"
                            type="button">
                            <img class="w-5 h-5" src="./components/img/facebook_icon_cel.png" alt="facebook">
                            <p class="text-black-0 font-bold font-serif italic text-xl ml-2">Continue con Facebook
                            </p>
                        </button>
                        <button
                            class="inline-flex bg-white dark:bg-yellow-2 py-1 px-3  mb-3 rounded focus:outline-none focus:shadow-outline shadow appearance-none border border-yellow-2 dark:border-white w-full leading-tight focus:shadow-outline"
                            type="button">
                            <img class="w-5 h-5" src="./components/img/apple_icon_cel.png" alt="apple">
                            <p class="text-black-0 font-bold font-serif italic text-xl ml-2">Continua con Apple</p>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    </div>



</template>

<style scoped></style>