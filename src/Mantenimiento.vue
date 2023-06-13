<script >
export default {
    data() {
        return {
            mostrarMenu: false,
            showImage: false,
            mostrarContenido: true,
            windowWidth: window.innerWidth
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
        window.addEventListener('resize', this.handleResize)
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
        },
        handleScroll() {
            this.showImage = window.scrollY < window.innerHeight
        }
    }
};
</script>

<template>
    <div>
        <!-- 350x640-->
        <div v-if="windowWidth < 640">

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
                            <router-link to="/Registrarse"
                                @click="mostrarContenido = !mostrarContenido">Registrarse</router-link>
                        </li>
                        <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray">
                            <router-link to="/Contacto" @click="mostrarContenido = !mostrarContenido">Contacto</router-link>
                        </li>
                        <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray">
                            <router-link to="/Alquiler" @click="mostrarContenido = !mostrarContenido">Alquiler</router-link>
                        </li>
                        <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray">
                            <router-link to="/Mantenimiento" @click="mostrarMenu = !mostrarMenu">Mantenimiento</router-link>
                        </li>
                        <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray">
                            <router-link to="/Venta" @click="mostrarContenido = !mostrarContenido">Venta</router-link>
                        </li>
                    </ul>
                </div>

                <div v-if="!mostrarMenu" class="dark:bg-gray bg-white">
                    <header class="h-1/7 flex flex-col">
                        <nav class="bg-black-0 w-full h-full">
                            <ul class="flex justify-center items-center h-full">
                                <li class="mr-4">
                                    <button @click="mostrarMenu = !mostrarMenu">
                                        <figure>
                                            <img src="./img/menu_lineas_blancas.png" alt="menu" title="menu"
                                                class="w-10 h-1/8">
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

                    <main class="bg-white dark:bg-gray w-full h-3/4 relative">
                        <div class="flex items-center flex-col">
                            <figure class="w-full h-1/6">
                                <img src="./img/mantenimineto.jpeg" alt="Mecanico_Reparando" title="Mantenimiento">
                            </figure>
                            <p
                                class="text-black-0 dark:text-gray-light text-2xl font-serif font-bold text-center mr-4 ml-4 mt-4">
                                Más que un servicio creamos un sistema general de rendimiento para sus equipos.
                            </p>
                            <h2 class="text-yellow-2 text-3xl font-serif text-center mx-4 mt-4 mb-1">
                                Montacargas
                            </h2>
                            <p class="text-gray dark:text-gray-light text-xl font-serif text-center mx-2 mb-4">
                                <span class="transform -skew-x-12 inline-block"> Programas de capacitación que aseguran el
                                    rendimiento del equipo y del colaborador,</span>
                                <span class="transform -skew-x-12 inline-block">gracias al uso seguro de los equipos y de
                                    las
                                    baterías.</span>
                            </p>
                            <ol class="list-disc text-gray dark:text-gray-light text-xl font-serif text-center mx-2 mb-4 ">
                                <li>
                                    <span class="transform -skew-x-12 inline-block">Programas de mantenimiento
                                        específico</span>
                                    <br><span class="transform -skew-x-12 inline-block">para sus
                                        necesidades individuales.</span>
                                </li>
                                <li>
                                    <span class="transform -skew-x-12 inline-block">Importación y venta de repuestos.</span>
                                </li>
                            </ol>
                            <figure class="w-full h-1/6">
                                <img src="./img/frente-TMD.jpeg" alt="montacarga_Jungheinrich"
                                    title="montacarga_Jungheinrich">
                            </figure>
                            <h2 class="text-yellow-2 text-3xl font-serif text-center mx-4 mt-4 mb-1">
                                Servicio técnico especialistas en Jungheinrich
                            </h2>
                            <p class="text-gray dark:text-gray-light text-xl font-serif text-center mx-1 mb-4">
                                <span class="transform -skew-x-12 inline-block">Apoyamos a nuestros clientes para mantener
                                    sus
                                    equipos 100% operativos, seguros y</span>
                                <span class="transform -skew-x-12 inline-block">confiables, asegurándoles respaldo y
                                    confiabilidad
                                    en la actividad de los mismos.</span>
                            </p>
                            <figure class="w-full h-1/6">
                                <img src="./img/porta_estiba_2.jpg" alt="portaestibas" title="portaestibas">
                            </figure>
                            <h2 class="text-yellow-2 text-3xl font-serif text-center mx-4 mt-4 mb-1">
                                Servicio técnico portaestibas
                            </h2>
                            <p class="text-gray dark:text-gray-light text-xl font-serif text-center mx-1 mb-4">
                                <span class="transform -skew-x-12 inline-block">Contamos con dos tipos de mantenimiento
                                    preventivo-correctivo y para que su operación</span>
                                <span class="transform -skew-x-12 inline-block">no se vea afectada prestamos nuestros
                                    portaestibas
                                    por
                                    el tiempo que demore la refracción</span>
                            </p>
                        </div>
                        <div class="fixed bottom-2 right-1" v-show="showImage">
                            <figure class="self-center order-last">
                                <img src="./img/caht_icon.png" alt="chat" title="chat" class="w-14 h-14">
                            </figure>
                        </div>
                    </main>

                    <footer class="w-full h-24">
                        <nav class="bg-yellow-2 h-full">
                            <ul class="flex justify-center items-center h-full">
                                <li class="ml-4 mr-4">
                                    <router-link to="/Contacto">
                                        <figure>
                                            <img src="./img/telefono_icon.png" alt="telefono" title="3244298326"
                                                class="w-14 h-14">
                                        </figure>
                                    </router-link>
                                </li>
                                <li class="ml-4 mr-4">
                                    <a href="mailto:gestion@tecnimontacargasdual.com" target="_blank">
                                        <figure>
                                            <img src="./img/correo_icon.png" alt="correo"
                                                title="gestion@tecnimontacargasdual.com" class="w-14 h-14">
                                        </figure>
                                    </a>
                                </li>
                                <li class="ml-4 mr-4">
                                    <a href="https://www.facebook.com/profile.php?id=100089647335119" target="_blank">
                                        <figure>
                                            <img src="./img/facebook_icon.png" alt="facebook" title="facebook"
                                                class="w-12 h-14">
                                        </figure>
                                    </a>
                                </li>
                                <li class="ml-4 mr-4">
                                    <a href="https://wa.me/573168770708" target="_blank">
                                        <figure>
                                            <img src="./img/whatsap_icon.png" alt="whatsapp" title="(+57) 3168770708"
                                                class="w-14 h-14">
                                        </figure>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </footer>
                </div>
            </div>
        </div>
        <!-- 750x1200-->
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

                <!--fondo y frase-->

                <section class="w-full pt-20 h-full">
                    <div class="flex w-full h-full justify-center items-center">
                        <div class="bg-mantenimiento w-full h-full bg-cover bg-left bg-fixed grayscale">
                            <div class="bg-black w-full h-full opacity-70"></div>
                        </div>
                        <p
                            class="w-3/6 p-20 pr-34 bg-nonary opacity-80 font-Fuente_terciaria text-center text-6xl absolute text-primary rounded-md">
                            Más que un servicio creamos un sistema general de
                            rendimiento para sus equipos</p>
                    </div>

                </section>

                <!--informacion de mantenimiento-->

                <section class="w-full h-full flex flex-col bg-nonary">

                    <div class="container mx-auto w-full h-full flex flex-row">

                        <div class="w-1/2 h-full  p-32 ">
                            <div class="w-full h-full bg-montacarga_2 bg-cover bg-bottom rounded-md"></div>
                        </div>

                        <div class="w-1/2 h-full p-32 ">

                            <div class="w-full h-full bg-nonary rounded-md flex flex-col justify-center items-center">

                                <h1 class="font-Fuente_terciaria text-septenary text-center text-7xl">Montacargas</h1>
                                <ul
                                    class="pt-5 list-disc list-outside font-Fuente_primaria text-primary text-4xl space-y-2">
                                    <li>Programas de mantenimiento específico para sus necesidades individuales.</li>
                                    <li>Importación y venta de repuestos</li>
                                </ul>

                            </div>

                        </div>


                    </div>

                </section>

                <section class="w-full h-full flex flex-col bg-nonary">

                    <div class="container mx-auto w-full h-full flex flex-row">

                        <div class="w-1/2 h-full  p-32 ">

                            <div class="w-full h-full bg-nonary rounded-md flex flex-col justify-center items-center">

                                <h1 class="font-Fuente_terciaria text-septenary text-center text-7xl">Servicio técnico
                                    especialistas en
                                    Jungheinrich
                                </h1>
                                <p class="pt-5 font-Fuente_primaria text-primary text-4xl space-y-2 text-center">Apoyamos a
                                    nuestros
                                    clientes para mantener sus equipos 100% operativos, seguros y confiables,
                                    asegurándoles respaldo y confiabilidad en la actividad de los mismos.</p>

                            </div>

                        </div>

                        <div class="w-1/2 h-full  p-32 ">
                            <div class="w-full h-full bg-jungher bg-cover bg-bottom rounded-md"></div>

                        </div>


                    </div>

                </section>

                <section class="w-full h-full flex flex-col bg-nonary">

                    <div class="container mx-auto w-full h-full flex flex-row">

                        <div class="w-1/2 h-full  p-32 ">

                            <div class="w-full h-full bg-portaestiba bg-cover bg-bottom rounded-md">

                            </div>

                        </div>

                        <div class="w-1/2 h-full  p-32 ">

                            <div class="w-full h-full bg-nonary rounded-md flex flex-col justify-center items-center">

                                <h1 class="font-Fuente_terciaria text-septenary text-center text-7xl">Servicio técnico
                                    portaestibas</h1>
                                <p class="pt-5 font-Fuente_primaria text-primary text-4xl space-y-2 text-center">Contamos
                                    con dos tipos de
                                    mantenimiento preventivo-correctivo y para que su operación no se vea afectada prestamos
                                    nuestros
                                    portaestibas por el tiempo que demore la refracción</p>

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
