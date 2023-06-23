<script >
import MenuLateral from './components/MenuLateral_Cel.vue';
import Footer_Cel from './components/Footer_Cel.vue';
import MenuBarra_Cel from './components/MenuBarra_Cel.vue';
import Chat_Flotante from './components/Chat_Flotante.vue';
import MenuBarra_PC from './components/MenuBarra_PC.vue';
import Footer_PC from './components/Footer_PC.vue';
export default {
    components: {
        MenuLateral,
        Footer_Cel,
        MenuBarra_Cel,
        Chat_Flotante,
        MenuBarra_PC,
        Footer_PC
    },
    data() {
        return {
            mostrarMenu: false,
            mostrarContenido: true,
            windowWidth: window.innerWidth,
            padre: 'Alquiler'
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
    <div>
        <!-- 320 -->
        <div v-if="windowWidth < 1024">
            <div v-if="mostrarContenido">
                <MenuLateral :menuProp="mostrarMenu" :contenidoProp="mostrarContenido" :PadreProp="padre"
                    @actualizar-menu="actualizarMenu" @actualizar-contenido="actualizarContenido" />
                <div v-show="!mostrarMenu" class=" bg-yellow-2">
                    <MenuBarra_Cel :menuProp="mostrarMenu" @actualizar-menu="actualizarMenu" />

                    <main class="bg-white dark:bg-gray w-full h-3/4 relative">
                        <div class="flex items-center flex-col">
                            <figure class="w-full h-1/6">
                                <img src="./components/img/montacarga_5.jpeg" alt="montacarga" title="alquiler">
                            </figure>
                            <h2 class="text-yellow-2 text-3xl font-serif font-bold text-center mx-4 mt-4 mb-1">
                                Montacargas
                            </h2>
                            <p class="text-gray dark:text-gray-light text-xl font-serif text-center mx-2 mb-4">
                                <span class="transform -skew-x-12 inline-block">Actualmente nuestro servicio de alquiler
                                    cuenta
                                    con
                                    una flota amplia de máquinas y consideramos
                                    que nuestro éxito está fundamentado en la calidad de nuestros equipos,</span>
                                <span class="transform -skew-x-12 inline-block"> soporte técnico y asesoría que permite a
                                    todos
                                    nuestros clientes mantener su operación logística
                                    de manera continua y eficiente.</span>
                                <span class="transform -skew-x-12 inline-block">
                                    Nuestra experiencia, solidez y compromiso, permiten optimizar los recursos, aumentar la
                                    eficiencia y
                                    disminuir los costos operativos de nuestros clientes.
                                </span>
                            </p>
                            <figure class="w-full h-1/6">
                                <img src="./components/img/bateria.jpeg" alt="bateria de traccion" title="alquiler">
                            </figure>
                            <h2 class="text-yellow-2 text-3xl font-serif font-bold text-center mx-4 mt-4 mb-1">
                                Baterias de Traccion
                            </h2>
                            <p class="text-gray dark:text-gray-light text-xl font-serif text-center mx-1 mb-4">
                                <span class="transform -skew-x-12 inline-block">Largas jornadas de trabajo y sus baterías no
                                    las
                                    soportan, en Tecnimontacargas Dual encontrarás una
                                    línea de baterías nuevas y seminuevas para la venta y alquiler. 12V 24V 36V 48V
                                    80V.</span>
                            </p>
                        </div>
                        <Chat_Flotante />
                    </main>
                    <Footer_Cel />
                </div>
                <router-view v-if="!mostrarContenido"></router-view>
            </div>



        </div>
        <!--1024-->

        <div v-else>
            <main class="w-full h-screen " v-if="mostrarContenido">

                <!--nav-->

                <MenuBarra_PC :contenidoProp="mostrarContenido" @actualizar-contenido="actualizarContenido" />

                <!--seccion 1-->

                <section id="home" class="w-full h-full flex flex-col m-auto">

                    <div class="w-full h-full bg-montacargas_alquiler bg-fixed bg-cover relative">
                        <div class="w-full h-full bg-primary opacity-50">

                        </div>

                    </div>

                    <div class="w-full h-full text-center flex flex-col justify-center absolute">
                        <p class="w-full font-Fuente_primaria text-septenary text-6xl"> Encuentra los mejores alquileres
                        </p>
                        <p class="w-full text-nonary font-Fuente_primaria text-3xl"> una flota amplia de máquinas con la
                            mejor calidad
                        </p>
                        <div class="w-full h-20 mt-4 flex justify-center">
                            <router-link to="/Contacto" tag="button" @click="mostrarContenido = false"
                                class="w-36 h-14 p-3 bg-septenary font-Fuente_primaria text-xl text-center rounded-md shadow-md ">
                                Alquila Aquí!
                            </router-link>

                        </div>

                    </div>

                </section>

                <section class="w-full h-full flex flex-col m-auto bg-primary">

                    <div class="w-full h-1/2 flex flex-row align-middle">

                        <div class="w-1/2 h-full flex justify-center align-middle">
                            <img class="w-96" src="../src/components/img/cargas_PNG.png" alt="">
                        </div>
                        <div class="w-1/2 h-full flex flex-col justify-center">
                            <p class="font-Fuente_terciaria text-septenary text-center text-5xl 2xl:text-6xl">
                                Montacargas
                            </p>
                            <p class="p-11 font-Fuente_primaria text-nonary text-2xl 2xl:text-3xl  space-y-2 text-center"> 
                                
                                soporte técnico y asesoría que permite a
                                todos
                                nuestros clientes mantener su operación logística
                                de manera continua y eficiente.</p>
                        </div>

                    </div>
                    <div class="w-full h-1/2 flex flex-row align-middle">

                        <div class="w-1/2 h-full flex flex-col justify-center">
                            <p class="font-Fuente_terciaria text-septenary text-center text-5xl 2xl:text-6xl">
                                Baterias de Traccion
                            </p>
                            <p class="p-11 font-Fuente_primaria text-nonary text-2xl 2xl:text-3xl  space-y-2 text-center">
                                las
                                soportan, en Tecnimontacargas Dual encontrarás una
                                línea de baterías nuevas y seminuevas para la venta y alquiler. 12V 24V 36V 48V
                                80V.
                            </p>

                        </div>
                        <div class="w-1/2 h-full flex justify-center align-middle pb-20">
                            <img class="w-72" src="../src/components/img/bateria_PNG.png" alt="">
                        </div>

                    </div>



                </section>

                <!--Seccion dos/tarjetas de servicios (animacion de que se voltean) -->


                <!-- fqa y enlaces extra -->
                <Footer_PC />
                <!--Seccion uno/imagen y texto -->


            </main>
            <router-view v-if="!mostrarContenido">
            </router-view>
        </div>
    </div>
</template>