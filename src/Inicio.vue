<script>
export default {
  data() {
    return {
      tarjeta1: false,
      tarjeta2: false,
      tarjeta3: false,
      animate: false
    };
  },
  methods: {
    Flip(card) {
      this[card] = !this[card];
      this.animate = true;
    },
  },
};
</script>
<template>
<link href="https://fonts.googleapis.com/css2?family=Josefin%20Sans&display=swap" rel="stylesheet">
  <main class="w-full h-screen flex flex-col" data-aos="fade-up">
   

  <section style="height: 700px;" class="bg-white w-full flex flex-col md:flex-row justify-center pt-30 xl:pb-30" data-aos="fade-up">

<br><br><br><br><br><br><br><br><br>
<div id="div1" class="div1 "><img src="https://batterydepot.com.mx/wp-content/uploads/2022/07/Tipos_montacargas-1080x675.jpg" width="750" text-align="center"  /></div>
<div id="div2" class="div2 ">
  <div class="flex-1 flex flex-col justify-center items-center px-4 sm:px-0>">
        <h1 class="text_2"><br>
          Su mejor opción en <br> <span class="" style="color:#ffa200;">Montacargas</span>
        </h1>
        <router-link to="/Contacto" tag="button"
          class="w-16 h-20 mt-25 text-sm md:w-36 md:h-20 md:text-5xl ">
          <span class="buttonClass">Contactanos</span>
        </router-link>
  </div>
</div>



</section>



    <section class="w-full h-auto bg-nonary">
      <div class="container mx-auto w-full h-full py-10 flex flex-col ">
        <p class="sub_title w-full h-10 text-2xl sm:text-3xl">En TecniMontacargas
        </p><br>
        <p class="text_3 w-full h-1/2 text-primary font-Fuente_primaria text-center text-2xl sm:text-3xl">"Más que un servicio
          creamos
          un sistema general de rendimiento para sus equipos"</p>
      </div>
    </section>
  </main>

  <!--Seccion dos/tarjetas de servicios (animacion de que se voltean) -->

  <section class="bg-primary w-full" id=" tarjetas" data-aos="fade-up">
    <div class="container mx-auto w-full">

      <div class="px-58 py-10">
        <h1 class="sub_title " >NUESTROS SERVICIOS</h1>
      </div>

      <div class="h-98 pb-32 flex flex-row space-y-0 space-x-4">

        <div v-show="!tarjeta1"
          class="bg-nonary w-full h-96 flex flex-col items-center rounded-md shadow-md rotate-horizontal-center"
          @click="Flip('tarjeta1')">
          <div class="pt-32">
            <img src="../src/components/icons/maquina-elevadora.svg" alt="" class="h-20">
          </div>
          <p class="font-Fuente_primaria text-2xl text-center">Alquiler de Montacargas</p>
        </div>

        <div v-show="tarjeta1"
          class="bg-yellow w-full h-96 flex flex-col items-center rounded-md shadow-md rotate-horizontal-center"
          @click="Flip('tarjeta1')">
          <div class="my-auto text-xl text-center">
            <h1 class="font-bold md:pb-5 text-2xl">Eficiencia sin límites</h1>
            <p class="hidden md:block">Ahorre tiempo y dinero en su operación logística con nuestros montacargas de
              alquiler por meses. Disfrute de equipos en perfecto estado para una operación sin interrupciones.</p>
          </div>
        </div>

        <div v-show="!tarjeta2"
          class="bg-nonary w-full h-96 flex flex-col items-center rounded-md shadow-md rotate-horizontal-center"
          @click="Flip('tarjeta2')">
          <div class="pt-32">
            <img src="../src/components/icons/soporte-tecnico.svg" alt="" class="h-20">
          </div>
          <p class="font-Fuente_primaria text-2xl text-center">Venta de Repuestos</p>
        </div>

        <div v-show="tarjeta2"
          class="bg-yellow w-full h-96 flex flex-col items-center rounded-md shadow-md rotate-horizontal-center"
          @click="Flip('tarjeta2')">
          <div class="my-auto font-Fuente_primaria  text-xl text-center">
            <h1 class="font-bold md:pb-5 text-2xl">Piezas duraderas y confiables</h1>
            <p class="hidden md:block">Confíe en la calidad de nuestros repuestos originales para montacargas eléctricos.
              Mantenga su equipo funcionando al máximo y obtenga un rendimiento óptimo.</p>
          </div>
        </div>

        <div v-show="!tarjeta3"
          class="bg-nonary w-full h-96 flex flex-col items-center rounded-md shadow-md rotate-horizontal-center"
          @click="Flip('tarjeta3')">
          <div class="pt-32">
            <img src="../src/components/icons/Porta_stibas.svg" alt="" class="h-20">
          </div>
          <p class="font-Fuente_primaria text-2xl text-center">Soporte Técnico</p>
        </div>

        <div v-show="tarjeta3"
          class="bg-yellow w-full h-96 flex flex-col items-center rounded-md shadow-md rotate-horizontal-center"
          @click="Flip('tarjeta3')">
          <div class="my-auto font-Fuente_primaria  text-xl text-center">
            <h1 class="font-bold md:pb-5 text-2xl">Soluciones Rapidas</h1>
            <p class="hidden md:block">Más de 20 años de experiencia nos avalan en el mantenimiento de montacargas.
              Técnicos cualificado y repuestos originales garantizan un servicio de alta calidad para su tranquilidad</p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <section class="bg-nonary w-full flex flex-col md:flex-row justify-center pt-14 xl:pb-14" data-aos="fade-up">

    <div class="w-full md:w-1/2 flex flex-col md:flex-row justify-center relative">
      <div class="bg-black w-36 h-36 z-0" style="background: #ffa200;"></div>
      <div class="w-72 h-86 "></div>
      <div class="w-60 md:w-72 h-44 ml-14 md:z-10 md:m-14 absolute">
        <img src="../src/components/img/constructor.jpg" alt="">
      </div>
    </div>

    <!--texto acerca de nosotros-->
    <div class="w-full pl-14 pr-14 md:pl-0 md:w-1/2 py-14 lg:py-24 md:pr-20 xl:pr-56 ">
      <h1 class="sub_title  pb-5 text-3xl md:text-5xl ">NOSOTROS</h1>
      <p class="text_1  py-4 text-justify text-xl md:text-3xl">
        Nuestra compañía de alquiler de montacargas ofrece soluciones logísticas y de manejo de materiales para
        empresas de todos los tamaños y sectores. Nos dedicamos a brindar a nuestros clientes la flexibilidad y la
        eficiencia que necesitan para cumplir con sus objetivos y mejorar su productividad.
      </p>
    </div>

  </section>


