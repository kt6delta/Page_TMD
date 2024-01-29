<template>
    <main class="w-full md:h-auto bg-nonary flex flex-col md:flex-row justify-center items-center">
        <section class="flex items-center justify-center w-full h-1/4 lg:h-screen">
            <figure class="relative">
                <img src="./components/img/montacarga_1_cel-gris.jpeg" class="mx-auto" alt="Contacto" title="Contacto">
                <p
                    class="text-black-0 font-dancing font-bold text-center text-4xl md:text-6xl lg:text-8xl p-5 bg-nonary opacity-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md md:hidden">
                    Contactenos
                </p>
            </figure>
        </section>
        <div class="w-full bg-black-0 sm:w-3/4 md:bg-gray-light md:w-1/2 lg:w-1/3 xl:w-1/4 my-10">
            <form
                class="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 container mx-auto h-full flex flex-col justify-center items-center">
                <div class="w-full font-Fuente_terciaria text-xl text-white md:text-black-0">
                    <h1 class="text-center font-Fuente_secundaria text-4xl hidden md:block md:text-5xl mb-5">
                        Contactactenos</h1>
                    <label for="Nombre">Ingrese el nombre</label>
                    <input type="text"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-black-1 text-xl font-serif italic leading-tight focus:outline-none focus:border-gray focus:ring-2 focus:ring-gray-light bg-yellow mb-4 md:bg-white placeholder-gray"
                        placeholder="Nombre">
                    <label for="Correo">Ingrese el correo electronico</label>
                    <input type="text"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-black-1 text-xl font-serif italic leading-tight focus:outline-none focus:border-gray focus:ring-2 focus:ring-gray-light bg-yellow md:bg-white mb-4 placeholder-gray"
                        placeholder="Correo electronico">
                    <label for="Telefono">Ingresa el telefono</label>
                    <input type="text"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-black-1 text-xl font-serif italic leading-tight focus:outline-none focus:border-gray focus:ring-2 focus:ring-gray-light bg-yellow md:bg-white mb-4 placeholder-gray"
                        placeholder="Telefono">
                    <label for="Nombre">Ingrese tipo de servicio</label>
                    <div class="relative">
                        <select
                            class="text-black-1 block shadow appearance-none border rounded w-full py-2 px-3 text-sm sm:text-base md:text-lg lg:text-xl font-serif italic leading-tight focus:outline-none focus:border-gray focus:ring-2 focus:ring-gray-light bg-yellow md:bg-white mb-4 focus:bg-white focus:text-black-0">
                            <option>Alquiler</option>
                            <option>Mantenimiento</option>
                            <option>Venta</option>
                        </select>
                        <div class="absolute h-9 inset-y-0 right-0 flex items-center pointer-events-none">
                            <svg class="h-6 w-6 mb-1 md:h-7 md:w-7 md:mb-0 lg:h-8 lg:w-8 text-black-1 ml-auto mr-4"
                                viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="100,100 20,100 100,20" fill="currentColor" stroke="none" />
                            </svg>
                        </div>
                    </div>
                    <label for="Correo">Mensaje</label>
                    <textarea id="message" name="message" rows="4"
                        class="form-textarea shadow appearance-none border rounded w-full py-2 px-3 text-gray text-xl font-serif italic leading-tight focus:outline-none focus:border-gray focus:ring-2 focus:ring-gray-light bg-yellow md:bg-white"></textarea>
                    <div class="flex items-center justify-between md:justify-center mt-5">
                        <button
                            class="bg-black hover:bg-gray text-white text-xl font-serif font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4 md:w-28 h-14 shadow-md active:bg-secondary"
                            type="button">
                            Enviar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </main>


    <section id="focusUser" class="text-center dark:bg-gray bg-gray-light md:w-full md:h-5/6 md:bg-primary">
        <div class="container mx-auto md:p-14">
            <h1 class="mb-5 font-Fuente_secundaria text-5xl text-center text-pri text-black-0 md:text-nonary">Informacion
            </h1>
            <div class="md:w-full md:h-4/6 md:flex md:flex-row md:shadow-md md:rounded-md md:bg-septenary">
                <div class="mx-5 my-5 md:w-1/2 md:h-full md:p-5 md:flex md:flex-col md:space-y-6 md:bg-septenary md:rounded-s-md">
                    <div class="flex flex-row space-x-3">
                        <a href="https://www.google.com/maps/place/Tecnimontacargas+Dual+Ltda/@4.68237,-74.14496,17z/data=!4m6!3m5!1s0x8e3f9db07b05ee2d:0x7e11bf0a9122222d!8m2!3d4.68237!4d-74.14496!16s%2Fg%2F11gtz7t5y3?hl=es"
                            target="_blank">
                            <figure class=" flex flex-col items-center">
                                <img src="./components/img/mapa_icon_cel.png" alt="mapa" title="Carrera 108 # 22F -21"
                                    class="w-14 h-14">
                            </figure>
                        </a>
                        <p class="pt-2 font-Fuente_terciaria text-primary text-xl">Carrera 108 # 22F -21<br>Bogotá DC -
                            (Colombia)
                        </p>
                    </div>
                    <div class="flex flex-row space-x-3">
                        <figure class=" flex flex-col items-center">
                            <img src="./components/img/telefono_icon_cel.png" alt="telefono" title="3244298326"
                                class="w-14 h-14">
                        </figure>
                        <p class="pt-2 font-Fuente_terciaria text-primary text-xl">
                            (+57) 601 5408640<br>
                            (+57) 3244298326
                        </p>
                    </div>
                    <div class="flex flex-row space-x-3">
                        <a href="https://wa.me/573168770708" target="_blank">
                            <figure class=" flex flex-col items-center">
                                <img src="./components/img/whatsap_icon_cel.png" alt="whatsapp" title="(+57) 3168770708"
                                    class="w-14 h-14">
                            </figure>
                        </a>
                        <p class="pt-2 font-Fuente_terciaria text-primary text-xl">(+57) 3168770708</p>
                    </div>
                    <div class="flex flex-row space-x-3">
                        <a href="mailto:gestion@tecnimontacargasdual.com" target="_blank">
                            <figure class="flex flex-col items-center">
                                <img src="./components/img/correo_icon_cel.png" alt="correo"
                                    title="gestion@tecnimontacargasdual.com" class="w-16 h-14">
                            </figure>
                        </a>
                        <p class="w- pt-2 font-Fuente_terciaria text-primary text-xl break-all">
                            comercial1@tecnimontacargasdual.com
                        </p>
                    </div>
                </div>
                <!-- Mapa -->
                <div class="flex flex-col items-center md:w-1/2">
                    <iframe id="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d994.125562552674!2d-74.14504795920652!3d4.68241572552794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9db07b05ee2d%3A0x7e11bf0a9122222d!2sTecnimontacargas%20Dual%20Ltda!5e0!3m2!1ses!2sco!4v1682447221490!5m2!1ses!2sco"
                        width="350" height="250" style="border:0;" screen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade" class="md:w-full md:h-full md:rounded-e-md"></iframe>
                    <div class="w-1/6 h-1/6 mt-4 md:hidden">
                        <a class="dark:hidden" href="#">
                            <svg viewBox="0 0 100 100">
                                <polygon points="5,95 50,5 95,95" fill="none" stroke="#f9ba4e" stroke-width="6" />
                                <rect x="0" y="90" width="100" height="10" fill="#EBEBEB" stroke-width="1.4" />
                            </svg>
                        </a>
                        <a class="hidden dark:block" href="#">
                            <svg viewBox="0 0 100 100">
                                <polygon points="5,95 50,5 95,95" fill="none" stroke="#f9ba4e" stroke-width="6" />
                                <rect x="0" y="90" width="100" height="10" fill="#595959" stroke-width="1.4" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
