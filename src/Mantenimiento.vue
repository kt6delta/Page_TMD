<script >
export default {
    data() {
        return {
            mostrarMenu: false,
            showImage: false
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            this.showImage = window.scrollY < window.innerHeight
        }
    }
};
</script>

<template>
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

    <div v-if="!mostrarMenu">
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

        <main class="bg-white w-full h-3/4 relative">
            <div class="flex items-center flex-col">
                <figure class="w-full h-1/6">
                    <img src="/src/img/frente-TMD.jpeg" alt="Mecanico_Reparando" title="Mantenimiento">
                </figure>
                <p class="text-black-0 text-2xl font-serif font-bold text-center mr-4 ml-4 mt-4">
                    Más que un servicio creamos un sistema general de rendimiento para sus equipos.
                </p>
                <h2 class="text-yellow-2 text-3xl font-serif text-center mx-4 mt-4 mb-1">
                    Montacargas
                </h2>
                <p class="text-gray text-xl font-serif text-center mx-2 mb-4">
                    <span class="transform -skew-x-12 inline-block"> Programas de capacitación que aseguran el rendimiento
                        del equipo y del colaborador,</span>
                    <span class="transform -skew-x-12 inline-block">gracias al uso seguro de los equipos y de las
                        baterías.</span>
                </p>
                <ol class="list-disc text-gray text-xl font-serif text-center mx-2 mb-4 ">
                    <li>
                        <span class="transform -skew-x-12 inline-block">Programas de mantenimiento específico</span>
                        <br><span class="transform -skew-x-12 inline-block">para sus
                            necesidades individuales.</span>
                    </li>
                    <li>
                        <span class="transform -skew-x-12 inline-block">Importación y venta de repuestos.</span>
                    </li>
                </ol>
                <figure class="w-full h-1/6">
                    <img src="/src/img/frente-TMD.jpeg" alt="montacarga_Jungheinrich" title="montacarga_Jungheinrich">
                </figure>
                <h2 class="text-yellow-2 text-3xl font-serif text-center mx-4 mt-4 mb-1">
                    Servicio técnico especialistas en Jungheinrich
                </h2>
                <p class="text-gray text-xl font-serif text-center mx-1 mb-4">
                    <span class="transform -skew-x-12 inline-block">Apoyamos a nuestros clientes para mantener sus equipos
                        100% operativos, seguros y</span>
                    <span class="transform -skew-x-12 inline-block">confiables, asegurándoles respaldo y confiabilidad en la
                        actividad de los mismos.</span>
                </p>
                <figure class="w-full h-1/6">
                    <img src="/src/img/frente-TMD.jpeg" alt="portaestibas" title="portaestibas">
                </figure>
                <h2 class="text-yellow-2 text-3xl font-serif text-center mx-4 mt-4 mb-1">
                    Servicio técnico portaestibas
                </h2>
                <p class="text-gray text-xl font-serif text-center mx-1 mb-4">
                    <span class="transform -skew-x-12 inline-block">Contamos con dos tipos de mantenimiento
                        preventivo-correctivo y para que su operación</span>
                    <span class="transform -skew-x-12 inline-block">no se vea afectada prestamos nuestros portaestibas por
                        el tiempo que demore la refracción</span>
                </p>
            </div>
            <div class="fixed bottom-2 right-1" v-show="showImage">
                <figure class="self-center order-last">
                    <img src="/src/img/caht_icon.png" alt="chat" title="chat" class="w-14 h-14">
                </figure>
            </div>
        </main>

        <footer class="w-full h-24">
            <nav class="bg-yellow-2">
                <ul class="flex justify-center items-center h-24">
                    <li class="ml-4 mr-4">
                        <a href="#">
                            <figure>
                                <img src="/src/img/telefono_icon.png" alt="telefono" title="3244298326" class="w-14 h-14">
                            </figure>
                        </a>
                    </li>
                    <li class="ml-4 mr-4">
                        <a href="#">
                            <figure>
                                <img src="/src/img/correo_icon.png" alt="correo" title="gestion@tecnimontacargasdual.com"
                                    class="w-14 h-14">
                            </figure>
                        </a>
                    </li>
                    <li class="ml-4 mr-4">
                        <a href="#">
                            <figure>
                                <img src="/src/img/facebook_icon.png" alt="facebook" title="facebook" class="w-12 h-14">
                            </figure>
                        </a>
                    </li>
                    <li class="ml-4 mr-4">
                        <a href="#">
                            <figure>
                                <img src="/src/img/whatsap_icon.png" alt="whatsapp" title="(+57) 3168770708"
                                    class="w-14 h-14">
                            </figure>
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>

</div></template>