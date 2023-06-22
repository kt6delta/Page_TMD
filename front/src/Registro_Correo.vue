<script>
import MenuLateral from './components/MenuLateral_Cel.vue';
import MenuBarra_Cel from './components/MenuBarra_Cel.vue';
import MenuBarra_PC from './components/MenuBarra_PC.vue';
import Footer_PC from './components/Footer_PC.vue';
import Footer_Cel from './components/Footer_Cel.vue';

import axios from 'axios';
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
            padre: 'Registrarse'
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
        getUser() {
            axios.get('http://localhost:8000/login/')
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    },
};
</script>

<template>
    <router-view v-if="!mostrarContenido"></router-view>
    <div v-if="mostrarContenido">
        <MenuLateral v-if="windowWidth < 1024" :menuProp="mostrarMenu" :contenidoProp="mostrarContenido" :PadreProp="padre"
            @actualizar-menu="actualizarMenu" @actualizar-contenido="actualizarContenido" />
        <div v-show="!mostrarMenu" class="w-full h-screen bg-yellow-2">
            <MenuBarra_Cel v-if="windowWidth < 1024" :menuProp="mostrarMenu" @actualizar-menu="actualizarMenu"
                @actualizar-contenido="actualizarContenido" />
            <MenuBarra_PC v-else :contenidoProp="mostrarContenido" @actualizar-contenido="actualizarContenido" />
            <main>
                <!--formulario-->
                <section class="w-full h-5/6 bg-nonary flex justify-center align-middle">
                    <div :class="{
                        'mt-32 w-2/4 mb-14': windowWidth >= 1024,
                        'mt-9 w-2/3 mb-9': windowWidth < 1024,
                        'bg-primary rounded-md shadow-xl': true
                    }">
                        <div :class="{
                            'px-20 py-24': windowWidth >= 1024,
                            'px-10 py-10': windowWidth < 1024 && windowWidth >= 768,
                            'px-5 py-5': windowWidth < 768,
                            'w-full h-full flex flex-col space-y-5': true
                        }">
                            <div>
                                <h1 :class="{
                                    'text-5xl p-5': windowWidth >= 1024,
                                    'text-5xl p-2': windowWidth < 1024 && windowWidth >= 768,
                                    'text-4xl p-1': windowWidth < 768,
                                    'text-center text-nonary font-Fuente_secundaria': true
                                }">Registro
                                </h1>
                            </div>
                            <div>
                                <label for="Correo" :class="{
                                    'text-2xl': windowWidth >= 1024,
                                    'text-xl': windowWidth < 1024 && windowWidth >= 768,
                                    'text-lg': windowWidth < 768,
                                    'block text-nonary font-Fuente_terciaria text-start': true
                                }">Ingrese
                                    el
                                    correo
                                    electronico</label>
                                <input type="text"
                                    class="w-full bg-white mt-2 h-10 appearance-none rounded shadow-lg focus:outline-none focus:bg-white"
                                    placeholder="Correo electronico">
                            </div>
                            <div class="mb-5">
                                <label for="Contraseña" :class="{
                                    'text-2xl': windowWidth >= 1024,
                                    'text-xl': windowWidth < 1024 && windowWidth >= 768,
                                    'text-lg': windowWidth < 768,
                                    'block text-nonary font-Fuente_terciaria text-start': true
                                }">Ingrese
                                    una
                                    contraseña</label>
                                <input type="password"
                                    class="w-full bg-white mt-2 h-10 appearance-none rounded shadow-lg focus:outline-none focus:bg-white"
                                    placeholder="Contraseña">
                            </div>
                            <div class="mb-5">
                                <label for="Contraseña" :class="{
                                    'text-2xl': windowWidth >= 1024,
                                    'text-xl': windowWidth < 1024 && windowWidth >= 768,
                                    'text-lg': windowWidth < 768,
                                    'block text-nonary font-Fuente_terciaria text-start': true
                                }">Confirmar
                                    contraseña</label>
                                <input type="password"
                                    class="w-full bg-white mt-2 h-10 appearance-none rounded shadow-lg focus:outline-none focus:bg-white"
                                    placeholder="confirmar Contraseña">
                            </div>
                            <div class="w-full flex items-center justify-center">
                                <button @click="getUser()"
                                    class="w-28 h-14 bg-septenary font-Fuente_primaria text-lg text-primary rounded-md shadow-md active:bg-senary">
                                    Enviar!
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- fqa y enlaces extra -->
            </main>
            <Footer_PC v-if="windowWidth >= 1024" />
            <Footer_Cel v-else />
        </div>
    </div>
</template>