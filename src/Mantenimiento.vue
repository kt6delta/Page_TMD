<script >
import MenuLateral from './components/MenuLateral_Cel.vue';
import Footer_Cel from './components/Footer_Cel.vue';
import MenuBarra_Cel from './components/MenuBarra_Cel.vue';
import Chat_Flotante from './components/Chat_Flotante.vue';
import MenuBarra_PC from './components/MenuBarra_PC.vue';
export default {
    components: {
    MenuLateral,
    Footer_Cel,
    MenuBarra_Cel,
    Chat_Flotante,
    MenuBarra_PC
},
    data() {
        return {
            mostrarMenu: false,
            mostrarContenido: true,
            windowWidth: window.innerWidth,
            padre: 'Mantenimiento'
        };
    },
    mounted() {
        window.addEventListener('resize', this.handleResize)
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
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
        <div v-if="windowWidth < 1024">
            <router-view v-if="!mostrarContenido"></router-view>

            <div v-if="mostrarContenido">
                <MenuLateral :menuProp="mostrarMenu" :contenidoProp="mostrarContenido" :PadreProp="padre" @actualizar-menu="actualizarMenu"
                    @actualizar-contenido="actualizarContenido" />

                <div v-show="!mostrarMenu" class="dark:bg-gray bg-white">
                    <MenuBarra_Cel :menuProp="mostrarMenu" @actualizar-menu="actualizarMenu"/> 

                    <main class="bg-white dark:bg-gray w-full h-3/4 relative">
                        <div class="flex items-center flex-col">
                            <figure class="w-full h-1/6">
                                <img src="./components/img/mantenimineto.jpeg" alt="Mecanico_Reparando"
                                    title="Mantenimiento">
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
                                <img src="./components/img/montacarga_1_cel.jpeg" alt="montacarga_Jungheinrich"
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
                                <img src="./components/img/portaestiba_3.jpg" alt="portaestibas" title="portaestibas">
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
                        <Chat_Flotante />
                    </main>

                    <Footer_Cel />
                </div>
            </div>
        </div>
        <!-- 750x1200-->
        <div v-else>

            <main class="w-full h-screen">
                <!--nav-->
                <MenuBarra_PC :contenidoProp="mostrarContenido" @actualizar-contenido="actualizarContenido"/> 

                <!--fondo y frase-->

                <section class="w-full pt-20 h-full">
                    <div class="flex w-full h-full justify-center items-center">
                        <div class="bg-mantenimiento w-full h-full bg-cover bg-left bg-fixed grayscale">
                            <div class="bg-black w-full h-full opacity-70"></div>
                        </div>
                        <p
                            class="w-4/6 xl:w-3/6 p-20 bg-nonary opacity-80 font-Fuente_terciaria text-center text-6xl absolute text-primary rounded-md">
                            Más que un servicio creamos un sistema general de
                            rendimiento para sus equipos</p>
                    </div>

                </section>

                <!--informacion de mantenimiento-->

                <section class="w-full h-full flex flex-col bg-nonary">

                    <div class="container mx-auto w-full h-full flex flex-row">

                        <div class="w-1/2 h-full py-32 px-20 xl:px-32">
                            <div class="w-full h-full bg-montacarga_2 bg-cover bg-bottom rounded-md"></div>
                        </div>

                        <div class="w-1/2 h-full p-32 ">

                            <div class="w-full h-full bg-nonary rounded-md flex flex-col justify-center items-center">

                                <h1
                                    class="font-Fuente_terciaria text-septenary text-center text-5xl xl:text-6xl 2xl:text-7xl">
                                    Montacargas</h1>
                                <ul
                                    class="pt-5 list-disc list-outside font-Fuente_primaria text-primary text-2xl xl:text-3xl 2xl:text-4xl space-y-2">
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

                                <h1
                                    class="font-Fuente_terciaria text-septenary text-center text-5xl xl:text-6xl 2xl:text-7xl">
                                    Servicio técnico
                                    especialistas en
                                    Jungheinrich
                                </h1>
                                <p
                                    class="pt-5 font-Fuente_primaria text-primary text-2xl xl:text-3xl 2xl:text-4xl  space-y-2 text-center">
                                    Apoyamos a
                                    nuestros
                                    clientes para mantener sus equipos 100% operativos, seguros y confiables,
                                    asegurándoles respaldo y confiabilidad en la actividad de los mismos.</p>

                            </div>

                        </div>

                        <div class="w-1/2 h-full  py-32 px-20 xl:px-32">
                            <div class="w-full h-full bg-jungher bg-cover bg-bottom rounded-md"></div>

                        </div>


                    </div>

                </section>

                <section class="w-full h-full flex flex-col bg-nonary">

                    <div class="container mx-auto w-full h-full flex flex-row">

                        <div class="w-1/2 h-full  py-32 px-20 xl:px-32">

                            <div class="w-full h-full bg-portaestiba bg-cover bg-bottom rounded-md">

                            </div>

                        </div>

                        <div class="w-1/2 h-full  p-32 ">

                            <div class="w-full h-full bg-nonary rounded-md flex flex-col justify-center items-center">

                                <h1
                                    class="font-Fuente_terciaria text-septenary text-center text-5xl xl:text-6xl 2xl:text-7xl">
                                    Servicio técnico
                                    portaestibas</h1>
                                <p
                                    class="pt-5 font-Fuente_primaria text-primary text-2xl xl:text-3xl 2xl:text-4xl space-y-2 text-center">
                                    Contamos
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
            <router-view v-if="!mostrarContenido">
            </router-view>
        </div>
    </div>
</template>
