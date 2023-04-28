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
  <!--350x420-->
  <!--420x600-->

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
        <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray"><router-link
            to="/" @click="mostrarContenido = !mostrarContenido">Inicio</router-link></li>
        <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray"><router-link
            to="/Ingresar" @click="mostrarContenido = !mostrarContenido">Ingresar</router-link></li>
        <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray"><router-link
            to="/Registrarse" @click="mostrarContenido = !mostrarContenido">Registrarse</router-link></li>
        <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray"><router-link
            to="/Contactenos" @click="mostrarContenido = !mostrarContenido">Contactenos</router-link>
        </li>

        <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray"><router-link
            to="/Alquiler" @click="mostrarContenido = !mostrarContenido">Alquiler</router-link></li>
        <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray"><router-link
            to="/Mantenimiento" @click="mostrarContenido = !mostrarContenido">Mantenimiento</router-link></li>
        <li class="text-black-0 text-2xl py-2 font-serif font-bold transform -skew-x-12 hover:text-gray"><router-link
            to="/Venta" @click="mostrarContenido = !mostrarContenido">Venta</router-link></li>
      </ul>
    </div>
    <div v-if="!mostrarMenu" class="w-full h-screen">
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
              <button>
                <figure>
                  <img src="/src/img/ico_tmd_white_n.svg" alt="Montacarga" title="logo" class="w-64 h-1/8">
                </figure>
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main class="bg-no-repeat bg-cover w-full h-3/4 relative flex items-center justify-center flex-col" id="gradiente">
        <div class="absolute inset-0 z-0">
          <figure class="self-center">
            <img src="/src/img/fondo.jpeg" alt="fondo" title="fondo" class="hidden ">
          </figure>
        </div>
        <h1 class="text-white text-5xl mix-blend-luminosity font-dancing font-extrabold text-center">Su mejor opción en
        </h1>
        <h1><span
            class="text-yellow-2 text-5xl mix-blend-lighten font-dancing font-extrabold text-center">Montacargas</span>
        </h1>

        <p class="text-white text-xl mix-blend-plus-lighter font-serif text-center mt-4">Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Optio eveniet voluptatum, maiores, necessitatibus qui ad laboriosam nemo</p>
        <div class="flex justify-end absolute bottom-0 right-0">
          <figure class="self-center order-last">
            <img src="/src/img/caht_icon.png" alt="chat" title="chat" class="w-14 h-14">
          </figure>
        </div>
      </main>

      <footer class="w-full h-24">
        <nav class="bg-yellow-2">
          <ul class="flex justify-center items-center h-24">
            <li class="ml-4 mr-4">
              <router-link to="/Contactenos">
                <figure>
                  <img src="/src/img/telefono_icon.png" alt="telefono" title="3244298326" class="w-14 h-14">
                </figure>
              </router-link>
            </li>
            <li class="ml-4 mr-4">
              <router-link to="/Contactenos">
                <figure>
                  <img src="/src/img/correo_icon.png" alt="correo" title="gestion@tecnimontacargasdual.com"
                    class="w-14 h-14">
                </figure>
              </router-link>
            </li>
            <li class="ml-4 mr-4">
              <router-link to="/Contactenos">
                <figure>
                  <img src="/src/img/facebook_icon.png" alt="facebook" title="facebook" class="w-12 h-14">
                </figure>
              </router-link>
            </li>
            <li class="ml-4 mr-4">
              <router-link to="/Contactenos">
                <figure>
                  <img src="/src/img/whatsap_icon.png" alt="whatsapp" title="(+57) 3168770708" class="w-14 h-14">
                </figure>
              </router-link>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  </div>
</template>

<style scoped>
#gradiente {
  /*background: #bdc3c7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top right, rgba(252,252,252,0.1),rgba(122,134,144,0.5), rgba(120, 151, 176, 0.9)), url('/src/img/fondo.jpeg');
  /* Chrome 10-25, Safari 5.1-6 */
  background-image: linear-gradient(to top right, rgba(252,252,252,0.1),rgba(122,134,144,0.5), rgba(120, 151, 176, 0.9)), url('/src/img/fondo.jpeg');
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}/*122,134,144,0.9)*/
</style>