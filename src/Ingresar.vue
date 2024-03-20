<script>
import axios from 'axios'
export default {
    name: "Ingresar",
    data() {
        return {
            token: this.$store.state.token,
            username: '',
            password: '',
        }
    },
    methods: {
        SendLogin() {
            axios.post(this.$store.state.backUrl + "/login/", {
                username: this.username,
                password: this.password
            })
            .then(response => {
                if (response.status === 200) {
                    this.$store.commit('setToken', response.data.token);
                    if(response.data.admin){
                         //this.$router.push({ name: 'CRUD' });
                    }else{
                        this.$router.push({ name: 'Inicio' });
                    }
                    
                }
            })
            .catch(err => {
                if (err.response && err.response.status === 401) {
                    console.log(err.response.data);
                } else {
                    console.log(err);
                }
            });
        }
    }
}
</script>
<template>
    <div class="w-full h-screen bg-white">
        <main class="bg-white w-full h-full relative ">
            <div class="h-5/6 md:h-full w-full flex items-center justify-center flex-col">
                <h2 class="sub_title text-4xl md:text-5xl text-gray mb-5 font-serif font-bold text-center ">
                    INGRESO DE USUARIO
                </h2>
                     <form @submit.prevent="SendLogin"  class="bg-white shadow-md rounded px-3 pt-3 pb-4 mb-4  ">
                    <div class="mb-4">
                        <label class="text_1 block text-gray font-serif italic text-xl font-bold mb-2 "
                            for="username">
                            Usuario
                        </label>
                        <input v-model="username"
                            class="text_1 shadow appearance-none border rounded w-full py-2 px-3 text-base text-gray font-serif italic leading-tight focus:outline-none focus:shadow-outlin "
                            id="username" type="text" placeholder="Ingrese su usuario">
                    </div>
                    <div class="mb-4">
                        <label class="text_1 block text-gray font-serif italic text-xl font-bold mb-2 "
                            for="password">
                            Contraseña
                        </label>
                        <input v-model="password"
                            class="text_1 shadow appearance-none border border-yellow-2 rounded w-full py-2 px-3 text-gray font-serif italic text-base mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password" type="password" placeholder="Ingrese su contraseña">
                            <router-link to="Recupera_Contraseña" class="text-yellow-2 text-sm italic" >      
                                ¿Olvidó su contraseña?                  
                             </router-link>

                    </div>
                    <div class="flex items-center justify-center">
                        <button
                            class="bg-yellow-2 hover:bg-blue-3  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit">
                            Iniciar Sesión
                        </button>
                    </div>
                </form>

                <div class="flex items-center w-full mb-2">
                    <div class="border-t border-black-0   w-1/2 h-1 ml-4">&nbsp;</div>
                    <div class="px-2 pb-1 text-black-0 ">O</div>
                    <div class="border-t border-black-0 w-1/2 h-1 mr-4">&nbsp;</div>
                </div>

                <div class="flex flex-col items-center justify-center">
                    <button
                        class="inline-flex bg-white py-1 px-3  mb-3 rounded focus:outline-none focus:shadow-outline shadow appearance-none border border-yellow-2 w-full leading-tight focus:shadow-outline"
                        type="button">
                        <img class="w-5 h-5" src="./components/img/google_icon_cel.png" alt="face">
                        <p class="text_1 text-black-0 font-bold font-serif italic text-xl ml-2">Continue con Google</p>
                    </button>
                    <button
                        class="inline-flex bg-white py-1 px-3  mb-3 rounded focus:outline-none focus:shadow-outline shadow appearance-none border border-yellow-2 w-full leading-tight focus:shadow-outline"
                        type="button">
                        <img class="w-4 h-6" src="./components/img/facebook_icon_cel.png" alt="face">
                        <p class="text_1 text-black-0 font-bold font-serif italic text-xl ml-2">Continue con Facebook</p>
                    </button>
                    <button
                        class="inline-flex bg-white py-1 px-3  mb-3 rounded focus:outline-none focus:shadow-outline shadow appearance-none border border-yellow-2 w-full leading-tight focus:shadow-outline"
                        type="button">
                        <img class="w-5 h-5" src="./components/img/apple_icon_cel.png" alt="face">
                        <p class="text_1 text-black-0 font-bold font-serif italic text-xl ml-2">Continua con Apple</p>
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