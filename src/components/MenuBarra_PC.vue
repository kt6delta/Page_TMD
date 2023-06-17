<template>
    <nav class="w-full h-20 shadow-lg bg-primary  fixed z-30">

        <div class="container mx-auto w-full h-20 flex flex-row justify-center">
            <div class="w-auto lg:w-1/3">
                <img src="./icons/Logo_nonary.svg" class="w-56 py-2 ml-4">
            </div>

            <div
                class="w-auto lg:w-1/3 font-Fuente_primaria text-center text-septenary text-2xl flex flex-row justify-center space-x-7 py-5 ">

                <router-link @click="mostrarContenido = false" to="/">Inicio</router-link>
                <a href="">Alquiler</a>
                <router-link @click="mostrarContenido = false" to="/Mantenimiento">Mantenimiento</router-link>

            </div>

            <div
                class="w-auto lg:w-1/3 flex flex-row justify-end font-Fuente_primaria text-center text-septenary text-2xl space-x-7 p-5">
                <a href="">
                    <img src="./icons/carrito.svg" class="w-10">
                </a>
                <a href="">Ingresar</a>
                <a class="text-nonary">Registrarse</a>
            </div>

        </div>

    </nav>
</template>
<script>
export default {
    methods: {
        ChangeContenido() {
            this.$emit('actualizar-contenido', !this.contenidoProp);
        },
    },
    props: {
        contenidoProp: {
            type: Boolean,
            required: true,
        }
    },
};
</script>