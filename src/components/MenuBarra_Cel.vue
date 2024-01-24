<template>
    <header :class="{
        'h-1/7': windowWidth <= 375,
        'h-28': windowWidth > 375 && windowWidth < 768,
        'h-38': windowWidth >= 768,
        'flex flex-col': true
    }">
        <nav class="bg-black-0 w-full h-full">
            <ul class="flex justify-center items-center h-full">
                <li :class="{
                    'mr-3': windowWidth <= 375,
                    'mr-4 ': windowWidth > 375 && windowWidth < 768,
                    'mr-12': windowWidth >= 768
                }">
                    <button @click="OcultarMenu">
                        <figure>
                            <img src="./img/menu_lineas_blancas_cel.png" alt="menu" title="menu" :class="{
                                'w-auto h-7': windowWidth <= 375,
                                'w-auto h-8': windowWidth > 375 && windowWidth < 768,
                                'w-auto h-14': windowWidth >= 768
                            }">
                        </figure>
                    </button>
                </li>
                <li>
                    <router-link to="../" tag="button">
                        <figure>
                            <img src="./icons/Logo_nonary.svg" alt="Montacarga" title="logo" :class="{
                                'w-auto h-20': windowWidth <= 375,
                                'w-auto h-24': windowWidth > 375 && windowWidth < 768,
                                'w-auto h-40': windowWidth >= 768
                            }">
                        </figure>
                    </router-link>
                </li>
                <li v-if="windowWidth >= 1024">
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