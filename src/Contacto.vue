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

      <!--formulario y foto-->

      <section class=" w-full h-5/6 pt-20 bg-nonary flex flex-row">

        <div class=" w-1/2 h-full bg-montacarga bg-left bg-cover "></div>

        <div class="container mx-auto w-1/2 h-full px-20 py-2 flex flex-col space-y-5">
          <div>
            <h1 class="p-5 text-center text-primary font-Fuente_secundaria text-5xl">Contactactenos</h1>
          </div>
          <div class="mb-5">
            <label for="Nombre" class="block text-primary font-Fuente_terciaria text-xl text-start">Ingrese el
              nombre</label>
            <input type="text"
              class="w-full bg-white mt-2 h-10 appearance-none rounded shadow-lg focus:outline-none focus:bg-white"
              placeholder="Nombre">
          </div>

          <div class="">
            <label for="Correo" class="block text-primary font-Fuente_terciaria text-xl text-start">Ingrese el correo
              electronico</label>
            <input type="text"
              class="w-full bg-white mt-2 h-10 appearance-none rounded shadow-lg focus:outline-none focus:bg-white"
              placeholder="Correo electronico">
          </div>
          <div class="">
            <label for="Telefono" class="block text-primary font-Fuente_terciaria text-xl text-start">Ingresa el
              telefono</label>
            <input type="text"
              class="w-full bg-white mt-2 h-10 appearance-none rounded shadow-lg font-Fuente_terciaria focus:outline-none focus:bg-white"
              placeholder="Telefono">
          </div>

          <div class="">
            <label for="Tipo_servicio" class="block text-primary font-Fuente_terciaria text-xl text-start">Indique el
              tipo de servicio</label>
            <textarea type="text"
              class="w-full bg-white mt-2 h-32 appearance-none rounded shadow-lg focus:outline-none focus:bg-white"></textarea>
          </div>

          <div class="w-full flex items-center justify-center">
            <button
              class="w-28 h-14 bg-primary font-Fuente_primaria text-lg text-septenary rounded-md shadow-md active:bg-secondary">
              Enviar!
            </button>
          </div>
        </div>

      </section>

      <!--datos de contacto-->

      <section class="w-full h-5/6  bg-primary">

        <div class=" container mx-auto flex flex-col">

          <h1 class="py-14 font-Fuente_secundaria text-5xl text-center text-pri text-nonary">Informacion</h1>

          <div class="w-full h-4/6 flex flex-row shadow-md rounded-md ">

            <!--informacion -->

            <div class="w-1/2 h-full p-10 flex flex-col space-y-6 bg-septenary rounded-s-md">

              <p class="font-Fuente_secundaria text-primary text-center text-4xl mb-7">Datos</p>


              <div class="flex flex-row space-x-3">
                <img src="../src/components/icons/Marcador.svg" class="w-14 h-14">
                <p class="pt-2 font-Fuente_terciaria text-primary text-xl">Carrera 108 # 22F -21 Bogotá DC - (Colombia)
                </p>
              </div>

              <div class="flex flex-row space-x-3">
                <img src="../src/components/icons/Telefono.svg" class="w-14 h-14">
                <div>
                  <p class="pt-2 font-Fuente_terciaria text-primary text-xl">(+57) 601 5408640 </p>
                  <p class="font-Fuente_terciaria text-primary text-xl">(+57) 3244298326</p>
                </div>

              </div>

              <div class="flex flex-row space-x-3">
                <img src="../src/components/icons/whatsapp.svg" class="w-14 h-14">
                <p class="pt-2 font-Fuente_terciaria text-primary text-xl">(+57) 3168770708</p>
              </div>

              <div class="flex flex-row space-x-3">
                <img src="../src/components/icons/Correo.svg" class="w-14 h-14">
                <p class="pt-2 font-Fuente_terciaria text-primary text-xl">gestion@tecnimontacargasdual.com</p>
              </div>

            </div>
            <!--Mapa-->
            <div class="w-1/2 ">

              <iframe class="w-full h-full rounded-e-md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9457.721101208544!2d-74.15113081673009!3d4.685996886697891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9db07b05ee2d%3A0x7e11bf0a9122222d!2sTecnimontacargas%20Dual%20Ltda!5e0!3m2!1ses!2sco!4v1682899896742!5m2!1ses!2sco"
                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>

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
