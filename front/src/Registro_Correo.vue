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
            padre: 'Registrarse',
            email: '',
            emailInvalid: false,
            emailInvalid2: false,
            emailInvalid3: false,
            emailInvalid4: false,
            password: '',
            passwordInvalid: false,
            passwordInvalid2: false,
            passwordInvalid3: false,
            passwordInvalid4: false,
            showPassword1: false,
            showPassword2: false,
            confirmPassword: '',
            user: '',
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
        checkPassword() {
            if (this.password === '') {
                this.passwordInvalid = true
            } else {
                this.passwordInvalid = false
                if (this.password.length < 8) {
                    this.passwordInvalid2 = true
                } else {
                    this.passwordInvalid2 = false
                    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*+-.]).+$/
                    if (!regex.test(this.password)) {
                        this.passwordInvalid3 = true
                    } else {
                        this.passwordInvalid3 = false
                        if (this.password.length > 25) {
                            this.passwordInvalid4 = true
                        } else {
                            this.passwordInvalid4 = false
                        }
                    }
                }
            }
        },
        checkEmail() {
            if (this.email === '') {
                this.emailInvalid = true
            } else {
                this.emailInvalid = false
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if (!regex.test(this.email)) {
                    this.emailInvalid2 = true
                } else {
                    this.emailInvalid2 = false
                    if (this.email.length > 45) {
                        this.emailInvalid3 = true
                    } else {
                        this.emailInvalid3 = false
                        axios.get('http://localhost:8000/login/', {
                            params: {
                                email: this.email
                            }
                        })
                            .then(res => {
                                const data = res.data;
                                for (const obj of data) {
                                    if (obj.email === this.email) {//bloquea si ya existe
                                        this.emailInvalid4 = true;
                                        break;
                                    } else {
                                        this.emailInvalid4 = false;
                                    }
                                }
                            })
                            .catch(err => {
                                console.log(err);
                            });
                    }
                }
            }
        },
        postUser() {
            this.user = this.$route.params.user
            const data = {
                username: this.user,
                password: this.password,
                email: this.email,
                is_active: false,
                is_superuser: false,
                is_staff: false
            };
            axios.post('http://localhost:8000/login/', data)
                .then(response => {
                    console.log(response.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }, // sin provar encio de correos
        async sendVerificationCode() {
            try {
                const response = await axios.post('http://localhost:8000/login/', {
                    user_id: 1,  // ID del usuario al que quieres enviar el correo
                });
                console.log(response.data.message);
            } catch (error) {
                console.error(error);
            }
        },
    },
    watch: {
        email() {
            this.checkEmail()
        },
        password() {
            this.checkPassword()
        }
    }
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
            <MenuBarra_PC v-else :contenidoProp="mostrarContenido" :PadreProp=this.padre
                @actualizar-contenido="actualizarContenido" />
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
                                <input
                                    class="w-full bg-white mt-2 h-10 appearance-none rounded shadow-lg focus:outline-none focus:bg-white"
                                    type="email" placeholder="Correo electronico" v-model="email"
                                    :class="{ 'border-red-500': emailInvalid2 }">
                                <p v-if="emailInvalid" class="text-red-500 text-sm italic font-bold">La direccion de correo
                                    no puede estar vacio.</p>
                                <p v-else-if="emailInvalid4" class="text-red-500 text-sm italic font-bold">Ya tienes una
                                    cuenta creada</p>
                                <p v-else-if="emailInvalid2" class="text-red-500 text-sm italic font-bold">Ingrese
                                    una direccion de correo valida.</p>
                                <p v-if="emailInvalid3" class="text-red-500 text-sm italic font-bold">Porfavor ingrese
                                    una direccion de correo mas corta</p>
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
                                <div class="relative">
                                    <input
                                        class="w-full bg-white mt-2 h-10 appearance-none rounded shadow-lg focus:outline-none focus:bg-white"
                                        placeholder="Contraseña" v-model="password"
                                        :type="showPassword1 ? 'text' : 'password'"
                                        :class="{ 'border-red-500': password.length < 8 }">
                                    <button @click="showPassword1 = !showPassword1" class="ml-2 focus:outline-none ">
                                        <img :class="{
                                            'mt-3': showPassword1,
                                            'mt-4': !showPassword1,
                                            'w-10 h-auto absolute top-0 right-0 mr-2': true
                                        }"
                                            :src="showPassword1 ? '/src/components/img/ojos_cerrado.png' : '/src/components/img/ojo_abierto.png'"
                                            alt="mostrar_Contraseña">
                                    </button>
                                </div>
                                <p v-if="passwordInvalid" class=" text-red-500 text-sm italic font-bold">La contraseña no
                                    puede estar vacia.
                                </p>
                                <p v-else-if="passwordInvalid2" class=" text-red-500 text-sm italic font-bold">La contraseña
                                    debe tener al menos 8 caracteres.
                                </p>
                                <p v-else-if="passwordInvalid3" class=" text-red-500 text-sm italic font-bold">La contraseña
                                    debe tener al menos un numero, una mayuscula y un caracter especial (!@#$%^&*+-.).
                                </p>
                                <p v-if="passwordInvalid4" class=" text-red-500 text-sm italic font-bold">La contraseña
                                    tiene un maximo 25 caracteres.
                                </p>
                            </div>
                            <div class="mb-5">
                                <label for="Contraseña" :class="{
                                    'text-2xl': windowWidth >= 1024,
                                    'text-xl': windowWidth < 1024 && windowWidth >= 768,
                                    'text-lg': windowWidth < 768,
                                    'block text-nonary font-Fuente_terciaria text-start': true
                                }">Confirmar
                                    contraseña</label>
                                <div class="relative">
                                    <input
                                        class="w-full bg-white mt-2 h-10 appearance-none rounded shadow-lg focus:outline-none focus:bg-white"
                                        placeholder="confirmar Contraseña" v-model="confirmPassword"
                                        :type="showPassword2 ? 'text' : 'password'"
                                        :class="{ 'border-red-500': password.length < 8 }">
                                    <button @click="showPassword2 = !showPassword2" class="ml-2 focus:outline-none">
                                        <img :class="{
                                            'mt-3': showPassword2,
                                            'mt-4': !showPassword2,
                                            'w-10 h-auto absolute top-0 right-0 mr-2': true
                                        }"
                                            :src="showPassword2 ? '/src/components/img/ojos_cerrado.png' : '/src/components/img/ojo_abierto.png'"
                                            alt="mostrar_Contraseña">
                                    </button>
                                </div>
                                <p v-if="confirmPassword !== password" class=" text-red-500 text-sm italic font-bold">
                                    Las contraseñas no coinciden.</p>
                            </div>
                            <div class="w-full flex items-center justify-center">
                                <router-link
                                    v-if="!passwordInvalid && !passwordInvalid2 && !passwordInvalid3 && !passwordInvalid4 && this.email && !emailInvalid2 && !emailInvalid3 && !emailInvalid4 && !(confirmPassword !== password)"
                                    :to="{ name: 'Confirmacion', params: { mail: this.email } }" tag="button"
                                    @click="postUser()" :class="{
                                        'text-xl w-28 h-14': windowWidth >= 1024,
                                        'text-lg w-24 h-12': windowWidth < 1024 && windowWidth >= 768,
                                        'text-base w-20 h-10': windowWidth < 768,
                                        'mt-0 bg-yellow-2 dark:text-black-0 hover:bg-blue-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline': true
                                    }">
                                    <span :class="{
                                        'h-10': windowWidth >= 1024,
                                        'h-8': windowWidth < 1024 && windowWidth >= 768,
                                        'h-6': windowWidth < 768,
                                        'w-full flex items-center justify-center text-center': true
                                    }">Enviar!</span>
                                </router-link>
                               
                                <button disabled v-else
                                    class="w-28 h-14 mt-0 bg-yellow-2 dark:text-black-0 hover:bg-blue-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    <span :class="{
                                        'h-10': windowWidth >= 1024,
                                        'h-8': windowWidth < 1024 && windowWidth >= 768,
                                        'h-6': windowWidth < 768,
                                        'w-full flex items-center justify-center text-center': true
                                    }">Enviar!</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- fqa y enlaces extra -->
            </main>
            <Footer_PC v-if="windowWidth >= 768" />
            <Footer_Cel v-else />
        </div>
    </div>
</template>