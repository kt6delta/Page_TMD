<script >
import MenuBarra from './components/MenuBarra.vue';
import Chat_Flotante from './components/Chat_Flotante.vue';
import Footer from './components/Footer.vue';
export default {
  components: {
    MenuBarra,
    Chat_Flotante,
    Footer
  },
  data() {
    return {
      mostrarMenu: false,
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    actualizarMenu(nuevoValor) {
      this.mostrarMenu = nuevoValor;
    },
  },
};
</script>

<template>
  <!--320x768-->
  <MenuBarra />

  <div v-if="windowWidth < 1024">
    <div v-show="!mostrarMenu" class="w-full h-screen">
      <main :class="[
        'bg-no-repeat bg-cover w-full h-3/4 flex items-center justify-center flex-col',
        windowWidth < 768 ? 'relative bg-jungher' : 'relative bg-principal_2'
      ]">
        <div class="absolute inset-0 bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end">
        </div>
        <div class="relative">
          <h1 :class="{
            'text-5xl mb-1': windowWidth <= 375,
            'text-6xl mb-1': windowWidth < 768 && windowWidth > 375,
            'text-7xl mb-2': windowWidth >= 768,
            'text-white  mix-blend-luminosity font-dancing font-black text-center': true
          }">Su mejor opción
            en</h1>
          <h1 :class="{
            'text-5xl mb-8': windowWidth <= 375,
            'text-6xl mb-10': windowWidth < 768 && windowWidth > 375,
            'text-7xl mb-16': windowWidth >= 768,
            'text-yellow-2 mix-blend-lighten font-dancing font-black text-center': true
          }">Montacargas
          </h1>
          <p :class="{
            'text-xl': windowWidth <= 375,
            'text-2xl': windowWidth < 768 && windowWidth > 375,
            'text-3xl': windowWidth >= 768,
            'text-white mix-blend-plus-lighter font-serif text-center w-3/4': true
          }">
            ¡Agilizar tu operación de carga y descarga! Te ofrecemos montacargas, en alquiler y venta, con servicios de
            reparación y mantenimiento.
          </p>
          <Chat_Flotante />
        </div>
      </main>
      <!-- <Footer /> -->
    </div>
  </div>
  <!--1024-->
  <div v-else>
    <main class="w-full h-screen ">
      <!--seccion 1-->

      <section class="w-full h-full flex flex-col ">

        <div class="w-full h-5/6 bg-principal bg-cover bg-center relative "></div>

        <!--Parte 1 titulo-->

        <div class="w-full h-5/6 absolute ">
          <div class="container mx-auto w-full h-full flex flex-col justify-center">
            <p class="w-2/6 h-1/4 font-Fuente_secundaria text-nonary text-start text-5xl xl:text-6xl ">
              Nos especializamos en soluciones para montacargas
            </p>
            <router-link to="/Contacto" tag="button"
              class="w-28 h-14 ml-14 mt-5 xl:h-14 xl:mt-5 bg-septenary rounded-md shadow-md">
              <span
                class="text-black-0 font-Fuente_terciaria font-bold text-lg flex items-center justify-center ">Alquila<br>&thinsp;&thinsp;Aquí</span>
            </router-link>
          </div>
        </div>

        <!-- frase motivadora-->
        <div class="w-full h-auto bg-nonary">
          <div class="container mx-auto w-full h-full py-10 flex flex-col ">
            <p class="w-full h-10  text-septenary font-Fuente_primaria text-center text-3xl">En TecniMontacargas</p>
            <p class="w-full h-1/2  text-primary font-Fuente_primaria text-center text-3xl">"Más que un servicio creamos
              un sistema general de
              rendimiento
              para sus equipos"</p>
          </div>

        </div>
      </section>

      <!--Seccion dos/tarjetas de servicios (animacion de que se voltean) -->

      <section class="bg-primary w-full" id=" tarjetas">

        <div class="container mx-auto w-full">

          <div class="px-58 py-10">
            <h1 class="text-nonary text-5xl text-center font-Fuente_primaria">nuestros servicios</h1>
          </div>

          <div class="h-98 pb-32 flex flex-row space-y-0 space-x-4">

            <div class="bg-nonary w-full h-96 flex flex-col items-center rounded-md shadow-md">
              <div class="pt-32">
                <img src="../src/components/icons/maquina-elevadora.svg" alt="" class="h-20">
              </div>
              <p class="font-Fuente_primaria text-2xl">Montacargas</p>
            </div>

            <div class="bg-nonary w-full h-96 flex flex-col items-center rounded-md shadow-md">
              <div class="pt-32">
                <img src="../src/components/icons/soporte-tecnico.svg" alt="" class="h-20">
              </div>
              <p class="font-Fuente_primaria text-2xl">Soporte tecnico</p>
            </div>

            <div class="bg-nonary w-full h-96 flex flex-col items-center rounded-md shadow-md">
              <div class="pt-32">
                <img src="../src/components/icons/Porta_stibas.svg" alt="" class="h-20">
              </div>
              <p class="font-Fuente_primaria text-2xl text-center">Servicio técnico en portaestibas</p>
            </div>
          </div>
        </div>


      </section>

      <!--Seccion tres/informacion empresa  y contactanos -->

      <section class="bg-nonary w-full flex flex-row justify-center pt-14 xl:pb-14">

        <div class="w-1/2 flex flex-row justify-center relative">
          <div class="bg-septenary w-28 h-28 z-0"></div>
          <div class="w-72 h-96"></div>
          <div class="w-72 h-44 z-10 m-14 absolute">
            <img src="../src/components/img/constructor.jpg" alt="">
          </div>
        </div>

        <!--texto acerca de nosotros-->
        <div class="w-1/2 py-14 lg:py-24 pr-20 xl:pr-56 ">
          <h1 class="pb-5 text-5xl font-Fuente_primaria text-septenary text-center">acerca de nosotros</h1>
          <p class="py-4 text-justify font-Fuente_terciaria text-primary text-3xl">
            Nuestra compañía de alquiler de montacargas ofrece soluciones logísticas y de manejo de materiales para
            empresas de todos los tamaños y sectores. Nos dedicamos a brindar a nuestros clientes la flexibilidad y la
            eficiencia que necesitan para cumplir con sus objetivos y mejorar su productividad.
          </p>
        </div>

      </section>
      <!-- fqa y enlaces extra -->
      <!-- <Footer/> -->
      <!--Seccion uno/imagen y texto -->


    </main>
  </div>
  <Footer />
</template>
