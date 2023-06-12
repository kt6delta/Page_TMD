<script setup>

let bandera = true;

</script>

<template>
  <body>

  </body>
  <!DOCTYPE html>

  <body class="">

    <main class="w-full h-screen">
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

      <!--fondo y frase-->

      <section class="w-full pt-20 h-full">
        <div class="flex w-full h-full justify-center items-center">
          <div class="bg-mantenimiento w-full h-full bg-cover bg-left bg-fixed grayscale">
            <div class="bg-black w-full h-full opacity-70"></div>
          </div>
          <p
            class="w-3/6 p-20 pr-34 bg-nonary opacity-80 font-Fuente_terciaria text-center text-6xl absolute text-primary rounded-md">
            Más que un servicio creamos un sistema general de
            rendimiento para sus equipos</p>
        </div>

      </section>

      <!--informacion de mantenimiento-->

      <section class="w-full h-full flex flex-col bg-nonary">

        <div class="container mx-auto w-full h-full flex flex-row">

          <div class="w-1/2 h-full  p-32 ">
            <div class="w-full h-full bg-montacarga_2 bg-cover bg-bottom rounded-md"></div>
          </div>

          <div class="w-1/2 h-full p-32 ">

            <div class="w-full h-full bg-nonary rounded-md flex flex-col justify-center items-center">

              <h1 class="font-Fuente_terciaria text-septenary text-center text-7xl">Montacargas</h1>
              <ul class="pt-5 list-disc list-outside font-Fuente_primaria text-primary text-4xl space-y-2">
                <li>Programas de mantenimiento específico para sus necesidades individuales.</li>
                <li>Importación y venta de repuestos</li>
              </ul>

            </div>

          </div>


        </div>

      </section>

      <section class="w-full h-full flex flex-col bg-nonary">

        <div class="container mx-auto w-full h-full flex flex-row">

          <div class="w-1/2 h-full  p-32 ">

            <div class="w-full h-full bg-nonary rounded-md flex flex-col justify-center items-center">

              <h1 class="font-Fuente_terciaria text-septenary text-center text-7xl">Servicio técnico especialistas en
                Jungheinrich
              </h1>
              <p class="pt-5 font-Fuente_primaria text-primary text-4xl space-y-2 text-center">Apoyamos a nuestros
                clientes para mantener sus equipos 100% operativos, seguros y confiables,
                asegurándoles respaldo y confiabilidad en la actividad de los mismos.</p>

            </div>

          </div>

          <div class="w-1/2 h-full  p-32 ">
            <div class="w-full h-full bg-jungher bg-cover bg-bottom rounded-md"></div>

          </div>


        </div>

      </section>

      <section class="w-full h-full flex flex-col bg-nonary">

        <div class="container mx-auto w-full h-full flex flex-row">

          <div class="w-1/2 h-full  p-32 ">

            <div class="w-full h-full bg-portaestiba bg-cover bg-bottom rounded-md">

            </div>

          </div>

          <div class="w-1/2 h-full  p-32 ">

            <div class="w-full h-full bg-nonary rounded-md flex flex-col justify-center items-center">

              <h1 class="font-Fuente_terciaria text-septenary text-center text-7xl">Servicio técnico portaestibas</h1>
              <p class="pt-5 font-Fuente_primaria text-primary text-4xl space-y-2 text-center">Contamos con dos tipos de
                mantenimiento preventivo-correctivo y para que su operación no se vea afectada prestamos nuestros
                portaestibas por el tiempo que demore la refracción</p>

            </div>

          </div>


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
    </main>
    <router-view v-if="!bandera">
    </router-view>
  </body>
</template>

<style>
.hola {}
</style>
