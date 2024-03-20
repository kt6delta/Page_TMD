<template>
    <header :class="{
        'sticky top-0 z-50': isShrink,
        'flex flex-col h-[calc(100vh/7)] md:h-24 lg:h-38': !isShrink,
    }">
        <nav class="bg-black-0 w-full h-full text-yellow-2">
            <ul class="flex justify-between items-center h-full md:justify-center">
                <li class=" mr-auto ml-3 md:ml-0">
                    <router-link to="../" tag="button">
                        <figure>
                            <img src="./icons/Logo_nonary.svg" alt="Montacarga" title="logo"
                                class="w-auto h-20 md:h-15 lg:h-30">
                        </figure>
                    </router-link>
                </li>
                
                <li class="mx-auto hidden md:flex md:justify-center md:items-center md:space-x-7 md:py-5">
                    <router-link to="../Alquiler" class="menu">Alquiler</router-link>
                    <router-link to="../Mantenimiento" class="menu">Mantenimiento</router-link>
                    <router-link to="../Contacto" class="menu">Contactenos</router-link>
                </li>
                <li class="ml-auto hidden md:flex md:justify-end md:space-x-5 md:p-3 md:items-center">
                    <img src="./img/persona_icono_cel.png" class="hidden lg:block w-5">
                    <router-link to="../Ingresar" class="button-4">Ingresar</router-link>
                    <router-link to="../Registrarse" class="button-4">Registrarse</router-link>
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
            isShrink: false,
        };
    },
    methods: {
        updateMenu() {
            this.mostrarMenu = !this.mostrarMenu;
        },
        handleScroll() {
            this.isShrink = window.scrollY > 0;
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    }
};
</script>
<style scoped>
header {
    transition: height 0.3s ease;
}

ul{
font-family: Calibri;
font-size: 19px;
letter-spacing: 0px;
word-spacing: 0px;
color: #ffa200;
font-weight: bold;
text-decoration: none;
font-style: normal;
font-variant: normal;
text-transform: none;
}

.button-4 {
  appearance: none;
  background-color: #FAFBFC;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  color: #24292E;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  padding: 6px 16px;
  position: relative;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  word-wrap: break-word;
}

.button-4:hover {
  background-color: #F3F4F6;
  text-decoration: none;
  transition-duration: 0.1s;
}

.button-4:disabled {
  background-color: #FAFBFC;
  border-color: rgba(27, 31, 35, 0.15);
  color: #959DA5;
  cursor: default;
}

.button-4:active {
  background-color: #EDEFF2;
  box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
  transition: none 0s;
}

.button-4:focus {
  outline: 1px transparent;
}

.button-4:before {
  display: none;
}

.button-4:-webkit-details-marker {
  display: none;
}

.menu:hover {
  color: #F3F4F6;
  text-decoration: none;
  transition-duration: 0.1s;
}

</style>