<script>
import MenuLateral from './components/MenuLateral_Cel.vue';
import MenuBarra_Cel from './components/MenuBarra_Cel.vue';
import MenuBarra_PC from './components/MenuBarra_PC.vue';
import Footer_PC from './components/Footer_PC.vue';
import Footer_Cel from './components/Footer_Cel.vue';

export default {

    components: {
        MenuLateral,
        MenuBarra_Cel,
        MenuBarra_PC,
        Footer_PC,
        Footer_Cel
    },
    data() {
        return {
            mostrarMenu: false,
            mostrarContenido: true,
            windowWidth: window.innerWidth,
        };
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
        this.checkUsername()
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
        },
    }
};
</script>
<template>
    <router-view v-if="!mostrarContenido"></router-view>

    <div v-if="mostrarContenido">
        <MenuLateral v-if="windowWidth < 1024" :menuProp="mostrarMenu" :contenidoProp="mostrarContenido" :PadreProp="padre"
            @actualizar-menu="actualizarMenu" @actualizar-contenido="actualizarContenido" />
        <div v-show="!mostrarMenu" class="w-full h-screen dark:bg-gray bg-white">
            <MenuBarra_Cel v-if="windowWidth < 1024" :menuProp="mostrarMenu" @actualizar-menu="actualizarMenu" />
            <MenuBarra_PC v-else />

            <main :class="{
                'my-2': windowWidth < InterfazGrand,
                'fixed z-31': windowWidth >= InterfazGrand,
                'bg-white dark:bg-gray w-full h-5/6 relative': true
            }">
                <div class="w-full h-full flex items-center justify-center flex-col">
                    <img src="./components/img/confirma_correo.png" alt="correoVerificacion" class="w-64 h-auto">
                    <div :class="{
                        ' w-1/2 mb-10': windowWidth >= InterfazMedia,
                        'w-5/6  mb-4': windowWidth < InterfazMedia,
                        'dark:bg-gray bg-white shadow-md rounded px-3 pt-3 pb-4 flex items-center justify-center flex-col h-1/2': true
                    }">
                        <p class="block text-gray dark:text-gray-light font-serif italic text-xl mb-2 ">
                            <span class="font-bold flex items-center justify-center">confirma tu correo
                                electronico</span><br> Nosotros enviamos una
                            confirmacion al correo:
                            <span class="font-bold flex items-center justify-center">XXXX</span>
                            Si no recibiste el correo, revisa tu carpeta de <br> spam o <a href="#"
                                class=" font-bold text-yellow-2">intentalo de
                                nuevo</a>
                        </p>
                        <br><br><br><br>
                        <button :class="{
                            'mt-0': windowWidth >= InterfazMedia,
                            'm-0': windowWidth < InterfazMedia,
                            'dark:text-gray-light bg-yellow-2 hover:bg-blue-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline': true
                        }">
                            Regresar
                        </button>
                    </div>
                </div>
            </main>
        </div>
        <Footer_Cel/>
        <!--<Footer_PC v-else />-->
    </div>
</template>


<style scoped></style>