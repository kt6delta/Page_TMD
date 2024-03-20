<script>
import axios from 'axios';
export default {
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
        Send() {
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
                        axios.get(this.$store.state.backUrl+"/registro/user/"+this.username, {
                        })
                            .then(res => {
                                this.userInvalid2 = !(res.data); //res.data=false if exits username
                                if (!this.isButtonDisabled) {
                                    this.$router.push({ name: 'Registro_Correo', params: { user: this.username } });
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
    computed: {
        isButtonDisabled() {
            return !this.username || this.userInvalid2 || this.userInvalid3 || this.userInvalid4;
        },
        errorMessage() {
            if (this.userInvalid) return 'El nombre de usuario no puede estar vacio.';
            if (this.userInvalid3) return 'Use un nombre de usuario mas largo.';
            if (this.userInvalid2) return 'Ya existe ese nombre de usuario.';
            if (this.userInvalid4) return 'Use otro nombre de usuario mas corto.';
            return '';
        },
    },
};
</script>

<template>
    <div class="w-full h-scree bg-white">
        <main class="my-2 bg-white w-full h-5/6 md:h-screen relative">
            <div class="w-full h-full flex items-center justify-center flex-col">
                <h2 class="sub_title text-4xl md:text-5xl text-gray mb-5 bg-nonary opacity-50text-center">
                    REGISTRARSE
                </h2>
                <form style="background: #bababa;" class="bg-white w-5/6 mb-4 shadow-md  rounded px-3 pt-3 pb-4 md:bg-black-0 md:w-1/2 md:h-1/3 md:mb-10 flex flex-col justify-center">
                    <div class="mb-4">
                        <label class="text_1 block text-gray md:text-white md:text-2xl font-serif italic text-xl font-bold mb-2" for="username">
                            Usuario
                        </label>
                        <div class="relative">
                            <input v-model.lazy="username"
                                class="text_1 shadow appearance-none border rounded w-full py-2 px-3 text-base md:text-2xl text-gray font-serif italic leading-tight focus:outline-none focus:shadow-outline"
                                :class="{ 'border-red-500': errorMessage }" type="text"
                                placeholder="Ingrese su usuario">
                                <img class="w-8 h-8 absolute top-0 right-0 mr-2 mt-1"
                                src="./components/img/persona_icono_cel.webp" alt="">
                        </div>
                        <p v-if="errorMessage" class=" text-red-500 text-sm italic font-bold">{{ errorMessage }}</p>
                    </div>
                    <div class="flex items-center justify-center">
                        <button type="button" @click="Send"
                           class="md:text-xl m-0 md:mt-5 bg-yellow-2 text-black-0 hover:bg-blue-3 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Continue con el correo
                        </button>

                    </div>
                </form>

                <div class="md:mb-10 flex items-center w-full mb-2">
                    <div class="border-t border-black-0  w-1/2 h-1 ml-4">&nbsp;</div>
                    <div class="px-2 pb-1 text-black-0 ">O</div>
                    <div class="border-t border-black-0   w-1/2 h-1 mr-4">&nbsp;</div>
                </div>

                <div class="flex flex-col items-center justify-center">
                    <button
                        class="mb-3 md:mb-6 inline-flex bg-white py-1 px-3 rounded focus:outline-none focus:shadow-outline shadow appearance-none border border-yellow-2  w-full leading-tight focus:shadow-outline"
                        type="button">
                        <img class="w-5 h-5 md:w-7 md:h-7" src="./components/img/google_icon_cel.png" alt="google">
                        <p class="text_1 text-xl md:text-2xl text-black-0 font-bold font-serif italic ml-2">Continue con Google</p>
                    </button>
                    <button
                        class="mb-3 md:mb-6 inline-flex bg-white  py-1 px-3 rounded focus:outline-none focus:shadow-outline shadow appearance-none border border-yellow-2 w-full leading-tight focus:shadow-outline"
                        type="button">
                        <img class="w-5 h-5 md:w-7 md:h-7" src="./components/img/facebook_icon_cel.png" alt="facebook">
                        <p class="text_1 text-xl md:text-2xl text-black-0 font-bold font-serif italic ml-2">Continue con Facebook
                        </p>
                    </button>
                    <button
                        class="mb-3 inline-flex bg-white py-1 px-3 rounded focus:outline-none focus:shadow-outline shadow appearance-none border border-yellow-2  w-full leading-tight focus:shadow-outline"
                        type="button">
                        <img class="w-5 h-5 md:w-7 md:h-7" src="./components/img/apple_icon_cel.png" alt="apple">
                        <p class="text_1 text-xl md:text-2xl text-black-0 font-bold font-serif italic ml-2">Continua con Apple</p>
                    </button>
                </div>
            </div>
        </main>
    </div>
</template>

<style>


.sub_title {
text-align: center;
font-family: 'Ubuntu', sans-serif;
font-size: 30px;
letter-spacing: 0px;
word-spacing: 0px;
color: #ffa200;
font-weight: bold;
text-decoration: none;
font-style: normal;
font-variant: small-caps;
text-transform: none;
}

.text_1 {
  font-family: 'Josefin Sans', sans-serif;
font-size: 20px;
letter-spacing: 0px;
word-spacing: 0px;
color: black;
font-weight: normal;
text-decoration: none;
font-style: normal;
font-variant: normal;
text-transform: none;
}

.text_2 {
font-family: 'Josefin Sans', sans-serif;
font-size: 35px;
letter-spacing: 0px;
word-spacing: 0px;
color: #000000;
font-weight: bold;
text-decoration: none;
font-style: normal;
font-variant: normal;
text-transform: none;
}

.text_3 {
font-family: 'Josefin Sans', sans-serif;
font-size: 30px;
letter-spacing: 0px;
word-spacing: 0px;
color: #000000;
font-weight: normal;
text-decoration: underline;
font-style: normal;
font-variant: normal;
text-transform: none;
}
</style>