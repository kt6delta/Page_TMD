<template>
    <div class="bg-yellow-2 w-full h-full absolute inset-0 z-50 flex flex-col">
        <button @click="OcultarMenu()" class="w-8 h-8 absolute top-10 right-10">
            <figure>
                <img src="./img/x_icon_cel.png" alt="X" title="salir">
            </figure>
        </button>
        <div class="flex items-center justify-center w-full absolute top-16">
            <img src="./img/persona_icono_cel.webp" alt="ImgPersona" title="imgUser" class="w-28 h-auto" />
        </div>
        <figure class="mt-44 w-80 mx-auto h-auto">
            <img src="./icons/Logo_primary.svg" alt="Montacarga" title="logo" class="w-fit h-fit">
        </figure>
        <ul class="text-2xl items-center text-center text-black-0 font-serif font-bold">
            <li @click="OcultarMenu()" class="py-2 transform -skew-x-12 hover:text-gray"><router-link to="../">Inicio</router-link></li>
            <li @click="OcultarMenu()" class="py-2 transform -skew-x-12 hover:text-gray"><router-link to="../Ingresar">Ingresar</router-link></li>
            <li @click="OcultarMenu()" class="py-2 transform -skew-x-12 hover:text-gray"><router-link to="../Registrarse">Registrarse</router-link></li>
            <li @click="OcultarMenu()" class="py-2 transform -skew-x-12 hover:text-gray"><router-link to="../Contacto">Contacto</router-link></li>
            <li @click="OcultarMenu()" class="py-2 transform -skew-x-12 hover:text-gray"><router-link to="../Alquiler">Alquiler</router-link></li>
            <li @click="OcultarMenu()" class="py-2 transform -skew-x-12 hover:text-gray"><router-link to="../Mantenimiento">Mantenimiento</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    methods: {
        OcultarMenu() {
            this.$emit('hide-menu');
        }
    },
};
</script>