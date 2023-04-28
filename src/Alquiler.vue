<script >
export default {
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
                    <img src="src/img/x_icon.png" alt="X" title="salir">
                </figure>
            </button>

            <figure class="mx-auto w-80 h-28">
                <img src="src/img/ico_tmd_white.svg" alt="Montacarga" title="logo" class=" w-80 h-28">
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
                    <router-link to="/Contactenos" @click="mostrarContenido = !mostrarContenido">Contactenos</router-link>
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
        <div v-if="!mostrarMenu">
            <header class="h-1/7 flex flex-col">
                <nav class="bg-black-0 w-full h-full">
                    <ul class="flex justify-center items-center h-full">
                        <li class="mr-4">
                            <button @click="mostrarMenu = !mostrarMenu">
                                <figure>
                                    <img src="/src/img/menu_lineas_blancas.png" alt="menu" title="menu" class="w-10 h-1/8">
                                </figure>
                            </button>

                        </li>
                        <li>
                            <button>
                                <figure>
                                    <img src="/src/img/ico_tmd_white_n.svg" alt="Montacarga" title="logo"
                                        class="w-64 h-1/8">
                                </figure>
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>

            <main class="bg-white w-full h-3/4 relative">
                <div class="flex items-center flex-col">
                    <figure class="w-full h-1/6">
                        <img src="/src/img/montacarga.jpeg" alt="montacarga" title="alquiler">
                    </figure>
                    <h2 class="text-yellow-2 text-3xl font-serif font-bold text-center mx-4 mt-4 mb-1">
                        Montacargas
                    </h2>
                    <p class="text-gray text-xl font-serif text-center mx-2 mb-4">
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
                        <img src="/src/img/bateria.jpeg" alt="bateria de traccion" title="alquiler">
                    </figure>
                    <h2 class="text-yellow-2 text-3xl font-serif font-bold text-center mx-4 mt-4 mb-1">
                        Baterias de Traccion
                    </h2>
                    <p class="text-gray text-xl font-serif text-center mx-1 mb-4">
                        <span class="transform -skew-x-12 inline-block">Largas jornadas de trabajo y sus baterías no las
                            soportan, en Tecnimontacargas Dual encontrarás una
                            línea de baterías nuevas y seminuevas para la venta y alquiler. 12V 24V 36V 48V 80V.</span>
                    </p>
                </div>
                <div class="fixed bottom-2 right-1" v-show="showImage">
                    <figure class="self-center order-last">
                        <img src="/src/img/caht_icon.png" alt="chat" title="chate con nosotros" class="w-14 h-14">
                    </figure>
                </div>
            </main>

            <footer class="w-full h-24">
                <nav class="bg-yellow-2">
                    <ul class="flex justify-center items-center h-24">
                        <li class="ml-4 mr-4">
                            <a href="#">
                                <figure>
                                    <img src="/src/img/telefono_icon.png" alt="telefono" title="3244298326"
                                        class="w-14 h-14">
                                </figure>
                            </a>
                        </li>
                        <li class="ml-4 mr-4">
                            <a href="#">
                                <figure>
                                    <img src="/src/img/correo_icon.png" alt="correo"
                                        title="gestion@tecnimontacargasdual.com" class="w-14 h-14">
                                </figure>
                            </a>
                        </li>
                        <li class="ml-4 mr-4">
                            <a href="#">
                                <figure>
                                    <img src="/src/img/facebook_icon.png" alt="facebook" title="facebook" class="w-12 h-14">
                                </figure>
                            </a>
                        </li>
                        <li class="ml-4 mr-4">
                            <a href="#">
                                <figure>
                                    <img src="/src/img/whatsap_icon.png" alt="whatsapp" title="(+57) 3168770708"
                                        class="w-14 h-14">
                                </figure>
                            </a>
                        </li>
                    </ul>
            </nav>
        </footer>
    </div>
</div></template>