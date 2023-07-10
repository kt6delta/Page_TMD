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
            padre: 'Confirmacion',
            windowWidth: window.innerWidth,
            mail: 'Y'
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
        },
    }
};
</script>
<template>
    <router-view v-if="!mostrarContenido"></router-view>

    <div v-if="mostrarContenido">
        <MenuLateral v-if="windowWidth < 1024" :menuProp="mostrarMenu" :contenidoProp="mostrarContenido" :PadreProp=padre
            @actualizar-menu="actualizarMenu" @actualizar-contenido="actualizarContenido" />
        <div v-show="!mostrarMenu" class="w-full h-screen dark:bg-gray bg-white">
            <MenuBarra_Cel v-if="windowWidth < 1024" :menuProp="mostrarMenu" @actualizar-menu="actualizarMenu" />
            <MenuBarra_PC v-else :contenidoProp="mostrarContenido" :PadreProp=this.padre
                @actualizar-contenido="actualizarContenido" />

            <main :class="{
                'mb-10': windowWidth < 1024,
                'fixed z-31': windowWidth >= 1024,
                'bg-white dark:bg-gray w-full h-3/4 relative flex items-center justify-center flex-col': true
            }">
                <img src="./components/img/confirma_correo.png" alt="correoVerificacion" :class="{
                    'w-2/4 h-auto': windowWidth >= 768,
                    'w-auto h-2/5': windowWidth < 768,
                }">
                <div :class="{
                    'w-3/4 mb-10': windowWidth >= 768,
                    'w-5/6  mb-4': windowWidth < 768,
                    'h-2/3 dark:bg-gray bg-white shadow-md rounded px-3 pt-3 pb-4 flex items-center justify-center flex-col': true
                }">
                    <p :class="{
                        'text-4xl': windowWidth >= 768,
                        'text-xl': windowWidth < 768,
                        'block text-gray dark:text-gray-light font-serif italic': true
                    }">
                        <span class="mb-2 font-bold flex items-center justify-center">confirma tu correo
                            electronico</span> Nosotros enviamos una
                        confirmacion al correo:
                        <span class="font-bold flex items-center justify-center">{{ mail }}</span>
                        Si no recibiste el correo, revisa tu carpeta de spam o <router-link to="/Registrarse"
                            class=" font-bold text-yellow-2">intentalo de
                            nuevo</router-link>
                    </p>
                    <router-link to="/" tag="button" :class="{
                        'mt-16 text-3xl': windowWidth >= 768,
                        'mt-0': windowWidth < 768,
                        'dark:text-gray-light bg-yellow-2 hover:bg-blue-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline': true
                    }">
                        Regresar
                    </router-link>
                </div>
            </main>
            <Footer_Cel v-if="windowWidth <= 768" />
            <Footer_PC v-else />
        </div>
    </div>
</template>


<style scoped></style>