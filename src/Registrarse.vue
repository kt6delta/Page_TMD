<script >
export default {
    data() {
        return {
            mostrarMenu: false,
            mostrarContenido: true
        };
    },
};
</script>

<template>
    <router-view v-if="!mostrarContenido"></router-view>

    <div v-if="mostrarContenido">
        <div v-if="mostrarMenu" class="bg-yellow-2 w-full h-screen flex flex-col">
            <button @click="mostrarMenu = !mostrarMenu" class="ml-8 mt-10 w-8 h-8">
                <figure>
                    <img src="./img/x_icon.png" alt="X" title="salir">
                </figure>
            </button>

            <figure class="mx-auto w-80 h-28">
                <img src="./img/ico_tmd_white.svg" alt="Montacarga" title="logo" class=" w-80 h-28">
            </figure>
            <ul class="items-center text-center">
                <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray">
                    <router-link to="/" @click="mostrarContenido = !mostrarContenido">Inicio</router-link>
                </li>
                <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray">
                    <router-link to="/Ingresar" @click="mostrarContenido = !mostrarContenido">Ingresar</router-link>
                </li>
                <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray">
                    <router-link to="/Registrarse" @click="mostrarMenu = !mostrarMenu">Registrarse</router-link>
                </li>
                <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray">
                    <router-link to="/Contacto" @click="mostrarContenido = !mostrarContenido">Contacto</router-link>
                </li>

                <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray">
                    <router-link to="/Alquiler" @click="mostrarContenido = !mostrarContenido">Alquiler</router-link>
                </li>
                <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray">
                    <router-link to="/Mantenimiento"
                        @click="mostrarContenido = !mostrarContenido">Mantenimiento</router-link>
                </li>
                <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray">
                    <router-link to="/Venta" @click="mostrarContenido = !mostrarContenido">Venta</router-link>
                </li>
            </ul>
        </div>

        <div v-if="!mostrarMenu" class="w-full h-screen dark:bg-gray bg-white"> 
            <header class="h-1/7 flex flex-col">
                <nav class="bg-black-0 w-full h-full">
                    <ul class="flex justify-center items-center h-full">
                        <li class="mr-4">
                            <button @click="mostrarMenu = !mostrarMenu">
                                <figure>
                                    <img src="./img/menu_lineas_blancas.png" alt="menu" title="menu" class="w-10 h-1/8">
                                </figure>
                            </button>

                        </li>
                        <li>
                            <router-link to="/" tag="button">
                                <figure>
                                    <img src="./img/ico_tmd_white_n.svg" alt="Montacarga" title="logo"
                                        class="w-64 h-1/8">
                                </figure>
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </header>

            <main class="bg-white dark:bg-gray w-full h-5/6 relative my-2">
                <div class="w-full h-full flex items-center justify-center flex-col">
                    <h2 class="text-gray dark:text-white text-3xl font-serif font-bold text-center">
                        Registrarse
                    </h2>
                    <form class="bg-white dark:bg-gray shadow-md rounded px-3 pt-3 pb-4 mb-4 w-5/6">
                        <div class="mb-4">
                            <label class="block text-gray dark:text-gray-light font-serif italic text-xl font-bold mb-2" for="username">
                                Correo
                            </label>
                            <div class="relative">
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-base text-gray font-serif italic leading-tight focus:outline-none focus:shadow-outline dark:placeholder:text-white dark:text-gray-light dark:bg-blue-1" 
                                    id="username" type="text" placeholder="Ingrese su usuario">
                                <img class="w-8 h-8 absolute top-0 right-0 mr-2 mt-1" src="./img/persona_icono.webp"
                                    alt="">
                            </div>
                        </div>
                        <div class="flex items-center justify-center">
                            <button
                                class="bg-yellow-2 dark:text-black-0 hover:bg-blue-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button">
                                Continue con el correo
                            </button>
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
                            <img class="w-5 h-5" src="./img/google_icon.png" alt="google">
                            <p class="text-black-0 font-bold font-serif italic text-xl ml-2">Continue con Google</p>
                        </button>
                        <button
                            class="inline-flex bg-white dark:bg-yellow-2 py-1 px-3  mb-3 rounded focus:outline-none focus:shadow-outline shadow appearance-none border border-yellow-2 dark:border-white w-full leading-tight focus:shadow-outline"
                            type="button">
                            <img class="w-5 h-5" src="./img/facebook_icon.png" alt="facebook">
                            <p class="text-black-0 font-bold font-serif italic text-xl ml-2">Continue con Facebook</p>
                        </button>
                        <button
                            class="inline-flex bg-white dark:bg-yellow-2 py-1 px-3  mb-3 rounded focus:outline-none focus:shadow-outline shadow appearance-none border border-yellow-2 dark:border-white w-full leading-tight focus:shadow-outline"
                            type="button">
                            <img class="w-5 h-5" src="./img/apple_icon.png" alt="apple">
                            <p class="text-black-0 font-bold font-serif italic text-xl ml-2">Continua con Apple</p>
                        </button>
                    </div>
                </div>
            </main>
    </div>
</div>
</template>

<style scoped></style>