<template>
    <main class="text-black-0 bg-gray-light text-base font-Fuente_terciaria">
        <section class="md:mx-28 md:p-0 p-5">
            <div class="md:flex">
                <figure
                    class="w-1/4 h-auto md:w-28 py-2 mx-auto md:my-auto md:mx-0 md:ml-auto md:mr-5 xl:w-1/12 xl:mr-16 md:order-last">
                    <img src="./components/img/engranaje.png" alt="montacarga" title="alquiler" class="ml-12 md:ml-0">
                </figure>
                <h1 class="text-4xl mb-5 font-Fuente_primaria md:text-6xl text-black-0">SERVICIOS DE<br>ALQUILER</h1>
            </div>
            <p class="my-5 md:my-0">la solución flexible para sus necesidades de manipulación de materiales.
                Ya sea que necesite un montacargas para un proyecto a corto plazo o para complementar su flota existente, el
                alquiler es una opción económica y flexible.
            </p>
            <Carousel :autoplay="0" :wrap-around="true"><!-- 2000 -->
                <Slide v-for="fila in range" :key="fila"> <!--0-1 -->
                    <div class="carousel__item">
                        <carrusel :images="img[fila]" />
                    </div>
                </Slide>
                <template #addons>
                    <Pagination />
                    <Navigation />
                </template>
            </Carousel>
        </section>
        <section class="flex flex-col md:flex-row md:mx-28" data-aos="fade-up">
            <!-- izquierda 2 -->
            <div class="items-center flex-1 px-5 md:px-0">
                <h2 class="text-yellow-2 text-3xl font-Fuente_primaria text-center">
                    Montacargas
                </h2>
                <p class="my-5">
                    Actualmente nuestro servicio de alquiler cuenta con
                    una flota amplia de máquinas y consideramos
                    que nuestro éxito está fundamentado en la calidad de nuestros equipos,soporte técnico y asesoría
                    que
                    permite a todos
                    nuestros clientes mantener su operación logística
                    de manera continua y eficiente.
                    Nuestra experiencia, solidez y compromiso, permiten optimizar los recursos, aumentar la
                    eficiencia y
                    disminuir los costos operativos de nuestros clientes.
                </p>
            </div>
            <!-- derecha 2-->
            <div class="bg-black-0 md:bg-gray-light flex-1 items-center  md:ml-5 p-5 md:p-0">
                <div class="block md:hidden">
                    <figure class="w-4/5 h-auto items-center mx-auto">
                        <img src="./components/img/bateria1.png" alt="bateria de traccion" title="alquiler">
                    </figure>
                </div>
                <div class="items-center flex-1">
                    <h2 class="text-yellow-2 text-3xl font-Fuente_primaria text-center mx-4 mt-4 mb-1 ">
                        Baterias de Traccion
                    </h2>
                    <h3 class="mx-5 text-xl font-bold text-center text-white md:text-black-0"> ¿Largas jornadas de
                        trabajo y sus baterías no
                        las
                        soportan?</h3>
                    <p class="text-white md:text-black-0">
                        <br>En Tecnimontacargasdual hay una línea de baterías nuevas y seminuevas para la venta y
                        alquiler. 12V 24V 36V 48V 80V.
                    </p>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import carrusel from './components/carrusel.vue'
export default {
    data() {
        return {
            img: [
                ["src/components/img/montacarga_6.jpg", "src/components/img/montacarga_3.jpg", "src/components/img/montacarga_7.jpg", "src/components/img/montacarga_5.png"],
                ["src/components/img/bateria3.png", "src/components/img/bateria2.png", "src/components/img/bateria2.jpg", "src/components/img/bateria1.png"]
            ],
        }
    },
    name: 'Alquiler',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
        carrusel
    },
    computed: {
        range() {
            return Array.from({ length: 2 }, (_, i) => i);
        },
    }
}
</script>