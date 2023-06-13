<script >
export default {
  data() {
    return {
      mostrarContenido: true,
      mostrarMenu: false
    };
  },
};
let bandera = true;
</script>

<template>
  <div>
    <!--350x420-->
    <!--420x640-->
    <div v-if="$vuetify.breakpoint.sm">
      <div v-if="mostrarContenido">
        <div v-if="mostrarMenu" class="bg-yellow-2 w-full h-screen flex flex-col">
          <button @click="mostrarMenu = !mostrarMenu" class="ml-8 mt-10 w-8 h-8">
            <figure>
              <img src="./img/x_icon.png" alt="X" title="salir">
            </figure>
          </button>

          <figure class="mx-auto w-80 h-28">
            <img src="./img/ico_tmd_white.svg" alt="Montacarga" title="logo" class=" w-80 h-28">
          </figure>
          <ul class="items-center text-center">
            <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray"><router-link
                to="/" @click="mostrarMenu = !mostrarMenu">Inicio</router-link></li>
            <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray"><router-link
                to="/Ingresar" @click="mostrarContenido = !mostrarContenido">Ingresar</router-link></li>
            <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray"><router-link
                to="/Registrarse" @click="mostrarContenido = !mostrarContenido">Registrarse</router-link></li>
            <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray"><router-link
                to="/Contacto" @click="mostrarContenido = !mostrarContenido">Contacto</router-link>
            </li>

            <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray"><router-link
                to="/Alquiler" @click="mostrarContenido = !mostrarContenido">Alquiler</router-link></li>
            <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray"><router-link
                to="/Mantenimiento" @click="mostrarContenido = !mostrarContenido">Mantenimiento</router-link></li>
            <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray"><router-link
                to="/Venta" @click="mostrarContenido = !mostrarContenido">Venta</router-link></li>
          </ul>
        </div>
        <div v-if="!mostrarMenu" class="w-full h-screen bg-yellow-2">
          <header class="h-1/7 flex flex-col">
            <nav class="bg-black-0 w-full h-full">
              <ul class="flex justify-center items-center h-full">
                <li class="mr-4">
                  <button @click="mostrarMenu = !mostrarMenu">
                    <figure>
                      <img src="./img/menu_lineas_blancas.png" alt="menu" title="menu" class="w-10 h-1/8">
                    </figure>
                  </button>

                </li>
                <li>
                  <button>
                    <figure>
                      <img src="./img/ico_tmd_white_n.svg" alt="Montacarga" title="logo" class="w-64 h-1/8">
                    </figure>
                  </button>
                </li>
              </ul>
            </nav>
          </header>

          <main class="bg-no-repeat bg-cover w-full h-3/4 relative flex items-center justify-center flex-col"
            id="gradiente">
            <div class="absolute inset-0 z-0">
              <figure class="self-center">
                <img src="./img/fondo.jpeg" alt="fondo" title="fondo" class="hidden ">
              </figure>
            </div>
            <h1 class="text-white text-5xl mix-blend-luminosity font-dancing font-extrabold text-center">Su mejor opción
              en
            </h1>
            <h1><span
                class="text-yellow-2 text-5xl mix-blend-lighten font-dancing font-extrabold text-center">Montacargas</span>
            </h1>

            <p class="text-white text-xl mix-blend-plus-lighter font-serif text-center mt-4 mx-4">¡Agilizar tu operación
              de carga y descarga! Te ofrecemos montacargas, en alquiler y venta, con
              servicios de reparación y mantenimiento.</p>
            <div class="flex justify-end absolute bottom-0 right-0">
              <figure class="self-center order-last">
                <img src="./img/caht_icon.png" alt="chat" title="chat" class="w-14 h-14">
              </figure>
            </div>
          </main>

          <footer class="w-full h-24">
            <nav class="bg-yellow-2 h-full">
              <ul class="flex justify-center items-center h-full">
                <li class="ml-4 mr-4">
                  <router-link to="/Contacto">
                    <figure>
                      <img src="./img/telefono_icon.png" alt="telefono" title="3244298326" class="w-14 h-14">
                    </figure>
                  </router-link>
                </li>
                <li class="ml-4 mr-4">
                  <a href="mailto:gestion@tecnimontacargasdual.com" target="_blank">
                    <figure>
                      <img src="./img/correo_icon.png" alt="correo" title="gestion@tecnimontacargasdual.com"
                        class="w-14 h-14">
                    </figure>
                  </a>
                </li>
                <li class="ml-4 mr-4">
                  <a href="https://www.facebook.com/profile.php?id=100089647335119" target="_blank">
                    <figure>
                      <img src="./img/facebook_icon.png" alt="facebook" title="facebook" class="w-12 h-14">
                    </figure>
                  </a>
                </li>
                <li class="ml-4 mr-4">
                  <a href="https://wa.me/573168770708" target="_blank">
                    <figure>
                      <img src="./img/whatsap_icon.png" alt="whatsapp" title="(+57) 3168770708" class="w-14 h-14">
                    </figure>
                  </a>
                </li>
              </ul>
            </nav>
          </footer>
        </div>
      </div>
      <router-view v-else="mostrarContenido"></router-view>
    </div>
    <!--750x1200-->
    <div v-else> 
      <main class="w-full h-screen " v-if="bandera">

        <nav class="w-full h-20 shadow-lg bg-primary  fixed z-30">
          <div class="container mx-auto w-full h-20 flex flex-row justify-center">
            <div class="w-1/3">
              <img src="../src/components/icons/Logo_nonary.svg" class="w-56 py-2 ml-4">
            </div>

            <div
              class="w-1/3 font-Fuente_primaria text-center text-septenary text-2xl flex flex-row justify-center space-x-7 py-5 ">

              <router-link @click="bandera = false" to="/">Inicio</router-link>
              <a href="">Alquiler</a>
              <router-link @click="bandera = false" to="/Mantenimiento">Mantenimiento</router-link>

            </div>

            <div
              class="w-1/3 flex flex-row justify-end font-Fuente_primaria text-center text-septenary text-2xl space-x-7 p-5">
              <a href="">
                <img src="../src/components/icons/carrito.svg" class="w-10">
              </a>
              <a href="">Ingresar</a>
              <a class="text-nonary">Registrarse</a>
            </div>

          </div>



        </nav>


        <section id="home" class="w-full h-full flex flex-col ">

          <div class="w-full h-5/6 bg-principal bg-cover bg-center relative "></div>


          <div class="w-full h-5/6 absolute ">
            <div class="container mx-auto w-full h-full flex flex-col justify-center">
              <p class="w-2/6 h-1/4 font-Fuente_secundaria text-nonary text-start text-6xl ">
                Nos especializamos en soluciones para montacargas
              </p>
              <router-link to="/Contacto">

                <button @click="bandera = false"
                  class="w-28 h-14 bg-septenary font-Fuente_primaria text-lg rounded-md shadow-md ">
                  Alquila Aquí!
                </button>

              </router-link>

            </div>
          </div>

          <!-- frase motivadora-->
          <div class="w-full h-1/6 bg-nonary">
            <div class="ontainer mx-auto w-full h-full py-10 flex flex-col ">
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

        <section class="bg-nonary w-full px-56 py-28 flex flex-row justify-center">

          <div class="w-1/2 h-96 flex flex-row justify-center relative">
            <div class="bg-septenary w-28 h-28 z-0"></div>
            <div class="w-72 h-96"></div>
            <div class="w-72 h-44 z-10 m-14 absolute">
              <img src="../src/components/img/constructor.jpg" alt="">
            </div>
          </div>

          <!--texto acerca de nosotros-->
          <div class="w-1/2 py-32">
            <h1 class="pb-5 text-5xl font-Fuente_primaria text-septenary text-center">acerca de nosotros</h1>
            <p class="py-4 text-justify font-Fuente_terciaria text-primary text-3xl">
              Nuestra compañía de alquiler de montacargas ofrece soluciones logísticas y de manejo de materiales para
              empresas de todos los tamaños y sectores. Nos dedicamos a brindar a nuestros clientes la flexibilidad y la
              eficiencia que necesitan para cumplir con sus objetivos y mejorar su productividad.
            </p>
          </div>

        </section>
        <!-- fqa y enlaces extra -->

        <footer class="h-52 px-32 bg-septenary">

          <div class="container mx-auto flex flex-row justify-center items-center">
            <div class="lg:order-2 lg:w-1/3">
              <div class="flex flex-col items-center p-2">
                <img src="../src/components/icons/Logo_primary.svg" class="w-72">
                <div class="bg-primary w-80 h-1"></div>
              </div>
              <div class="flex flex-row justify-center p-2 space-x-4">
                <a href="https://wa.me/573168770708">
                  <img src="../src/components/icons/whatsapp.svg" class="w-10">
                </a>
                <a href="https://www.facebook.com/profile.php?id=100089647335119">
                  <img src="../src/components/icons/facebook.svg" class="w-10">
                </a>
                <a href="mailto:gestion@tecnimontacargasdual.com">
                  <img src="../src/components/icons/mail.svg" class="w-11">
                </a>

              </div>
            </div>

            <div class="w-1/3 text-left text-xl font-Fuente_primaria text-primary">
              <ul class="">
                <li>hola</li>
                <li>hola</li>
                <li>hola</li>
              </ul>
            </div>



            <div class="order-3 w-1/3 text-right text-xl font-Fuente_primaria text-primary">
              <ul>
                <li>hola</li>
                <li>hola</li>
                <li>hola</li>
              </ul>
            </div>

          </div>

        </footer>



        <!--Seccion uno/imagen y texto -->


      </main>
      <router-view v-if="!bandera">
      </router-view>
    </div>
  </div>
</template>

<style scoped>
#gradiente {
  /*background: #bdc3c7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top right, rgba(252, 252, 252, 0.1), rgba(122, 134, 144, 0.5), rgba(120, 151, 176, 0.9)), url('/src/img/fondo.jpeg');
  /* Chrome 10-25, Safari 5.1-6 */
  background-image: linear-gradient(to top right, rgba(252, 252, 252, 0.1), rgba(122, 134, 144, 0.5), rgba(120, 151, 176, 0.9)), url('/src/img/fondo.jpeg');
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

</style>