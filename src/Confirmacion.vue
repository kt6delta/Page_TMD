<script>
export default {
    data() {
        return {
            mail: '', //this.$route.params.mail
        };
    },
    methods: {
        actualizarMenu(nuevoValor) {
            this.mostrarMenu = nuevoValor;
        },
    }
};
</script>
<template>
    <div class="w-full h-screen dark:bg-gray bg-white">
        <main class="xl:fixed xl:z-31 md:mb-10 bg-white dark:bg-gray w-full h-3/4 relative flex items-center justify-center flex-col">
            <img src="./components/img/confirma_correo.png" alt="correoVerificacion" class="w-auto h-2/5 md:w-2/4 md:h-auto">
            <div class="w-5/6 mb-4 md:w-3/4 md:mb-10 h-2/3 dark:bg-gray bg-white shadow-md rounded px-3 pt-3 pb-4 flex items-center justify-center flex-col">
                <p class="text-xl md:text-4xl block text-gray dark:text-gray-light font-serif italic">
                    <span class="mb-2 font-bold flex items-center justify-center">confirma tu correo
                        electronico</span> Nosotros enviamos una
                    confirmacion al correo:
                    <span class="font-bold flex items-center justify-center">{{ this.$route.params.mail }}</span>
                    Si no recibiste el correo, revisa tu carpeta de spam o <router-link to="/Registrarse"
                        class=" font-bold text-yellow-2">intentalo de
                        nuevo</router-link>
                </p>
                <router-link to="/" tag="button" class="mt-0 md:text-3xl md:mt-16 dark:text-gray-light bg-yellow-2 hover:bg-blue-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Regresar
                </router-link>
            </div>
        </main>
    </div>
</template>
