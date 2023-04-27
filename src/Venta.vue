<script >
export default {
    data() {
        return {
            mostrarMenu: false,
        };
    },
};
</script>

<template>
    <!--350x420-->
    <!--420x600-->

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
            <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray"><a
                    href="#">Inicio</a></li>
            <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray"><a
                    href="#">Ingresar</a></li>
            <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray"><a
                    href="#">Registrarse</a></li>
            <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray"><a
                    href="#">Contactenos</a></li>
            <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray"><a
                    href="#">Alquiler</a></li>
            <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray"><a
                    href="#">Mantenimiento</a></li>
            <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray"><a
                    href="#">Venta</a></li>
        </ul>
    </div>

    <div v-if="!mostrarMenu" class="w-full h-screen">
        <header class="h-1/7 flex flex-col">
            <nav class="bg-black-0 w-full h-full">
                <ul class="flex justify-center items-center h-full">
                    <li class="mr-4">
                        <button @click="mostrarMenu = !mostrarMenu">
                            <figure>
                                <img src="/src/img/menu_lineas.png" alt="menu" title="menu" class="w-10 h-1/8">
                            </figure>
                        </button>

                    </li>
                    <li>
                        <button>
                            <figure>
                                <img src="/src/img/ico_tmd_amarillo.svg" alt="Montacarga" title="logo" class="w-64 h-1/8">
                            </figure>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>

        <main class="bg-white w-full h-5/6 relative">
            <div class="w-full h-full flex items-center justify-center flex-col">
                <h2 class="text-yellow-2 text-4xl font-serif font-bold text-center m-4">
                    Venta
                </h2>
                <button class=" w-full h-28 mb-5">
                    <div class="bg-no-repeat bg-cover w-full h-full relative flex items-center justify-center"
                        style="background-image: linear-gradient(to top right, rgba(252,252,252,0.1), rgba(122,134,144,0.9)), url('#');">
                        <h3 class="text-white text-3xl mix-blend-hard-light font-serif font-bold transform -skew-x-12 hover:text-yellow-2">
                            Repuestos
                        </h3>
                    </div>
                </button>
                <button class=" w-full h-28 mb-5">
                    <div class="bg-no-repeat bg-cover w-full h-full relative flex items-center justify-center"
                        style="background-image: linear-gradient(to top right, rgba(252,252,252,0.1), rgba(122,134,144,0.9)), url('#');">
                        <h3 class="text-white text-3xl mix-blend-hard-light font-serif font-bold transform -skew-x-12 hover:text-yellow-2">
                            Porta estibas manuales
                        </h3>
                    </div>
                </button>
                <button class=" w-full h-28 mb-5">
                    <div class="bg-no-repeat bg-cover w-full h-full relative flex items-center justify-center"
                        style="background-image: linear-gradient(to top right, rgba(252,252,252,0.1), rgba(122,134,144,0.9)), url('#');">
                        <h3 class="text-white text-3xl mix-blend-hard-light font-serif font-bold transform -skew-x-12 hover:text-yellow-2">
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
</template>

<style scoped>
/*background: #BBD2C5;  /* fallback for old browsers */
/*background: -webkit-linear-gradient(to top, #292E49, #536976, #BBD2C5);  /* Chrome 10-25, Safari 5.1-6 */
/*background: linear-gradient(to top, #292E49, #536976, #BBD2C5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
</style>