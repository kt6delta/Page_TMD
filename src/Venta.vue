<script >
export default {
    data() {
        return {
            mostrarMenu: false,
            mostrarContenido: true
        };
    },
};
</script>

<template>
    <router-view v-if="!mostrarContenido"></router-view>

    <div v-if="mostrarContenido">
        <div v-if="mostrarMenu" class="bg-yellow-2 w-full h-screen flex flex-col">
            <button @click="mostrarMenu = !mostrarMenu" class="ml-8 mt-10 w-8 h-8">
                <figure>
                    <img src="src/img/x_icon.png" alt="X" title="salir">
                </figure>
            </button>

            <figure class="mx-auto w-80 h-28">
                <img src="src/img/ico_tmd_white.svg" alt="Montacarga" title="logo" class=" w-80 h-28">
            </figure>
            <ul class="items-center text-center">
                <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray">
                    <router-link to="/" @click="mostrarContenido = !mostrarContenido">Inicio</router-link>
                </li>
                <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray">
                    <router-link to="/Ingresar" @click="mostrarContenido = !mostrarContenido">Ingresar</router-link>
                </li>
                <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray">
                    <router-link to="/Registrarse" @click="mostrarContenido = !mostrarContenido">Registrarse</router-link>
                </li>
                <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray">
                    <router-link to="/Contactenos" @click="mostrarContenido = !mostrarContenido">Contactenos</router-link>
                </li>

                <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray">
                    <router-link to="/Alquiler" @click="mostrarContenido = !mostrarContenido">Alquiler</router-link>
                </li>
                <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray">
                    <router-link to="/Mantenimiento"
                        @click="mostrarContenido = !mostrarContenido">Mantenimiento</router-link>
                </li>
                <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray">
                    <router-link to="/Venta" @click="mostrarMenu = !mostrarMenu">Venta</router-link>
                </li>
            </ul>
        </div>

        <div v-if="!mostrarMenu" class="w-full h-screen dark:bg-gray bg-white">
            <header class="h-1/7 flex flex-col">
                <nav class="bg-black-0 w-full h-full">
                    <ul class="flex justify-center items-center h-full">
                        <li class="mr-4">
                            <button @click="mostrarMenu = !mostrarMenu">
                                <figure>
                                    <img src="/src/img/menu_lineas_blancas.png" alt="menu" title="menu" class="w-10 h-1/8">
                                </figure>
                            </button>

                        </li>
                        <li>
                            <router-link to="/" tag="button">
                                <figure>
                                    <img src="/src/img/ico_tmd_white_n.svg" alt="Montacarga" title="logo"
                                        class="w-64 h-1/8">
                                </figure>
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </header>

            <main class="bg-white dark:bg-gray w-full h-5/6 relative">
                <div class="w-full h-full flex items-center justify-center flex-col">
                    <h2 class="text-yellow-2 text-4xl font-serif font-bold text-center m-4">
                        Venta
                    </h2>

                    <button class=" w-full h-36 mb-5">
                        <div class="bg-no-repeat bg-cover w-full h-full relative flex items-center justify-center"
                            id="gradiente1">
                            <h3
                                class="text-white text-3xl mix-blend-hard-light font-serif font-bold transform -skew-x-12 hover:text-yellow-2">
                                Repuestos
                            </h3>
                        </div>
                    </button>
                    <button class=" w-full h-36 mb-5">
                        <div class="bg-no-repeat bg-cover w-full h-full relative flex items-center justify-center"
                            id="gradiente2">
                            <h3
                                class="text-white text-3xl mix-blend-hard-light font-serif font-bold transform -skew-x-12 hover:text-yellow-2">
                                Porta estibas manuales
                            </h3>
                        </div>
                    </button>
                    <button class=" w-full h-36 mb-5">
                        <div class="bg-no-repeat bg-cover w-full h-full relative flex items-center justify-center"
                            id="gradiente3">
                            <h3
                                class="text-white text-3xl mix-blend-hard-light font-serif font-bold transform -skew-x-12 hover:text-yellow-2">
                                Montacargas
                            </h3>
                        </div>
                    </button>
                </div>
                <div class="fixed bottom-2 right-1" v-show="showImage">
                    <figure class="self-center order-last">
                        <img src="/src/img/caht_icon.png" alt="chat" title="chat" class="w-14 h-14">
                    </figure>
                </div>
            </main>
        </div>
    </div>
</template>

<style scoped>
#gradiente1 {
    /*background: rgba(124,144,160,0.9);  /* fallback for old browsers */
    /*background: -webkit-linear-gradient(to top right, rgba(41,46,73,0.1), rgba(83,105,118,0.8), rgba(124,144,160,0.9)), url('img/bateria.jpeg'); /* Chrome 10-25, Safari 5.1-6 */
    background-image: linear-gradient(to top right, rgba(41, 46, 73, 0.1), rgba(83, 105, 118, 0.8), rgba(124, 144, 160, 0.9)), url('img/r1.jpg');
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

#gradiente2 {
    /*background: rgba(124,144,160,0.9);  /* fallback for old browsers */
    /*background: -webkit-linear-gradient(to top right, rgba(41,46,73,0.1), rgba(83,105,118,0.8), rgba(124,144,160,0.9)), url('img/bateria.jpeg'); /* Chrome 10-25, Safari 5.1-6 */
    background-image: linear-gradient(to top right, rgba(41, 46, 73, 0.1), rgba(83, 105, 118, 0.8), rgba(124, 144, 160, 0.9)), url('img/porta_estiba.jpg');
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

#gradiente3 {
    /*background: rgba(124,144,160,0.9);  /* fallback for old browsers */
    /*background: -webkit-linear-gradient(to top right, rgba(41,46,73,0.1), rgba(83,105,118,0.8), rgba(124,144,160,0.9)), url('img/bateria.jpeg'); /* Chrome 10-25, Safari 5.1-6 */
    background-image: linear-gradient(to top right, rgba(41, 46, 73, 0.1), rgba(83, 105, 118, 0.8), rgba(124, 144, 160, 0.9)), url('img/montacarga.jpg');
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}</style>