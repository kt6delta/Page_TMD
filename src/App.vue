<script setup>


//metodos

let bandera = true;

</script>

<template>
  <body>

  </body>
  <!DOCTYPE html>

  <body class="">
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
  </body>
</template>

<style>
.hola {}
</style>
