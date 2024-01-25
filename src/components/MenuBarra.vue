<template>
    <header class="flex flex-col h-[calc(100vh/7)] md:h-24 lg:h-38">
        <nav class="bg-black-0 w-full h-full text-yellow-2">
            <ul class="flex justify-between items-center h-full md:justify-center">
                <li class="ml-3 md:ml-0">
                    <router-link to="../" tag="button">
                        <figure>
                            <img src="./icons/Logo_nonary.svg" alt="Montacarga" title="logo"
                                class="w-auto h-20 md:h-15 lg:h-30">
                        </figure>
                    </router-link>
                </li>
                <li class="mr-3 md:hidden">
                    <button @click="updateMenu">
                        <figure>
                            <img src="./img/menu_lineas_blancas_cel.png" alt="menu" title="menu"
                                class="w-auto h-7 md:h-6 lg:h-14">
                        </figure>
                    </button>
                </li>
                <li class="hidden md:flex md:justify-center md:items-center md:space-x-7 md:py-5">
                    <router-link to="../Alquiler">Alquiler</router-link>
                    <router-link to="../Mantenimiento">Mantenimiento</router-link>
                    <router-link to="../Contactenos">Contactenos</router-link>
                </li>
                <li class="hidden md:flex md:justify-end md:space-x-7 md:p-5 md:items-center">
                    <img src="./img/persona_icono_cel.png" class="hidden lg:block w-10">
                    <router-link to="../Ingresar">Ingresar</router-link>
                    <router-link to="../Registrarse" class="text-nonary">Registrarse</router-link>
                </li>
            </ul>
        </nav>
    </header>
    <MenuLateral @hide-menu="updateMenu" v-show="mostrarMenu" />
</template>

<script>
import MenuLateral from './MenuLateral_Cel.vue';
export default {
    components: {
        MenuLateral
    },
    data() {
        return {
            mostrarMenu: false,
        };
    },
    methods: {
        updateMenu() {
            this.mostrarMenu = !this.mostrarMenu;
        },
    },
};
</script>