<template>
    <div class="flex items-center justify-center h-4/5 bg-gray-200 bg-white">
        <form @submit.prevent="Send" class="p-8">
            <img src="./components/img/forgot_password.png" alt="forgot_password" class="w-1/2 mx-auto mb-5">
            <div class="bg-gray-light shadow-lg p-5 rounded-xl">
                <h2 class="text-4xl md:text-5xl text-gray mb-5 font-serif font-bold text-center">Restablecimiento de
                    Contraseña</h2>
                <div class="mb-4 mx-auto w-2/3">
                    <p
                        class="text-center tlist-disc list-outside font-Fuente_primaria text-black-1 text-lg md:text-xl xl:text-2xl space-y-2">
                        Si has olvidado tu contraseña escribe el correo asociado a la cuenta y te enviaremos
                        un condigo de recuperacion.
                    </p>
                </div>
                <div class="mb-4 text-center md:flex md:items-center md:justify-center">
                    <label class="block text-gray font-serif italic font-bold text-xl mr-0 md:mr-5 mb-1" for="email">
                        Correo electrónico
                    </label>
                    <input v-model="email"
                        class="shadow appearance-none border rounded w-4/5 md:w-1/2 py-2 px-3 text-base text-gray font-serif italic leading-tight focus:outline-none focus:shadow-outlin"
                        id="email" type="email" placeholder="Ingrese su correo electrónico">
                </div>
                <div class="flex items-center justify-center">
                    <button
                        class="bg-yellow-2 hover:bg-blue text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
    name: "Recupera_Contraseña.vue",
    data() {
        return {
            email: '',
        }
    },
    methods: {
        Send() {
            axios.post(this.$store.state.backUrl + "/recuperar/", {
                email: this.email,
            })
                .then(response => {
                    let temp = response.data;
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
}
</script>