<script>
import axios from 'axios';
export default {
    data() {
        return {
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
    methods: {
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
                        axios.get('http://localhost:8000/login/users', {
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
            axios.post('http://localhost:8000/login/users/', data)
                .then(response => {
                    console.log(response.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }, // sin provar encio de correos
        async sendVerificationCode() {
            const headers = {
                'Authorization': `Basic a3Q2ZGVsdGE6YmFsbGVuYTEy`
            };
            const data = {
                subject: 'Confirmacion de correo',
                message: 'codigo de confirmacion: 123456',
                destino: this.email
            };
            try {
                await axios.post('http://localhost:8000/login/send_email/', data, { headers });
                console.log('Correo enviado exitosamente');
            } catch (error) {
                console.error('Error al enviar el correo', error);
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
    <div class="w-full h-1/2 bg-gray-light flex items-center">
        <main class="w-full h-auto bg-nonary flex justify-center items-center md:align-middle">
            <div class="mt-9 w-11/12 md:w-2/3 lg:w-1/2 mb-9 bg-primary rounded-md shadow-xl md:mt-32 md:mb-14">
                <div class="px-5 py-5 md:px-10 md:py-10 xl:px-20 xl:py-14 w-full h-full flex flex-col space-y-5">
                    <div>
                        <h1
                            class="text-4xl p-1 md:text-5xl md:p-2 xl:text-5xl xl:p-5 text-center text-nonary font-Fuente_secundaria">
                            Registro
                        </h1>
                    </div>
                    <div class="xl:text-2xl">
                        <label for="Correo"
                            class="text-lg md:text-xl xl:text-2xl block text-nonary font-Fuente_terciaria text-start">Ingrese
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
                    <div class="xl:text-2xl">
                        <label for="Contraseña"
                            class="text-lg md:text-xl xl:text-2xl block text-nonary font-Fuente_terciaria text-start">Ingrese
                            una
                            contraseña</label>
                        <div class="relative h-10">
                            <input
                                class="w-full bg-white mt-2 h-10 appearance-none rounded shadow-lg focus:outline-none focus:bg-white"
                                placeholder="Contraseña" v-model="password" :type="showPassword1 ? 'text' : 'password'"
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
                    <div class="xl:text-2xl">
                        <label for="Contraseña"
                            class="text-lg md:text-xl xl:text-2xl block text-nonary font-Fuente_terciaria text-start">Confirmar
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
                            @click="sendVerificationCode()"
                            class="text-base w-20 h-10 md:text-lg md:w-24 md:h-12 xl:text-xl xl:w-28 xl:h-14 mt-0 bg-yellow-2 dark:text-black-0 hover:bg-blue-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            <span
                                class="h-6 md:h-8 xl:h-10 w-full flex items-center justify-center text-center">Enviar!</span>
                        </router-link>

                        <button disabled v-else
                            class="w-28 h-14 mt-0 bg-yellow-2 dark:text-black-0 hover:bg-blue-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            <span
                                class="h-6 md:h-8 xl:h-10 w-full flex items-center justify-center text-center">Enviar!</span>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>