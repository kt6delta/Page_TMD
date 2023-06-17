<script >
import MenuLateral from './components/MenuLateral_Cel.vue';
export default {
    components: {
        MenuLateral
    },
    data() {
        return {
            mostrarMenu: false,
            mostrarContenido: true,
            padre: 'Ingresar'
        };
    },
    methods: {
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
        <MenuLateral :menuProp="mostrarMenu" :contenidoProp="mostrarContenido" :PadreProp="padre" @actualizar-menu="actualizarMenu"
            @actualizar-contenido="actualizarContenido" />
        <div v-if="!mostrarMenu" class="w-full h-screen dark:bg-gray bg-white">
            <header class="h-1/7 flex flex-col">
                <nav class="bg-black-0 w-full h-full">
                    <ul class="flex justify-center items-center h-full">
                        <li class="mr-4">
                            <button @click="mostrarMenu = !mostrarMenu">
                                <figure>
                                    <img src="./components/img/menu_lineas_blancas_cel.png" alt="menu" title="menu"
                                        class="w-10 h-1/8">
                                </figure>
                            </button>

                        </li>
                        <li>
                            <router-link to="/" tag="button">
                                <figure>
                                    <img src="./components/icons/ico_tmd_white_n.svg" alt="Montacarga" title="logo"
                                        class="w-64 h-1/8">
                                </figure>
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </header>

            <main class="bg-white w-full h-5/6 relative my-2 dark:bg-gray">
                <div class="w-full h-full flex items-center justify-center flex-col">
                    <h2 class="text-gray text-3xl font-serif font-bold text-center dark:text-gray-light">
                        Ingresar
                    </h2>
                    <form class="bg-white shadow-md rounded px-3 pt-3 pb-4 mb-4 dark:bg-gray ">
                        <div class="mb-4">
                            <label class="block text-gray font-serif italic text-xl font-bold mb-2 dark:text-gray-light"
                                for="username">
                                Usuario
                            </label>
                            <input
                                class="shadow appearance-none border dark:border-b-blue-3 rounded w-full py-2 px-3 text-base text-gray font-serif italic leading-tight focus:outline-none focus:shadow-outline dark:bg-blue-1 dark:placeholder:text-white dark:text-gray-light"
                                id="username" type="text" placeholder="Ingrese su usuario">
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray font-serif italic text-xl font-bold mb-2 dark:text-gray-light"
                                for="password">
                                Contraseña
                            </label>
                            <input
                                class="shadow appearance-none border border-yellow-2 rounded w-full py-2 px-3 text-gray font-serif italic text-base mb-3 leading-tight focus:outline-none focus:shadow-outline dark:bg-blue-1 dark:placeholder:text-white dark:text-gray-light"
                                id="password" type="password" placeholder="Ingrese su contraseña">
                            <a class="text-yellow-2 text-sm italic" href="#">
                                ¿Olvidó su contraseña?
                            </a>
                        </div>
                        <div class="flex items-center justify-center">
                            <button
                                class="bg-yellow-2 hover:bg-blue-3 dark:text-black-0 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button">
                                Continue con el correo
                            </button>
                        </div>
                    </form>

                    <div class="flex items-center w-full mb-2">
                        <div class="border-t border-black-0 dark:border-white  w-1/2 h-1 ml-4">&nbsp;</div>
                        <div class="px-2 pb-1 text-black-0 dark:text-white">O</div>
                        <div class="border-t border-black-0 dark:border-white w-1/2 h-1 mr-4">&nbsp;</div>
                    </div>

                    <div class="flex flex-col items-center justify-center">
                        <button
                            class="inline-flex bg-white dark:bg-yellow-2 py-1 px-3  mb-3 rounded focus:outline-none focus:shadow-outline shadow appearance-none border border-yellow-2 dark:border-white w-full leading-tight focus:shadow-outline"
                            type="button">
                            <img class="w-5 h-5" src="./components/img/google_icon_cel.png" alt="face">
                            <p class="text-black-0 font-bold font-serif italic text-xl ml-2">Continue con Google</p>
                        </button>
                        <button
                            class="inline-flex bg-white dark:bg-yellow-2 py-1 px-3  mb-3 rounded focus:outline-none focus:shadow-outline shadow appearance-none border border-yellow-2 dark:border-white w-full leading-tight focus:shadow-outline"
                            type="button">
                            <img class="w-4 h-6" src="./components/img/facebook_icon_cel.png" alt="face">
                            <p class="text-black-0 font-bold font-serif italic text-xl ml-2">Continue con Facebook</p>
                        </button>
                        <button
                            class="inline-flex bg-white dark:bg-yellow-2 py-1 px-3  mb-3 rounded focus:outline-none focus:shadow-outline shadow appearance-none border border-yellow-2 dark:border-white w-full leading-tight focus:shadow-outline"
                            type="button">
                            <img class="w-5 h-5" src="./components/img/apple_icon_cel.png" alt="face">
                            <p class="text-black-0 font-bold font-serif italic text-xl ml-2">Continua con Apple</p>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<style scoped></style>
