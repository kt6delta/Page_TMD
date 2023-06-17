<script >
import MenuLateral from './components/MenuLateral_Cel.vue';
import Footer_Cel from './components/Footer_Cel.vue';
import MenuBarra_Cel from './components/MenuBarra_Cel.vue';
import Chat_Flotante from './components/Chat_Flotante.vue';
export default {
    components: {
        MenuLateral,
        Footer_Cel,
        MenuBarra_Cel,
        Chat_Flotante
    },
    data() {
        return {
            mostrarMenu: false,
            mostrarContenido: true,
            windowWidth: window.innerWidth,
            padre: 'Contacto',
            bandera: true
        };
    },
    mounted() {
        window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize)
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
    }
};
</script>

<template>
    <div>
        <!-- 350x640-->
        <div v-if="windowWidth < 640">
            <div v-if="mostrarContenido">
                <MenuLateral :menuProp="mostrarMenu" :contenidoProp="mostrarContenido" :PadreProp="padre" @actualizar-menu="actualizarMenu" />
                <div v-show="!mostrarMenu" class=" bg-yellow-2">
                    <MenuBarra_Cel :menuProp="mostrarMenu" @actualizar-menu="actualizarMenu"/> 

                    <main class="bg-white w-full h-3/4 relative dark:bg-gray">
                        <div class="flex items-center flex-col">
                            <figure class="w-full h-1/4">
                                <img src="./components/img/monntacarga_4.jpg" alt="Contacto" title="Contacto"
                                    class="mx-auto">
                            </figure>
                            <p
                                class="text-black-0 dark:text-gray-light text-2xl font-serif font-bold text-center mr-4 ml-4 mt-4">
                                Diligencie el formulario y pronto estaremos en contacto con usted
                            </p>
                            <form class="w-64 mt-6">
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray text-xl font-serif italic leading-tight focus:outline-none  focus:border-gray focus:ring-2 focus:ring-black bg-yellow mb-4"
                                    id="name" type="text" placeholder="Nombre">

                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray text-xl font-serif italic leading-tight focus:outline-none focus:border-gray focus:ring-2 focus:ring-black bg-yellow mb-4"
                                    id="name" type="text" placeholder="Correo">

                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray text-xl font-serif italic leading-tight focus:outline-none focus:border-gray focus:ring-2 focus:ring-black bg-yellow mb-4"
                                    id="name" type="text" placeholder="Telefono">

                                <div class="relative">
                                    <select
                                        class="block shadow appearance-none border rounded w-full py-2 px-3 text-gray text-xl font-serif italic leading-tight focus:outline-none focus:border-gray focus:ring-2 focus:ring-black bg-yellow mb-4 focus:bg-gray focus:text-white">
                                        <option>Tipo de servicio</option>
                                        <option>Alquiler</option>
                                        <option>Mantenimiento</option>
                                        <option>Venta</option>
                                    </select>
                                    <div class="absolute h-10 inset-y-0 right-0 flex items-center pointer-events-none">
                                        <div class="border-b-2 border-gray w-48 mt-6"></div>
                                        <svg class="h-10 w-10 text-gray ml-auto mr-4 mb-2" viewBox="0 0 100 100"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <polygon points="100,100 20,100 100,20" fill="currentColor" stroke="none" />
                                        </svg>
                                    </div>
                                </div>

                                <label for="message" class="block text-gray text-xl font-serif italic mb-2">Mensaje:</label>
                                <textarea id="message" name="message" rows="4"
                                    class="form-textarea shadow appearance-none border rounded w-full py-2 px-3 text-gray text-xl font-serif italic leading-tight focus:outline-none focus:border-gray focus:ring-2 focus:ring-black bg-yellow"></textarea>

                                <div class="flex items-center justify-between">
                                    <button
                                        class="bg-black hover:bg-gray text-white text-xl font-serif font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
                                        type="button">
                                        Enviar
                                    </button>

                                </div>
                            </form>
                        </div>
                        <div id="focusUser" class="text-center">
                            <figure class=" flex flex-col items-center">
                                <img src="./components/img/telefono_icon_cel.png" alt="telefono" title="3244298326"
                                    class="w-16 h-16">
                            </figure>
                            <p class="mb-4 text-black-0 dark:text-gray-light text-xl font-serif transform -skew-x-12">(+57)
                                601 5408640<br>(+57)
                                3244298326</p>
                            <a href="mailto:gestion@tecnimontacargasdual.com" target="_blank">
                                <figure class=" flex flex-col items-center">
                                    <img src="./components/img/correo_icon_cel.png" alt="correo"
                                        title="gestion@tecnimontacargasdual.com" class="w-16 h-16">
                                </figure>
                            </a>
                            <p class="mb-4 text-black-0 dark:text-gray-light text-xl font-serif transform -skew-x-12">
                                gestion@tecnimontacargasdual.com
                            </p>
                            <a href="https://wa.me/573168770708" target="_blank">
                                <figure class=" flex flex-col items-center">
                                    <img src="./components/img/whatsap_icon_cel.png" alt="whatsapp" title="(+57) 3168770708"
                                        class="w-16 h-16">
                                </figure>
                            </a>
                            <p class="mb-4 text-black-0 dark:text-gray-light text-xl font-serif transform -skew-x-12">(+57)
                                3168770708</p>
                            <a href="https://www.google.com/maps/place/Tecnimontacargas+Dual+Ltda/@4.68237,-74.14496,17z/data=!4m6!3m5!1s0x8e3f9db07b05ee2d:0x7e11bf0a9122222d!8m2!3d4.68237!4d-74.14496!16s%2Fg%2F11gtz7t5y3?hl=es"
                                target="_blank">
                                <figure class=" flex flex-col items-center">
                                    <img src="./components/img/mapa_icon_cel.png" alt="mapa" title="Carrera 108 # 22F -21"
                                        class="w-16 h-16">
                                </figure>
                            </a>
                            <p class="mb-4 text-black-0 dark:text-gray-light text-xl font-serif transform -skew-x-12">
                                Carrera 108 # 22F -21<br>Bogotá
                                DC
                                - (Colombia)</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <iframe id="map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d994.125562552674!2d-74.14504795920652!3d4.68241572552794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9db07b05ee2d%3A0x7e11bf0a9122222d!2sTecnimontacargas%20Dual%20Ltda!5e0!3m2!1ses!2sco!4v1682447221490!5m2!1ses!2sco"
                                width="350" height="250" style="border:0;" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <div class="w-1/6 h-1/6 mt-4">
                                <a class="dark:hidden" href="#">
                                    <svg viewBox="0 0 100 100">
                                        <polygon points="5,95 50,5 95,95" fill="none" stroke="#f9ba4e" stroke-width="6" />
                                        <rect x="0" y="90" width="100" height="10" fill="#fcfcfc" stroke-width="1.4" />
                                    </svg>
                                </a>
                                <a class="hidden dark:block" href="#">
                                    <svg viewBox="0 0 100 100">
                                        <polygon points="5,95 50,5 95,95" fill="none" stroke="#f9ba4e" stroke-width="6" />
                                        <rect x="0" y="90" width="100" height="10" fill="#595959" stroke-width="1.4" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <Chat_Flotante />
                    </main>
                    <Footer_Cel />
                </div>
            </div>
            <router-view v-if="!mostrarContenido"></router-view>
        </div>
        <!-- 1000-->
        <div v-else>
            <main class="w-full h-screen">

                <!--nav-->

                <nav class="w-full h-20 shadow-lg bg-primary  fixed z-30">

                    <div class="container mx-auto w-full h-20 flex flex-row justify-center">
                        <div class="w-auto lg:w-1/3">
                            <img src="../src/components/icons/Logo_nonary.svg" class="w-56 py-2 ml-4">
                        </div>

                        <div
                            class="w-auto lg:w-1/3 font-Fuente_primaria text-center text-septenary text-2xl flex flex-row justify-center space-x-7 py-5 ">

                            <router-link @click="bandera = false" to="/">Inicio</router-link>
                            <a href="">Alquiler</a>
                            <router-link @click="bandera = false" to="/Mantenimiento">Mantenimiento</router-link>

                        </div>

                        <div
                            class="w-auto lg:w-1/3 flex flex-row justify-end font-Fuente_primaria text-center text-septenary text-2xl space-x-7 p-5">
                            <a href="">
                                <img src="../src/components/icons/carrito.svg" class="w-10">
                            </a>
                            <a href="">Ingresar</a>
                            <a class="text-nonary">Registrarse</a>
                        </div>

                    </div>

                </nav>

                <!--formulario y foto-->

                <section class=" w-full h-screen pt-20 bg-nonary flex flex-row">

                    <div class="grayscale w-3/5 h-full bg-montacarga bg-center xl:bg-left bg-cover "></div>

                    <div class="container mx-auto w-2/5 h-full px-20 py-4 2xl:py-14 flex flex-col items-center space-y-5">
                        <div>
                            <h1 class="p-10 text-primary font-Fuente_secundaria text-5xl">Contactactenos</h1>
                        </div>
                        <div class="">
                            <label for="Nombre" class="block text-primary font-Fuente_terciaria text-xl text-start">Ingrese
                                el
                                nombre</label>
                            <input type="text"
                                class="w-96 bg-white mt-2 h-10 appearance-none rounded shadow-lg focus:outline-none focus:bg-white"
                                placeholder="Nombre">
                        </div>

                        <div class="">
                            <label for="Correo" class="block text-primary font-Fuente_terciaria text-xl text-start">Ingrese
                                el correo
                                electronico</label>
                            <input type="text"
                                class="w-96 bg-white mt-2 h-10 appearance-none rounded shadow-lg focus:outline-none focus:bg-white"
                                placeholder="Correo electronico">
                        </div>
                        <div class="">
                            <label for="Telefono"
                                class="block text-primary font-Fuente_terciaria text-xl text-start">Ingresa el
                                telefono</label>
                            <input type="text"
                                class="w-96 bg-white mt-2 h-10 appearance-none rounded shadow-lg font-Fuente_terciaria focus:outline-none focus:bg-white"
                                placeholder="Telefono">
                        </div>

                        <div class="">
                            <label for="Tipo_servicio"
                                class="block text-primary font-Fuente_terciaria text-xl text-start">Indique el
                                tipo de servicio</label>
                            <textarea type="text"
                                class="w-96 bg-white mt-2 h-32 appearance-none rounded shadow-lg focus:outline-none focus:bg-white"></textarea>
                        </div>

                        <div class="w-full flex items-center justify-center">
                            <button
                                class="w-28 h-14 bg-primary font-Fuente_primaria text-lg text-septenary rounded-md shadow-md active:bg-secondary">
                                Enviar!
                            </button>
                        </div>
                    </div>

                </section>

                <!--datos de contacto-->

                <section class="w-full h-5/6  bg-primary">

                    <div class=" container mx-auto flex flex-col">

                        <h1 class="py-14 font-Fuente_secundaria text-5xl text-center text-pri text-nonary">Informacion</h1>

                        <div class="w-full h-4/6 flex flex-row shadow-md rounded-md ">

                            <!--informacion -->

                            <div class="w-1/2 h-full p-10 flex flex-col space-y-6 bg-septenary rounded-s-md">

                                <p class="font-Fuente_secundaria text-primary text-center text-4xl mb-7">Datos</p>


                                <div class="flex flex-row space-x-3">
                                    <img src="../src/components/icons/Marcador.svg" class="w-14 h-14">
                                    <p class="pt-2 font-Fuente_terciaria text-primary text-xl">Carrera 108 # 22F -21 Bogotá
                                        DC - (Colombia)
                                    </p>
                                </div>

                                <div class="flex flex-row space-x-3">
                                    <img src="../src/components/icons/Telefono.svg" class="w-14 h-14">
                                    <div>
                                        <p class="pt-2 font-Fuente_terciaria text-primary text-xl">(+57) 601 5408640 </p>
                                        <p class="font-Fuente_terciaria text-primary text-xl">(+57) 3244298326</p>
                                    </div>

                                </div>

                                <div class="flex flex-row space-x-3">
                                    <img src="../src/components/icons/whatsapp.svg" class="w-14 h-14">
                                    <p class="pt-2 font-Fuente_terciaria text-primary text-xl">(+57) 3168770708</p>
                                </div>

                                <div class="flex flex-row space-x-3">
                                    <img src="../src/components/icons/Correo.svg" class="w-14 h-14">
                                    <p class="pt-2 font-Fuente_terciaria text-primary text-xl">
                                        gestion@tecnimontacargasdual.com</p>
                                </div>

                            </div>
                            <!--Mapa-->
                            <div class="w-1/2 ">

                                <iframe class="w-full h-full rounded-e-md"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9457.721101208544!2d-74.15113081673009!3d4.685996886697891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9db07b05ee2d%3A0x7e11bf0a9122222d!2sTecnimontacargas%20Dual%20Ltda!5e0!3m2!1ses!2sco!4v1682899896742!5m2!1ses!2sco"
                                    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>

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

