<template>
    <div v-show="menuProp" class="bg-yellow-2 w-full h-screen flex flex-col">
        <button @click="OcultarMenu()" class="w-8 h-8 absolute top-10 right-10">
            <figure>
                <img src="./img/x_icon_cel.png" alt="X" title="salir">
            </figure>
        </button>
        <div v-if="windowWidth < 500" class="flex items-center justify-center w-full absolute top-16">
            <img src="./img/persona_icono_cel.webp" alt="ImgPersona" title="imgUser" class="w-24 h-auto" />
        </div>
        <figure :class="{
            ' mt-40': windowWidth < 500,
            'mt-20': windowWidth > 500,
            'mx-auto w-80 h-28': true
        }">
            <img src="./icons/Logo_primary.svg" alt="Montacarga" title="logo" class=" w-80 h-28">
        </figure>
        <ul class="items-center text-center">
            <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray"><router-link
                    to="../" @click="Ubicacion('App')">Inicio</router-link></li>
            <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray"><router-link
                    to="../Ingresar" @click="Ubicacion('Ingresar')">Ingresar</router-link></li>
            <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray"><router-link
                    to="../Registrarse" @click="Ubicacion('Registrarse')">Registrarse</router-link></li>
            <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray"><router-link
                    to="../Contacto" @click="Ubicacion('Contacto')">Contacto</router-link>
            </li>
            <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray"><router-link
                    to="../Alquiler" @click="Ubicacion('Alquiler')">Alquiler</router-link></li>
            <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray"><router-link
                    to="../Mantenimiento" @click="Ubicacion('Mantenimiento')">Mantenimiento</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            windowWidth: window.innerWidth
        };
    },
    mounted() {
        window.addEventListener('resize', this.handleResize)
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
        },
        Ubicacion(texto) {
            if (texto === this.PadreProp) {
                this.OcultarMenu();
            } else {
                this.ChangeContenido();
            }
        },
        ChangeContenido() {
            this.$emit('actualizar-contenido', !this.contenidoProp);
        },
        OcultarMenu() {
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
        PadreProp: {
            type: String,
            required: true,
        },
    },
};
</script>