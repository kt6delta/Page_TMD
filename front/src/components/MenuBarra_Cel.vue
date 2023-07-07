<template>
    <header class="h-1/7 flex flex-col">
        <nav class="bg-black-0 w-full h-full">
            <ul class="flex justify-center items-center h-full">
                <li class="mr-4">
                    <button @click="OcultarMenu">
                        <figure>
                            <img src="./img/menu_lineas_blancas_cel.png" alt="menu" title="menu" class="w-10 h-1/8">
                        </figure>
                    </button>
                </li>
                <li>
                    <router-link to="../" tag="button">
                        <figure>
                            <img src="./icons/Logo_nonary.svg" alt="Montacarga" title="logo" class="w-64 h-1/8">
                        </figure>
                    </router-link>
                </li>
                <li v-if="windowWidth >= 500">
                    <img src="./img/persona_icono_cel.png" alt="ImgPersona" title="imgUser"
                        class="w-12 h-1/8 absolute top-5 right-10">
                </li>
            </ul>
        </nav>
    </header>
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
        OcultarMenu() {
            this.$emit('actualizar-menu', !this.menuProp);
        }
    },
    props: {
        menuProp: {
            type: Boolean,
            required: true,
        }
    },
};
</script>