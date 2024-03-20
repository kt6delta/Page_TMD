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
            passwordInvalid5: false,
            showPassword1: false,
            showPassword2: false,
            confirmPassword: '',
        };
    },
    methods: {
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
        async checkEmail() {
            this.emailInvalid = this.email === '';
            if (this.emailInvalid) return false;
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.emailInvalid2 = !regex.test(this.email);
            if (this.emailInvalid2) return false;
            this.emailInvalid3 = this.email.length > 45;
            if (this.emailInvalid3) return false;
            this.emailInvalid4= await this.checkEmailExists();
            if (this.emailInvalid4) return false;
            return true;
        },
        checkEmailExists() {
            return new Promise((resolve, reject) => {
                axios.get(this.$store.state.backUrl + "/registro/mail/" + this.email)
                    .then(res => {
                        resolve(res.data);//res.data=true if exits email
                    })
                    .catch(err => {
                        console.log(err);
                        reject(err);
                    });
            });
        },
        postUser() {
            axios.post(this.$store.state.backUrl + "/registro/", {
                username: this.$route.params.user,
                password: this.password,
                email: this.email
            })
                .then(response => {
                    console.log(response);
                    this.$router.push({ name: 'Confirmacion', params: { mail: this.email } });
                })
                .catch(err => {
                    console.log(err);
                });
        },
        async Send() {
            if (await this.checkEmail() && this.checkPassword()) {
                this.postUser();
            }
        }
    },
    computed: {
        MailInbalidate() {
            return (this.emailInvalid || this.emailInvalid2 || this.emailInvalid3 || this.emailInvalid4);
        },
        PasswordInbalidate() {
            return (this.passwordInvalid || this.passwordInvalid2 || this.passwordInvalid3 || this.passwordInvalid4 || this.passwordInvalid5);
        },
        errorMessage() {
            if (this.emailInvalid) return 'La direccion de correo no puede estar vacio.';
            if (this.emailInvalid2) return 'Ingrese una direccion de correo valida.';
            if (this.emailInvalid3) return 'Porfavor ingrese una direccion de correo mas corta';
            if (this.emailInvalid4) return 'Ya tienes una cuenta creada';
            return '';
        },
        errorMessage2() {
            if (this.passwordInvalid) return 'La contraseña no puede estar vacia.';
            if (this.passwordInvalid2) return 'La contraseña debe tener al menos 8 caracteres.';
            if (this.passwordInvalid3) return 'La contraseña debe tener al menos un numero, una mayuscula y un caracter especial (!@#$%^&*+-.).';
            if (this.passwordInvalid4) return 'La contraseña tiene un maximo 25 caracteres.';
            if (this.passwordInvalid5) return 'Las contraseñas no coinciden.';
            return '';
        },
    },
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
                            class="text-lg md:text-xl xl:text-2xl block text-nonary font-Fuente_terciaria text-start">
                            Ingrese el correo electronico
                        </label>
                        <input v-model.lazy="email" type="email" placeholder="Correo electronico"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-base md:text-2xl text-gray font-serif italic leading-tight focus:outline-none focus:shadow-outline"
                            :class="{ 'border-red-500': MailInbalidate }">
                        <p v-if="MailInbalidate" class="text-red-500 text-sm italic font-bold">{{ errorMessage }}</p>
                    </div>
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
                    <div class="w-full flex items-center justify-center">
                        <button type="button" @click="Send()"
                            class="text-base w-20 h-10 md:text-lg md:w-24 md:h-12 xl:text-xl xl:w-28 xl:h-14 mt-0 bg-yellow-2 dark:text-black-0 hover:bg-blue-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            <span
                                class="h-6 md:h-8 xl:h-10 w-full flex items-center justify-center text-center">Enviar!</span>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>