<template>
    <main class="text-black-0 bg-gray-light text-base font-Fuente_terciaria">
       

<h1>HOLA</h1>
<section class="bg-black col-md-6 mx-auto">
        
<div class="carousel  col-md-6 mx-auto">
    <div class="slides " :style="{ transform: 'translateX(' + (-currentIndex * 100) + '%)' }">
      <div class="slide" v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Slide" class="col-md-6 mx-auto">
      </div>
    </div>
    <div class="controls">
      <button @click="prevSlide">Anterior</button> &nbsp; 
      <button @click="nextSlide">Siguiente</button>
    </div>
  </div>

</section>   



        
        <section class="flex flex-col md:flex-row md:mx-28" data-aos="fade-up">
            
            <!-- izquierda 2 -->
            <div class="items-center flex-1 px-5 md:px-0">
                <h2 class="text-yellow-2 text-3xl font-Fuente_primaria text-center">
                    Montacargas
                </h2>
                <p class="my-5">
                    Actualmente nuestro servicio de alquiler cuenta con
                    una flota amplia de máquinas y consideramos
                    que nuestro éxito está fundamentado en la calidad de nuestros equipos,soporte técnico y asesoría
                    que
                    permite a todos
                    nuestros clientes mantener su operación logística
                    de manera continua y eficiente.
                    Nuestra experiencia, solidez y compromiso, permiten optimizar los recursos, aumentar la
                    eficiencia y
                    disminuir los costos operativos de nuestros clientes.
                </p>
            </div>
            <!-- derecha 2-->
            <div class="bg-black-0 md:bg-gray-light flex-1 items-center  md:ml-5 p-5 md:p-0">
                <div class="block md:hidden">
                    <figure class="w-4/5 h-auto items-center mx-auto">
                        <img src="./components/img/bateria1.png" alt="bateria de traccion" title="alquiler">
                    </figure>
                </div>
                <div class="items-center flex-1">
                    <h2 class="text-yellow-2 text-3xl font-Fuente_primaria text-center mx-4 mt-4 mb-1 ">
                        Baterias de Traccion
                    </h2>
                    <h3 class="mx-5 text-xl font-bold text-center text-white md:text-black-0"> ¿Largas jornadas de
                        trabajo y sus baterías no
                        las
                        soportan?</h3>
                    <p class="text-white md:text-black-0">
                        <br>En Tecnimontacargasdual hay una línea de baterías nuevas y seminuevas para la venta y
                        alquiler. 12V 24V 36V 48V 80V.
                    </p>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
  name: 'ImageCarousel',
  data() {
    return {
      images: [
        'https://via.placeholder.com/500x400/FF5733/FFFFFF',
        'https://via.placeholder.com/800x400/33FF57/FFFFFF',
        'https://via.placeholder.com/800x400/5733FF/FFFFFF'
      ],
      currentIndex: 0
    };
  },
  methods: {
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }
  }
};
</script>

<style scoped>
.carousel {

  position: relative;
  width: auto;
  overflow: hidden;
}
.slides {

  display: flex;
  transition: transform 0.5s ease;
}
.slide {
    
  flex: 0 0 100%;
}
.controls {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
</style>