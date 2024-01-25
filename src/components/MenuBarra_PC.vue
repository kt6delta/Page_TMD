<template>
    <nav class="w-full h-1/7 shadow-lg bg-primary fixed z-30">

        <div class="container mx-auto w-full h-20 flex flex-row justify-center">
            <div class="w-auto lg:w-1/3">
                <img src="./icons/Logo_nonary.svg" class="w-56 py-2 ml-4">
            </div>

            <div
                class="w-auto lg:w-1/3 font-Fuente_primaria text-center text-septenary text-2xl flex flex-row justify-center space-x-7 py-5 ">

                <router-link to="../">Inicio</router-link>
                <router-link to="../Alquiler">Alquiler</router-link>
                <router-link to="../Mantenimiento">Mantenimiento</router-link>

            </div>

            <div
                class="ml-10 w-auto lg:w-1/3 flex flex-row justify-end font-Fuente_primaria text-center text-septenary text-2xl space-x-7 p-5">
                <img src="./img/persona_icono_cel.png" class="w-10 ">
                <router-link to="../Ingresar">Ingresar</router-link>
                <router-link to="../Registrarse" class="text-nonary">Registrarse</router-link>
            </div>

        </div>

    </nav>
</template>
<script>
export default {
    methods: {

    },
    props: {

    },
};
</script>