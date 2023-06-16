<script >
export default {
    data() {
        return {
            mostrarMenu: false,
            mostrarContenido: true,
            windowWidth: window.innerWidth
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
    },
};
</script>

<template>
    <div>
        <!-- 350x640-->
        <div v-if="windowWidth < 1024">
            <router-view v-if="!mostrarContenido"></router-view>

            <div v-if="mostrarContenido">
                <div v-if="mostrarMenu" class="bg-yellow-2 w-full h-screen flex flex-col">
                    <button @click="mostrarMenu = !mostrarMenu" class="ml-8 mt-10 w-8 h-8">
                        <figure>
                            <img src="./components/img/x_icon_cel.png" alt="X" title="salir">
                        </figure>
                    </button>

                    <figure class="mx-auto w-80 h-28">
                        <img src="./components/icons/Logo_white.svg" alt="Montacarga" title="logo" class=" w-80 h-28">
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

                    <main class="bg-white dark:bg-gray w-full h-5/6 relative my-2">
                        <div class="w-full h-full flex items-center justify-center flex-col">
                            <h2 class="text-gray dark:text-white text-3xl font-serif font-bold text-center">
                                Registrarse
                            </h2>
                            <form class="bg-white dark:bg-gray shadow-md rounded px-3 pt-3 pb-4 mb-4 w-5/6">
                                <div class="mb-4">
                                    <label
                                        class="block text-gray dark:text-gray-light font-serif italic text-xl font-bold mb-2"
                                        for="username">
                                        Correo
                                    </label>
                                    <div class="relative">
                                        <input
                                            class="shadow appearance-none border rounded w-full py-2 px-3 text-base text-gray font-serif italic leading-tight focus:outline-none focus:shadow-outline dark:placeholder:text-white dark:text-gray-light dark:bg-blue-1"
                                            id="username" type="text" placeholder="Ingrese su usuario">
                                        <img class="w-8 h-8 absolute top-0 right-0 mr-2 mt-1" src="./components/img/persona_icono_cel.webp"
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
        </div>
        <!--700-->
        <div v-else>
            <main class="w-full h-screen">

                <nav class="w-full h-20 shadow-lg bg-primary  fixed z-30">
                    <div class="container mx-auto w-full h-20 flex flex-row justify-center">
                        <div class="w-1/3">
                            <img src="../src/components/icons/Logo_nonary.svg" class="w-56 py-2 ml-4">
                        </div>

                        <div
                            class="w-1/3 font-Fuente_primaria text-center text-septenary text-2xl flex flex-row justify-center space-x-7 py-5 ">

                            <router-link @click="bandera = false" to="/">Inicio</router-link>
                            <a href="">Alquiler</a>
                            <router-link @click="bandera = false" to="/Mantenimiento">Mantenimiento</router-link>

                        </div>

                        <div
                            class="w-1/3 flex flex-row justify-end font-Fuente_primaria text-center text-septenary text-2xl space-x-7 p-5">
                            <a href="">
                                <img src="../src/components/icons/carrito.svg" class="w-10">
                            </a>
                            <a href="">Ingresar</a>
                            <a class="text-nonary">Registrarse</a>
                        </div>

                    </div>



                </nav>

                <!--formulario-->

                <section class=" w-full h-5/6 bg-nonary flex justify-center align-middle">
                    <div class="w-2/4 bg-primary mt-32 mb-14 rounded-md shadow-xl">

                        <div class="w-full h-full px-20 py-24 flex flex-col space-y-5">
                            <div>
                                <h1 class="p-5 text-center text-nonary font-Fuente_secundaria text-5xl">Registro</h1>
                            </div>

                            <div class="">
                                <label for="Correo"
                                    class="block text-nonary font-Fuente_terciaria text-xl text-start">Ingrese el correo
                                    electronico</label>
                                <input type="text"
                                    class="w-full bg-white mt-2 h-10 appearance-none rounded shadow-lg focus:outline-none focus:bg-white"
                                    placeholder="Correo electronico">
                            </div>

                            <div class="mb-5">
                                <label for="Contraseña"
                                    class="block text-nonary font-Fuente_terciaria text-xl text-start">Ingrese una
                                    contraseña</label>
                                <input type="password"
                                    class="w-full bg-white mt-2 h-10 appearance-none rounded shadow-lg focus:outline-none focus:bg-white"
                                    placeholder="Contraseña">
                            </div>

                            <div class="mb-5">
                                <label for="Contraseña"
                                    class="block text-nonary font-Fuente_terciaria text-xl text-start">Confirmar
                                    contraseña</label>
                                <input type="password"
                                    class="w-full bg-white mt-2 h-10 appearance-none rounded shadow-lg focus:outline-none focus:bg-white"
                                    placeholder="confirmar Contraseña">
                            </div>

                            <div class="w-full flex items-center justify-center">
                                <button
                                    class="w-28 h-14 bg-septenary font-Fuente_primaria text-lg text-primary rounded-md shadow-md active:bg-senary">
                                    Enviar!
                                </button>
                            </div>

                        </div>

                    </div>



                </section>

                <!-- fqa y enlaces extra -->


                <footer class="h-52 px-32 bg-septenary">

                    <div class="container mx-auto flex flex-row justify-center items-center">
                        <div class="lg:order-2 lg:w-1/3">
                            <div class="flex flex-col items-center p-2">
                                <img src="../src/components/icons/Logo_primary.svg" class="w-72">
                                <div class="bg-primary w-80 h-1"></div>
                            </div>
                            <div class="flex flex-row justify-center p-2 space-x-4">
                                <a href="https://wa.me/573168770708">
                                    <img src="../src/components/icons/whatsapp.svg" class="w-10">
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=100089647335119">
                                    <img src="../src/components/icons/facebook.svg" class="w-10">
                                </a>
                                <a href="mailto:gestion@tecnimontacargasdual.com">
                                    <img src="../src/components/icons/mail.svg" class="w-11">
                                </a>

                            </div>
                        </div>

                        <div class="w-1/3 text-left text-xl font-Fuente_primaria text-primary">
                            <ul class="">
                                <li>hola</li>
                                <li>hola</li>
                                <li>hola</li>
                            </ul>
                        </div>



                        <div class="order-3 w-1/3 text-right text-xl font-Fuente_primaria text-primary">
                            <ul>
                                <li>hola</li>
                                <li>hola</li>
                                <li>hola</li>
                            </ul>
                        </div>

                    </div>

                </footer>
            </main>
            <router-view v-if="!bandera">
            </router-view>
        </div>
    </div>
</template>

<style scoped></style>