</template>

<style>

    #wrapper {
        position:relative;
    }
    .div1 {
        border-radius: 20px;
        margin-left: 25%;
    }
    .div2 {
        position: absolute;
        background-color: #f5f5f5;
        top: 70px;
        left: 200px;
        width:400px;
        height:250px;
        border-radius: 20px;
    }



.buttonClass  {
   font-size: 16px;
   font-weight: bold;
   background: #eeeeee;
   color: #333333;
   border: 1px solid #cccccc;
   border-radius: 6px;
   padding: 10px 15px;
   letter-spacing: 0px;
}

.buttonClass:hover {
   background: #e5e5e5;
   color: #333333;
}

.sub_title {
text-align: center;
font-family: 'Ubuntu', sans-serif;
font-size: 30px;
letter-spacing: 0px;
word-spacing: 0px;
color: #ffa200;
font-weight: bold;
text-decoration: none;
font-style: normal;
font-variant: small-caps;
text-transform: none;
}

.text_1 {
  font-family: 'Josefin Sans', sans-serif;
font-size: 20px;
letter-spacing: 0px;
word-spacing: 0px;
color: black;
font-weight: normal;
text-decoration: none;
font-style: normal;
font-variant: normal;
text-transform: none;
}

.text_2 {
font-family: 'Josefin Sans', sans-serif;
font-size: 35px;
letter-spacing: 0px;
word-spacing: 0px;
color: #000000;
font-weight: bold;
text-decoration: none;
font-style: normal;
font-variant: normal;
text-transform: none;
}

.text_3 {
font-family: 'Josefin Sans', sans-serif;
font-size: 30px;
letter-spacing: 0px;
word-spacing: 0px;
color: #000000;
font-weight: normal;
text-decoration: underline;
font-style: normal;
font-variant: normal;
text-transform: none;
}
</style>

