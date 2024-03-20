<template>
    <div class="flex items-center justify-center h-4/5 bg-gray-200 bg-white">
        <form @submit.prevent="Send" class="p-8">
            <img src="./components/img/forgot_password.png" alt="forgot_password" class="w-1/2 mx-auto mb-5">
            <h2 class="text-4xl md:text-5xl text-gray mb-5 font-serif font-bold text-center">
                Restablece Tu Contraseña
            </h2>
            <div class="bg-gray-light shadow-lg p-5 rounded-xl">
                <div class="xl:text-2xl">
                        <label for="Contraseña"
                            class="text-lg md:text-xl xl:text-2xl block text-nonary font-Fuente_terciaria text-start">Ingrese
                            una
                            contraseña</label>
                        <div :class="{
                            'h-10': !PasswordInbalidate,
                            'h-16': PasswordInbalidate,
                            'relative': true
                        }">
                            <input v-model.lazy="password" :type="showPassword1 ? 'text' : 'password'"
                                placeholder="Contraseña"
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-base md:text-2xl text-gray font-serif italic leading-tight focus:outline-none focus:shadow-outline"
                                :class="{ 'border-red-500': PasswordInbalidate }">
                            <p v-if="PasswordInbalidate" class=" text-red-500 text-sm italic font-bold">{{ errorMessage2
                                }}</p>
                            <button @click="showPassword1 = !showPassword1" class="ml-2 focus:outline-none ">
                                <img :class="{
                            'mt-3': showPassword1,
                            'mt-4': !showPassword1,
                            'w-10 h-auto absolute top-0 right-0 mr-2': true
                        }" :src="showPassword1 ? '/src/components/img/ojos_cerrado.png' : '/src/components/img/ojo_abierto.png'"
                                    alt="mostrar_Contraseña">
                            </button>
                        </div>
                    </div>
                    <div class="xl:text-2xl">
                        <label for="Contraseña"
                            class="text-lg md:text-xl xl:text-2xl block text-nonary font-Fuente_terciaria text-start">Confirmar
                            contraseña</label>
                        <div class="relative">
                            <input v-model.lazy="confirmPassword" :type="showPassword2 ? 'text' : 'password'"
                                placeholder="confirmar Contraseña"
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-base md:text-2xl text-gray font-serif italic leading-tight focus:outline-none focus:shadow-outline"
                                :class="{ 'border-red-500': PasswordInbalidate }">
                            <button @click="showPassword2 = !showPassword2" class="ml-2 focus:outline-none ">
                                <img :class="{
                            'mt-3': showPassword2,
                            'mt-4': !showPassword2,
                            'w-10 h-auto absolute top-0 right-0 mr-2': true
                        }" :src="showPassword2 ? '/src/components/img/ojos_cerrado.png' : '/src/components/img/ojo_abierto.png'"
                                    alt="mostrar_Contraseña">
                            </button>
                        </div>
                    </div>
                <div class="flex items-center justify-center">
                    <button
                        class="md:text-xl m-0 md:mt-5 bg-yellow-2 text-black-0 hover:bg-blue-3 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Enviar
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "Recuperar.vue",
    data() {
        return {
            password: '',
            passwordInvalid: false,
            passwordInvalid2: false,
            passwordInvalid3: false,
            passwordInvalid4: false,
            passwordInvalid5: false,
            showPassword1: false,
            showPassword2: false,
            confirmPassword: '',
        }
    },
    methods: {
        Send() {
            axios.post(this.$store.state.backUrl + "/recuperar/" + this.this.$route.params.username, {
                password: this.password
            })
                .then(response => {
                    let temp = response.data;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        checkPassword() {
            this.passwordInvalid = this.password === '';
            if (this.passwordInvalid) return false;
            this.passwordInvalid2 = this.password.length < 8;
            if (this.passwordInvalid2) return false;
            const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*+-.]).+$/
            this.passwordInvalid3 = !regex.test(this.password);
            if (this.passwordInvalid3) return false;
            this.passwordInvalid4 = this.password.length > 25;
            if (this.passwordInvalid4) return false;
            this.passwordInvalid5 = (this.confirmPassword !== this.password);
            if (this.passwordInvalid5) return false;
            return true;
        },
    },
    computed: {
        PasswordInbalidate() {
            return (this.passwordInvalid || this.passwordInvalid2 || this.passwordInvalid3 || this.passwordInvalid4 || this.passwordInvalid5);
        },
        errorMessage2() {
            if (this.passwordInvalid) return 'La contraseña no puede estar vacia.';
            if (this.passwordInvalid2) return 'La contraseña debe tener al menos 8 caracteres.';
            if (this.passwordInvalid3) return 'La contraseña debe tener al menos un numero, una mayuscula y un caracter especial (!@#$%^&*+-.).';
            if (this.passwordInvalid4) return 'La contraseña tiene un maximo 25 caracteres.';
            if (this.passwordInvalid5) return 'Las contraseñas no coinciden.';
            return '';
        },
    }
}
</script>