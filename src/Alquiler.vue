<script >
import MenuLateral from './components/MenuLateral_Cel.vue';
import Footer_Cel from './components/Footer_Cel.vue';
export default {
    components: {
        MenuLateral,
        Footer_Cel
    },
    data() {
        return {
            mostrarMenu: false,
            showImage: false,
            mostrarContenido: true
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            this.showImage = window.scrollY < window.innerHeight
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
                    <router-link to="/Registrarse" @click="mostrarContenido = !mostrarContenido">Registrarse</router-link>
                </li>
                <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray">
                    <router-link to="/Contacto" @click="mostrarContenido = !mostrarContenido">Contacto</router-link>
                </li>

                <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray">
                    <router-link to="/Alquiler" @click="mostrarMenu = !mostrarMenu">Alquiler</router-link>
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
        <div v-if="!mostrarMenu" class=" bg-yellow-2">
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

            <main class="bg-white dark:bg-gray w-full h-3/4 relative">
                <div class="flex items-center flex-col">
                    <figure class="w-full h-1/6">
                        <img src="./components/img/montacarga_5.jpeg" alt="montacarga" title="alquiler">
                    </figure>
                    <h2 class="text-yellow-2 text-3xl font-serif font-bold text-center mx-4 mt-4 mb-1">
                        Montacargas
                    </h2>
                    <p class="text-gray dark:text-gray-light text-xl font-serif text-center mx-2 mb-4">
                        <span class="transform -skew-x-12 inline-block">Actualmente nuestro servicio de alquiler cuenta con
                            una flota amplia de máquinas y consideramos
                            que nuestro éxito está fundamentado en la calidad de nuestros equipos,</span>
                        <span class="transform -skew-x-12 inline-block"> soporte técnico y asesoría que permite a todos
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
                        <span class="transform -skew-x-12 inline-block">Largas jornadas de trabajo y sus baterías no las
                            soportan, en Tecnimontacargas Dual encontrarás una
                            línea de baterías nuevas y seminuevas para la venta y alquiler. 12V 24V 36V 48V 80V.</span>
                    </p>
                </div>
                <div class="fixed bottom-2 right-1" v-show="showImage">
                    <figure class="self-center order-last">
                        <img src="./components/img/chat_icon_cel.png" alt="chat" title="chate con nosotros"
                            class="w-14 h-14">
                    </figure>
                </div>
            </main>
            <Footer_Cel />
        </div>
    </div>
</template>