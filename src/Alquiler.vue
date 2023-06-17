<script >
import MenuLateral from './components/MenuLateral_Cel.vue';
import Footer_Cel from './components/Footer_Cel.vue';
import MenuBarra_Cel from './components/MenuBarra_Cel.vue';
export default {
    components: {
        MenuLateral,
        Footer_Cel,
        MenuBarra_Cel
    },
    data() {
        return {
            mostrarMenu: false,
            showImage: false,
            mostrarContenido: true,
            padre: 'Alquiler'
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
        <MenuLateral :menuProp="mostrarMenu" :contenidoProp="mostrarContenido" :PadreProp="padre"
            @actualizar-menu="actualizarMenu" @actualizar-contenido="actualizarContenido" />
        <div v-if="!mostrarMenu" class=" bg-yellow-2">
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