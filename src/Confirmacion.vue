<template>
    <div class="w-full h-scree bg-white">
        <main class="md:mb-10 bg-white  w-full h-3/4 relative flex items-center justify-center flex-col">
            <figure class=" flex flex-col items-center">
                <img src="./components/img/confirma_correo.png" alt="correoVerificacion" class="w-1/2 h-auto md:w-2/6 xl:w-1/6">
            </figure>
            <div
                class="w-5/6 mb-4 md:w-3/4 md:mb-10 h-2/3 bg-white shadow-md rounded px-3 pt-3 pb-4 flex items-center justify-center flex-col">
                <p class="text-xl md:text-3xl block text-gray  font-serif italic">
                    <span class="mb-2 font-bold flex items-center justify-center">confirma tu correo
                        electronico</span> Nosotros estamos enviamos una
                    confirmacion al correo:
                    <span class="font-bold flex items-center justify-center">{{ this.$route.params.mail }}</span>
                    Si no recibiste el correo, revisa tu carpeta de spam o <router-link to="/Registrarse"
                        class=" font-bold text-yellow-2">intentalo de
                        nuevo</router-link>
                </p>
                <router-link to="/" tag="button"
                    class="mt-0 md:text-2xl md:mt-14 bg-yellow-2 hover:bg-blue-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Regresar
                </router-link>
            </div>
        </main>
    </div>
</template>
