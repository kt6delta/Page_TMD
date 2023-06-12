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

      <!--formulario-->

      <section class=" w-full h-5/6 bg-nonary flex justify-center align-middle">
        <div class="w-2/4 bg-primary mt-32 mb-14 rounded-md shadow-xl">

          <div class="w-full h-full px-20 py-24 flex flex-col space-y-5">
            <div>
              <h1 class="p-5 text-center text-nonary font-Fuente_secundaria text-5xl">Registro</h1>
            </div>

            <div class="">
              <label for="Correo" class="block text-nonary font-Fuente_terciaria text-xl text-start">Ingrese el correo
                electronico</label>
              <input type="text"
                class="w-full bg-white mt-2 h-10 appearance-none rounded shadow-lg focus:outline-none focus:bg-white"
                placeholder="Correo electronico">
            </div>

            <div class="mb-5">
              <label for="Contraseña" class="block text-nonary font-Fuente_terciaria text-xl text-start">Ingrese una
                contraseña</label>
              <input type="password"
                class="w-full bg-white mt-2 h-10 appearance-none rounded shadow-lg focus:outline-none focus:bg-white"
                placeholder="Contraseña">
            </div>

            <div class="mb-5">
              <label for="Contraseña" class="block text-nonary font-Fuente_terciaria text-xl text-start">Confirmar
                contraseña</label>
              <input type="password"
                class="w-full bg-white mt-2 h-10 appearance-none rounded shadow-lg focus:outline-none focus:bg-white"
                placeholder="confirmar Contraseña">
            </div>

            <div class="w-full flex items-center justify-center">
              <button
                class="w-28 h-14 bg-septenary font-Fuente_primaria text-lg text-primary rounded-md shadow-md active:bg-senary">
                Enviar!
              </button>
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
