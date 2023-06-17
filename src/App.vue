<script >
import MenuLateral from './components/MenuLateral_Cel.vue';
import Footer_Cel from './components/Footer_Cel.vue';
import MenuBarra_Cel from './components/MenuBarra_Cel.vue';
import Chat_Flotante from './components/Chat_Flotante.vue';
import MenuBarra_PC from './components/MenuBarra_PC.vue';
import Footer_PC from './components/Footer_PC.vue';
export default {
  components: {
    MenuLateral,
    Footer_Cel,
    MenuBarra_Cel,
    Chat_Flotante,
    MenuBarra_PC,
    Footer_PC
  },
  data() {
    return {
      mostrarMenu: false,
      mostrarContenido: true,
      windowWidth: window.innerWidth,
      padre: 'App'
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
    actualizarContenido(nuevoValor) {
      this.mostrarContenido = nuevoValor;
    }
  },
};
</script>

<template>
  <div>
    <!--320x768-->
    <div v-if="windowWidth < 1024">
      <div v-if="mostrarContenido">
        <MenuLateral :menuProp="mostrarMenu" :contenidoProp="mostrarContenido" :PadreProp="padre"
          @actualizar-menu="actualizarMenu" @actualizar-contenido="actualizarContenido" />
        <div v-show="!mostrarMenu" class="w-full h-screen bg-yellow-2">
          <MenuBarra_Cel :menuProp="mostrarMenu" @actualizar-menu="actualizarMenu"
            @actualizar-contenido="actualizarContenido" />
          <main :class="[
            'bg-no-repeat bg-cover w-full h-3/4 relative flex items-center justify-center flex-col',
            windowWidth < 768 ? 'gradiente' : 'fondo'
          ]">
            <h1 class="text-white text-5xl mix-blend-luminosity font-dancing font-extrabold text-center">Su mejor opción
              en</h1>
            <h1>
              <span
                class="text-yellow-2 text-5xl mix-blend-lighten font-dancing font-extrabold text-center">Montacargas</span>
            </h1>
            <p class="text-white text-xl mix-blend-plus-lighter font-serif text-center mt-4 mx-4">
              ¡Agilizar tu operación de carga y descarga! Te ofrecemos montacargas, en alquiler y venta, con servicios de
              reparación y mantenimiento.
            </p>
            <Chat_Flotante />
          </main>
          <Footer_Cel />
        </div>
      </div>
      <router-view v-else="mostrarContenido"></router-view>
    </div>
    <!--1024-->
    <div v-else>
      <main class="w-full h-screen " v-if="mostrarContenido">

        <!--nav-->

        <MenuBarra_PC :contenidoProp="mostrarContenido" @actualizar-contenido="actualizarContenido" />

        <!--seccion 1-->

        <section id="home" class="w-full h-full flex flex-col ">

          <div class="w-full h-5/6 bg-principal bg-cover bg-center relative "></div>

          <!--Parte 1 titulo-->

          <div class="w-full h-5/6 absolute ">
            <div class="container mx-auto w-full h-full flex flex-col justify-center">
              <p class="w-2/6 h-1/4 font-Fuente_secundaria text-nonary text-start text-5xl xl:text-6xl ">
                Nos especializamos en soluciones para montacargas
              </p>
              <router-link to="/Contacto">

                <button @click="mostrarContenido = false"
                  class="w-28 h-12 xl:h-14 xl:mt-5 bg-septenary font-Fuente_primaria text-sm rounded-md shadow-md ">
                  Alquila Aquí!
                </button>

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
        <Footer_PC />
        <!--Seccion uno/imagen y texto -->


      </main>
      <router-view v-if="!mostrarContenido">
      </router-view>
    </div>
  </div>
</template>

<style scoped>
.gradiente {
  /*background: #bdc3c7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top right, rgba(252, 252, 252, 0.1), rgba(122, 134, 144, 0.5), rgba(120, 151, 176, 0.9)), url('/src/components/img/jungher.jpg');
  /* Chrome 10-25, Safari 5.1-6 */
  background-image: linear-gradient(to top right, rgba(252, 252, 252, 0.1), rgba(122, 134, 144, 0.5), rgba(120, 151, 176, 0.9)), url('/src/components/img/jungher.jpg');
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.fondo {
  background: -webkit-linear-gradient(to top right, rgba(252, 252, 252, 0.1), rgba(122, 134, 144, 0.5), rgba(120, 151, 176, 0.9)), url("/src/components/img/principal_2.jpg");
  background-image: linear-gradient(to top right, rgba(252, 252, 252, 0.1), rgba(122, 134, 144, 0.5), rgba(120, 151, 176, 0.9)), url("/src/components/img/principal_2.jpg");
}
</style>