<script>
import axios from 'axios';
export default {
    components: {
    },
    data() {
        return {
            username: '',
            userInvalid: false,
            userInvalid3: false,
            userInvalid4: false,
            userInvalid2: false
        };
    },
    methods: {
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
                        axios.get('http://localhost:8000/login/users', {
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
    <div class="w-full h-screen dark:bg-gray bg-white">
        <main class="my-2 md:fixed md:z-31 bg-white dark:bg-gray w-full h-5/6 relative">
            <div class="w-full h-full flex items-center justify-center flex-col">
                <h2
                    class="mt-10 text-4xl text-gray dark:text-white text-center md:text-5xl mb-5 font-serif font-bold p-5 md:mt-44">
                    Registro
                </h2>
                <form
                    class="bg-white w-5/6 mb-4 dark:bg-gray shadow-md rounded px-3 pt-3 pb-4 md:bg-gray md:w-1/2 md:h-1/4 md:mb-10">
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
                        <p v-else-if="userInvalid2" class=" text-red-500 text-sm italic font-bold">Ya existe ese nombre
                            de usuario.
                        </p>
                        <p v-if="userInvalid4" class=" text-red-500 text-sm italic font-bold">Use otro nombre de
                            usuario mas corto.
                        </p>
                    </div>
                    <div class="flex items-center justify-center">
                        <router-link v-if="this.username && !this.userInvalid2 && !this.userInvalid3 && !this.userInvalid4"
                            :to="{ name: 'Registro_Correo', params: { user: this.username } }" tag="button"
                            class="m-0 md:mt-5 bg-yellow-2 dark:text-black-0 hover:bg-blue-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Continue con el correo
                        </router-link>
                        <button v-else disabled
                            class="m-0 md:mt-0 bg-yellow-2 dark:text-black-0 hover:bg-blue-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Continue con el correo
                        </button>
                    </div>
                </form>

                <div class="md:mb-10 flex items-center w-full mb-2">
                    <div class="border-t border-black-0 dark:border-white  w-1/2 h-1 ml-4">&nbsp;</div>
                    <div class="px-2 pb-1 text-black-0 dark:text-white">O</div>
                    <div class="border-t border-black-0 dark:border-white  w-1/2 h-1 mr-4">&nbsp;</div>
                </div>

                <div class="flex flex-col items-center justify-center">
                    <button
                        class="mb-3 md:mb-6 inline-flex bg-white dark:bg-yellow-2 py-1 px-3 rounded focus:outline-none focus:shadow-outline shadow appearance-none border border-yellow-2 dark:border-white w-full leading-tight focus:shadow-outline"
                        type="button">
                        <img class="w-5 h-5 md:w-7 md:h-7" src="./components/img/google_icon_cel.png" alt="google">
                        <p class="text-xl md:text-2xl text-black-0 font-bold font-serif italic ml-2">Continue con Google</p>
                    </button>
                    <button
                        class="mb-3 md:mb-6 inline-flex bg-white dark:bg-yellow-2 py-1 px-3 rounded focus:outline-none focus:shadow-outline shadow appearance-none border border-yellow-2 dark:border-white w-full leading-tight focus:shadow-outline"
                        type="button">
                        <img class="w-5 h-5 md:w-7 md:h-7" src="./components/img/facebook_icon_cel.png" alt="facebook">
                        <p class="text-xl md:text-2xl text-black-0 font-bold font-serif italic ml-2">Continue con Facebook
                        </p>
                    </button>
                    <button
                        class="mb-3 inline-flex bg-white dark:bg-yellow-2 py-1 px-3 rounded focus:outline-none focus:shadow-outline shadow appearance-none border border-yellow-2 dark:border-white w-full leading-tight focus:shadow-outline"
                        type="button">
                        <img class="w-5 h-5 md:w-7 md:h-7" src="./components/img/apple_icon_cel.png" alt="apple">
                        <p class="text-xl md:text-2xl text-black-0 font-bold font-serif italic ml-2">Continua con Apple</p>
                    </button>
                </div>
            </div>
        </main>
    </div>
</template>
