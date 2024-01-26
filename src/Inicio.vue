<template>
  <main class="w-full h-screen flex flex-col">
    <div class="w-full h-5/6 bg-principal bg-cover bg-center relative ">
      <div class="absolute inset-0 bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end"></div>
    </div>
    <div class="w-full h-5/6 absolute">
      <div class="container mx-auto w-full h-full flex flex-row justify-center">
        <!-- Bloque de texto a la izquierda -->
        <div class="flex-1 flex flex-col justify-center items-center px-4 sm:px-0">
          <h1
            class="font-black font-Fuente_secundaria text-white text-center text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
            Su mejor opción en <br> <span class="text-yellow-2">Montacargas</span>
          </h1>
        </div>
        <!-- Bloque de botones a la derecha -->
        <div class="flex-1 flex flex-col justify-center items-center px-4 sm:px-0">
          <router-link to="/Contacto" tag="button"
            class="w-16 h-10 mt-5 text-sm md:w-36 md:h-20 md:text-3xl font-bold bg-septenary rounded-md shadow-md">
            <span class="text-black-0 font-Fuente_terciaria flex justify-center ">Alquila<br>&thinsp;&thinsp;Aquí</span>
          </router-link>
        </div>
      </div>
    </div>
    <section class="w-full h-auto bg-nonary">
      <div class="container mx-auto w-full h-full py-10 flex flex-col ">
        <p class="w-full h-10 text-septenary font-Fuente_primaria text-center text-2xl sm:text-3xl">En TecniMontacargas
        </p>
        <p class="w-full h-1/2 text-primary font-Fuente_primaria text-center text-2xl sm:text-3xl">"Más que un servicio
          creamos
          un sistema general de rendimiento para sus equipos"</p>
      </div>
    </section>
  </main>

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
          <p class="font-Fuente_primaria text-2xl text-center">Alquiler de Montacargas</p>
        </div>

        <div class="bg-nonary w-full h-96 flex flex-col items-center rounded-md shadow-md">
          <div class="pt-32">
            <img src="../src/components/icons/soporte-tecnico.svg" alt="" class="h-20">
          </div>
          <p class="font-Fuente_primaria text-2xl text-center">venta de repuestos</p>
        </div>

        <div class="bg-nonary w-full h-96 flex flex-col items-center rounded-md shadow-md">
          <div class="pt-32">
            <img src="../src/components/icons/Porta_stibas.svg" alt="" class="h-20">
          </div>
          <p class="font-Fuente_primaria text-2xl text-center">Soporte tecnico</p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-nonary w-full flex flex-col md:flex-row justify-center pt-14 xl:pb-14">

    <div class="w-full md:w-1/2 flex flex-col md:flex-row justify-center relative">
      <div class="bg-septenary w-28 h-28 z-0"></div>
      <div class="w-72 h-96"></div>
      <div class="w-60 md:w-72 h-44 ml-14 md:z-10 md:m-14 absolute">
        <img src="../src/components/img/constructor.jpg" alt="">
      </div>
    </div>

    <!--texto acerca de nosotros-->
    <div class="w-full pl-14 pr-14 md:pl-0 md:w-1/2 py-14 lg:py-24 md:pr-20 xl:pr-56 ">
      <h1 class="pb-5 text-3xl md:text-5xl font-Fuente_primaria text-septenary text-center">acerca de nosotros</h1>
      <p class="py-4 text-justify font-Fuente_terciaria text-primary text-xl md:text-3xl">
        Nuestra compañía de alquiler de montacargas ofrece soluciones logísticas y de manejo de materiales para
        empresas de todos los tamaños y sectores. Nos dedicamos a brindar a nuestros clientes la flexibilidad y la
        eficiencia que necesitan para cumplir con sus objetivos y mejorar su productividad.
      </p>
    </div>

  </section>
</template>
