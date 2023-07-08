<template>
    <div v-show="menuProp" class="bg-yellow-2 w-full h-screen flex flex-col">
        <button @click="OcultarMenu()" :class="{
            'w-8 h-8': windowWidth <= 375,
            'w-10 h-10': windowWidth > 375 && windowWidth < 768,
            'w-14 h-14': windowWidth >= 768,
            'absolute top-10 right-10': true
        }">
            <figure>
                <img src="./img/x_icon_cel.png" alt="X" title="salir">
            </figure>
        </button>
        <div v-if="windowWidth < 1024" class="flex items-center justify-center w-full absolute top-16">
            <img src="./img/persona_icono_cel.webp" alt="ImgPersona" title="imgUser" :class="{
                'w-28': windowWidth <= 375,
                'w-44': windowWidth > 375 && windowWidth < 768,
                'w-56': windowWidth >= 768,
                'h-auto': true
            }" />
        </div>
        <figure :class="{
            ' mt-44 w-80': windowWidth <= 375,
            'mt-56 w-96 ': windowWidth > 375 && windowWidth < 768,
            'mt-72 w-3/4': windowWidth >= 768,
            'mx-auto h-auto': true
        }">
            <img src="./icons/Logo_primary.svg" alt="Montacarga" title="logo" class="w-fit h-fit">
        </figure>
        <ul :class="{
            'text-2xl': windowWidth <= 375,
            'text-3xl': windowWidth > 375 && windowWidth < 768,
            'text-5xl': windowWidth >= 768,
            'items-center text-center text-black-0 font-serif font-bold ': true
        }">
            <li :class="{
                'py-2': windowWidth <= 375,
                'py-3': windowWidth > 375 && windowWidth < 768,
                'py-5': windowWidth >= 768,
                'transform -skew-x-12 hover:text-gray': true
            }"><router-link to="../" @click="Ubicacion('App')">Inicio</router-link></li>
            <li :class="{
                'py-2': windowWidth <= 375,
                'py-3': windowWidth > 375 && windowWidth < 768,
                'py-5': windowWidth >= 768,
                'transform -skew-x-12 hover:text-gray': true
            }"><router-link to="../Ingresar" @click="Ubicacion('Ingresar')">Ingresar</router-link></li>
            <li :class="{
                'py-2': windowWidth <= 375,
                'py-3': windowWidth > 375 && windowWidth < 768,
                'py-5': windowWidth >= 768,
                'transform -skew-x-12 hover:text-gray': true
            }"><router-link to="../Registrarse" @click="Ubicacion('Registrarse')">Registrarse</router-link></li>
            <li :class="{
                'py-2': windowWidth <= 375,
                'py-3': windowWidth > 375 && windowWidth < 768,
                'py-5': windowWidth >= 768,
                'transform -skew-x-12 hover:text-gray': true
            }"><router-link to="../Contacto" @click="Ubicacion('Contacto')">Contacto</router-link>
            </li>
            <li :class="{
                'py-2': windowWidth <= 375,
                'py-3': windowWidth > 375 && windowWidth < 768,
                'py-5': windowWidth >= 768,
                'transform -skew-x-12 hover:text-gray': true
            }"><router-link to="../Alquiler" @click="Ubicacion('Alquiler')">Alquiler</router-link></li>
            <li :class="{
                'py-2': windowWidth <= 375,
                'py-3': windowWidth > 375 && windowWidth < 768,
                'py-5': windowWidth >= 768,
                'transform -skew-x-12 hover:text-gray': true
            }"><router-link to="../Mantenimiento" @click="Ubicacion('Mantenimiento')">Mantenimiento</router-link></li>
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