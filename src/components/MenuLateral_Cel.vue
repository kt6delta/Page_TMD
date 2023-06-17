<template>
    <div v-if="menuProp" class="bg-yellow-2 w-full h-screen flex flex-col">
        <button @click="menuProp = !menuProp" class="ml-8 mt-10 w-8 h-8">
            <figure>
                <img src="./img/x_icon_cel.png" alt="X" title="salir">
            </figure>
        </button>
        <figure class="mx-auto w-80 h-28">
            <img src="./icons/Logo_white.svg" alt="Montacarga" title="logo" class=" w-80 h-28">
        </figure>
        <ul class="items-center text-center">
            <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray"><router-link
                    to="../App" @click="OcultarMenu">Inicio</router-link></li>
            <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray"><router-link
                    to="../Ingresar" @click="ChangeContenido">Ingresar</router-link></li>
            <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray"><router-link
                    to="../Registrarse" @click="ChangeContenido">Registrarse</router-link></li>
            <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray"><router-link
                    to="../Contacto" @click="ChangeContenido">Contacto</router-link>
            </li>
            <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray"><router-link
                    to="../Alquiler" @click="ChangeContenido">Alquiler</router-link></li>
            <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray"><router-link
                    to="../Mantenimiento" @click="ChangeContenido">Mantenimiento</router-link></li>
            <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray"><router-link
                    to="../Venta" @click="ChangeContenido">Venta</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
    return {
        texto: ""
    };
  },
    methods: {
        ChangeContenido() {
            this.$emit('actualizar-contenido', !this.contenidoProp);
        },
        OcultarMenu(){
            this.$emit('actualizar-menu', !this.menuProp);
        }
    },
    props: {
        menuProp: {
            type: Boolean,
            required: true,
        },
        contenidoProp: {
            type: Boolean,
            required: true,
        },
    },
};
</script>