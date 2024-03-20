<template>
    <main class="w-full h-screen">
        <section class="w-full h-full">
            <div class="flex w-full h-full justify-center items-center">
                <div class="bg-mantenimiento w-full h-full bg-cover bg-left bg-fixed grayscale">
                    <div class="bg-black w-full h-full opacity-70"></div>
                </div>
                <p
                    class="text_mmt_1 w-3/5 xl:w-3/6 p-10 md:p-20 bg-nonary opacity-50 font-Fuente_terciaria text-center text-xl md:text-6xl absolute text-primary rounded-md">
                    Más que un servicio creamos un sistema general de
                    rendimiento para sus equipos</p>
            </div>
        </section>
    </main>

    <!--informacion de mantenimiento-->
    <section class="w-full h-full flex flex-col bg-nonary pt-10" data-aos="fade-up">
        <div class="container mx-auto w-full h-full flex flex-row">
            <div class="w-1/2 h-full my-auto px-5 md:py-32 md:px-20 xl:px-32">
                <img src="./components/img/montacarga_2.jpg"  class="img_mmt rounded-md">
            </div>
            <div class="w-1/2 h-full md:p-24 xl:p-32">
                <div class="w-full h-full bg-nonary rounded-md flex flex-col justify-center items-center">
                    <h1
                        class="sub_title font-Fuente_terciaria text-septenary text-center text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl">
                        MONTACARGAS </h1><br>
                    <ul
                        class="text_mmt_2 list-disc list-outside  text-primary pt-5 ml-4 text-xl md:text-2xl xl:text-3xl 2xl:text-4xl space-y-2">
                        <li>Programas de mantenimiento específico para sus necesidades individuales.</li>
                        <li>Importación y venta de repuestos</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="w-full h-full flex flex-col bg-black-0 pt-10" data-aos="fade-up">
        <div class="container mx-auto w-full h-full flex flex-row">
            <div class="w-1/2 h-full md:p-24 xl:p-32">
                <div class="w-full h-full bg-black-0 rounded-md flex flex-col justify-center items-center">
                    <h1
                        class="sub_title  font-Fuente_terciaria text-septenary text-center text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl">
                        SERVICIO TÉCNICO ESPECIALISTAS EN JUNGHEINRICH
                    </h1>
                    <p
                        class="text_mmt_2 list-disc list-outside font-Fuente_primaria text-white pt-5 ml-4 text-xl md:text-2xl xl:text-3xl 2xl:text-4xl space-y-2">
                        Apoyamos a nuestros clientes para mantener sus equipos 100% operativos, seguros y confiables, asegurándoles respaldo y confiabilidad en la actividad de los mismos.</p>
                </div>
            </div>
            <div class="w-1/2 h-full my-auto px-5 md:py-32 md:px-20 xl:px-32">
                <img src="./components/img/jungher.jpg" alt="" class="img_mmt rounded-md">
            </div>
        </div>
    </section>

    <section class="w-full h-full flex flex-col bg-nonary py-10" data-aos="fade-up">
        <div class="container mx-auto w-full h-full flex flex-row">
            <div class="w-1/2 h-full my-auto px-5 md:py-32 md:px-20 xl:px-32">
                <img src="./components/img/portaestiba_1.jpg" alt="" class="img_mmt rounded-md">
            </div>
            <div class="w-1/2 h-full md:p-24 xl:p-32">
                <div class="w-full h-full bg-nonary rounded-md flex flex-col justify-center items-center">
                    <h1
                        class="sub_title  font-Fuente_terciaria text-septenary text-center text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl">
                        SERVICIO TÉCNICO PORTAESTIBAS</h1>
                    <p
                        class="text_mmt_2 list-disc list-outside  text-primary pt-5 ml-4 text-xl md:text-2xl xl:text-3xl 2xl:text-4xl space-y-2">
                        Contamos con dos tipos de mantenimiento preventivo-correctivo y para que su operación no se vea afectada prestamos nuestros portaestibas por el tiempo que demore la refracción.</p>
                </div>
            </div>
        </div>
    </section></template>

    <style >

.img_mmt { 
    width: 300px; height: 350px; 
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

.text_mmt_1  {
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

.text_mmt_2  {
font-family: 'Josefin Sans', sans-serif;
font-size: 25px;
letter-spacing: 0px;
word-spacing: 0px;
font-weight: normal;
text-decoration: none;
font-style: normal;
font-variant: normal;
text-transform: none;
text-align: justify;
}
</style>
