<script>
import MenuLateral from './components/MenuLateral_Cel.vue';
import MenuBarra_Cel from './components/MenuBarra_Cel.vue';
import MenuBarra_PC from './components/MenuBarra_PC.vue';
import Footer_PC from './components/Footer_PC.vue';
import axios from 'axios';

export default {

    components: {
        MenuLateral,
        MenuBarra_Cel,
        MenuBarra_PC,
        Footer_PC
    },
    data() {
        return {
            mostrarMenu: false,
            mostrarContenido: true,
            windowWidth: window.innerWidth,
            padre: 'Registrarse',
            InterfazMedia: 768,
            InterfazGrand: 1024,
            username: '',
            userInvalid: false,
            userInvalid3: false,
            userInvalid4: false,
            userInvalid2: false
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
        checkUsername() {
            if (this.username === '') {
                this.userInvalid = true
            }
            else {
                this.userInvalid = false
                if (this.username.length < 3) {
                    this.userInvalid3 = true
                } else {
                    this.userInvalid3 = false
                    if (this.username.length > 20) {
                        this.userInvalid4 = true
                    }
                    else {
                        this.userInvalid4 = false
                        axios.get('http://localhost:8000/login/', {
                            params: {
                                username: this.username
                            }
                        })
                            .then(res => {
                                const data = res.data;
                                for (const obj of data) {
                                    if (obj.username === this.username) {//bloquea si ya existe
                                        this.userInvalid2 = true;
                                        break;
                                    } else {
                                        this.userInvalid2 = false;
                                    }
                                }
                            })
                            .catch(err => {
                                console.log(err);
                            });
                    }
                }
            }
        }
    },
    watch: {
        username() {
            this.checkUsername()
        }
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
            <MenuBarra_PC v-else :contenidoProp="mostrarContenido" :PadreProp=this.padre @actualizar-contenido="actualizarContenido" />

            <main :class="{
                'my-2' : windowWidth < InterfazGrand,
                'fixed z-31' : windowWidth >= InterfazGrand,
                'bg-white dark:bg-gray w-full h-5/6 relative':true}">
                <div class="w-full h-full flex items-center justify-center flex-col">
                    <h2 :class="{
                        'mt-44': windowWidth >= 1024,
                        'mt-10': windowWidth < 1024 && windowWidth >= InterfazMedia,
                        'text-4xl': windowWidth < InterfazMedia,
                        'text-gray dark:text-white text-center text-5xl mb-5 font-serif font-bold p-5': true
                    }">
                        Registro
                    </h2>
                    <form :class="{
                        'bg-gray w-1/2 h-1/4 mb-10': windowWidth >= InterfazMedia,
                        'bg-white w-5/6 mb-4': windowWidth < InterfazMedia,
                        'dark:bg-gray shadow-md rounded px-3 pt-3 pb-4': true
                    }">
                        <div class="mb-4">
                            <label class="block text-gray dark:text-gray-light font-serif italic text-xl font-bold mb-2"
                                for="username">
                                Usuario
                            </label>
                            <div class="relative">
                                <input v-model="username"
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-base text-gray font-serif italic leading-tight focus:outline-none focus:shadow-outline dark:placeholder:text-white dark:text-gray-light dark:bg-blue-1"
                                    :class="{ 'border-red-500': userInvalid }" type="text" placeholder="Ingrese su usuario">
                                <img class="w-8 h-8 absolute top-0 right-0 mr-2 mt-1"
                                    src="./components/img/persona_icono_cel.webp" alt="">
                            </div>
                            <p v-if="userInvalid" class=" text-red-500 text-sm italic font-bold">El nombre de usuario no
                                puede estar vacio.
                            </p>
                            <p v-else-if="userInvalid3" class=" text-red-500 text-sm italic font-bold">Use un nombre de
                                usuario mas largo.
                            </p>
                            <p v-else-if="userInvalid2" class=" text-red-500 text-sm italic font-bold">Ya existe ese nombre de
                                usuario.
                            </p>
                            <p v-if="userInvalid4" class=" text-red-500 text-sm italic font-bold">Use otro nombre de
                                usuario mas corto.
                            </p>
                        </div>
                        <div class="flex items-center justify-center">
                            <!-- no funciona el pase de parametros-->
                            <router-link v-if="this.username && !this.userInvalid2 && !this.userInvalid3 && !this.userInvalid4"
                                :to="{ name: 'Registro_Correo', params: { user: this.username } }" tag="button" 
                                :class="{
                                    'mt-5': windowWidth >= InterfazMedia,
                                    'm-0': windowWidth < InterfazMedia,
                                    'bg-yellow-2 dark:text-black-0 hover:bg-blue-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline': true
                                }">
                                Continue con el correo
                            </router-link>
                            <button v-else disabled :class="{
                                'mt-0': windowWidth >= InterfazMedia,
                                'm-0': windowWidth < InterfazMedia,
                                'bg-yellow-2 dark:text-black-0 hover:bg-blue-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline': true
                            }">
                                Continue con el correo
                            </button>
                        </div>
                    </form>

                    <div :class="{
                        'mb-10': windowWidth >= InterfazMedia,
                        'mb-2': windowWidth < InterfazMedia,
                        'flex items-center w-full mb-2': true
                    }">
                        <div class="border-t border-black-0 dark:border-white  w-1/2 h-1 ml-4">&nbsp;</div>
                        <div class="px-2 pb-1 text-black-0 dark:text-white">O</div>
                        <div class="border-t border-black-0 dark:border-white  w-1/2 h-1 mr-4">&nbsp;</div>
                    </div>

                    <div class="flex flex-col items-center justify-center">
                        <button :class="{
                            'mb-6': windowWidth >= InterfazMedia,
                            'mb-3': windowWidth < InterfazMedia,
                            'inline-flex bg-white dark:bg-yellow-2  py-1 px-3 rounded focus:outline-none focus:shadow-outline shadow appearance-none border border-yellow-2 dark:border-white  w-full leading-tight focus:shadow-outline': true
                        }" type="button">
                            <img :class="{
                                'w-7 h-7': windowWidth >= InterfazMedia,
                                'w-5 h-5': windowWidth < InterfazMedia
                            }" src="./components/img/google_icon_cel.png" alt="google">
                            <p :class="{
                                'text-2xl': windowWidth >= InterfazMedia,
                                'text-xl': windowWidth < InterfazMedia,
                                'text-black-0 font-bold font-serif italic ml-2': true
                            }">Continue con Google</p>
                        </button>
                        <button :class="{
                            'mb-6': windowWidth >= InterfazMedia,
                            'mb-3': windowWidth < InterfazMedia,
                            'inline-flex bg-white dark:bg-yellow-2 py-1 px-3 rounded focus:outline-none focus:shadow-outline shadow appearance-none border border-yellow-2 dark:border-white w-full leading-tight focus:shadow-outline': true
                        }" type="button">
                            <img :class="{
                                'w-7 h-7': windowWidth >= InterfazMedia,
                                'w-5 h-5': windowWidth < InterfazMedia
                            }" src="./components/img/facebook_icon_cel.png" alt="facebook">
                            <p :class="{
                                'text-2xl': windowWidth >= InterfazMedia,
                                'text-xl': windowWidth < InterfazMedia,
                                'text-black-0 font-bold font-serif italic ml-2': true
                            }">Continue con Facebook
                            </p>
                        </button>
                        <button
                            class="inline-flex bg-white dark:bg-yellow-2 py-1 px-3  mb-3 rounded focus:outline-none focus:shadow-outline shadow appearance-none border border-yellow-2 dark:border-white w-full leading-tight focus:shadow-outline"
                            type="button">
                            <img :class="{
                                'w-7 h-7': windowWidth >= InterfazMedia,
                                'w-5 h-5': windowWidth < InterfazMedia
                            }" src="./components/img/apple_icon_cel.png" alt="apple">
                            <p :class="{
                                'text-2xl': windowWidth >= InterfazMedia,
                                'text-xl': windowWidth < InterfazMedia,
                                'text-black-0 font-bold font-serif italic ml-2': true
                            }">Continua con Apple</p>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<style scoped></style>