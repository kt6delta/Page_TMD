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
            <nav class="bg-black-0 w-full h-1/7">
                <ul class="flex justify-center items-center h-1/7">
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

        <main class="bg-white w-full h-3/4 relative flex items-center flex-col">
            <figure class="w-full h-64">
                <img src="#" alt="contactenos" title="contactenos">
            </figure>
            <p class="text-black-0 text-2xl font-serif font-bold text-center">
                Diligencie el formulario y pronto
                estaremos en contacto con usted
            </p>
            <form class="w-64 mt-6">
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray text-xl font-serif italic leading-tight focus:outline-none  focus:border-gray focus:ring-2 focus:ring-black bg-yellow mb-4"
                    id="name" type="text" placeholder="Nombre">

                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray text-xl font-serif italic leading-tight focus:outline-none focus:border-gray focus:ring-2 focus:ring-black bg-yellow mb-4"
                    id="name" type="text" placeholder="Correo">

                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray text-xl font-serif italic leading-tight focus:outline-none focus:border-gray focus:ring-2 focus:ring-black bg-yellow mb-4"
                    id="name" type="text" placeholder="Telefono">

                <div class="relative">
                    <select
                        class="block shadow appearance-none border rounded w-full py-2 px-3 text-gray text-xl font-serif italic leading-tight focus:outline-none focus:border-gray focus:ring-2 focus:ring-black bg-yellow mb-4 focus:bg-gray focus:text-white ">
                        <option>Ciudad</option>
                        <option>Bogotá</option>
                        <option>Medellín</option>
                        <option>Cali</option>
                        <option>Barranquilla</option>
                        <option>Cartagena</option>
                        <option>Bucaramanga</option>
                    </select>
                    <div class="absolute h-10 inset-y-0 right-0 flex items-center pointer-events-none">
                        <div class="border-b-2 border-gray w-52 mt-6"></div>
                        <svg class="h-8 w-8 text-gray ml-auto mb-1 mr-4" viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg">
                            <polygon points="100,100 20,100 100,20" fill="currentColor" stroke="none" />
                        </svg>
                    </div>
                </div>

                <label for="message" class="block font-medium text-gray mb-2">Mensaje:</label>
                <textarea id="message" name="message" rows="4"
                    class="form-textarea shadow appearance-none border rounded w-full py-2 px-3 text-gray text-xl font-serif italic leading-tight focus:outline-none focus:border-gray focus:ring-2 focus:ring-black bg-yellow"></textarea>

                <div class="flex items-center justify-between">
                    <button
                        class=" bg-black hover:bg-gray text-white text-xl font-serif font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
                        type="button">
                        Enviar
                    </button>

                </div>
            </form>
        </main>

        <footer class="w-full h-24">
            <nav class="bg-yellow-2">
                <ul class="flex justify-center items-center h-24">
                    <li class="ml-4 mr-4">
                        <a href="#">
                            <figure>
                                <img src="/src/img/telefono_icon.png" alt="telefono" title="telefono" class="w-14 h-14">
                            </figure>
                        </a>
                    </li>
                    <li class="ml-4 mr-4">
                        <a href="#">
                            <figure>
                                <img src="/src/img/correo_icon.png" alt="correo" title="correo" class="w-14 h-14">
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
                                <img src="/src/img/whatsap_icon.png" alt="whatsapp" title="whatsapp" class="w-14 h-14">
                            </figure>
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>

    </div>
</template>
