<script >
import MenuLateral from './components/MenuLateral_Cel.vue';
import Footer_Cel from './components/Footer_Cel.vue';
import MenuBarra_Cel from './components/MenuBarra_Cel.vue';
import Chat_Flotante from './components/Chat_Flotante.vue';
export default {
    components: {
        MenuLateral,
        Footer_Cel,
        MenuBarra_Cel,
        Chat_Flotante
    },
    data() {
        return {
            mostrarMenu: false,
        };
    },
    methods: {
        actualizarMenu(nuevoValor) {
            this.mostrarMenu = nuevoValor;
        },
    }
};
</script>

<template>
        <MenuLateral :menuProp="mostrarMenu" @actualizar-menu="actualizarMenu" />
        <div v-show="!mostrarMenu" class=" bg-yellow-2">
            <MenuBarra_Cel :menuProp="mostrarMenu" @actualizar-menu="actualizarMenu" />

            <main class="bg-white dark:bg-gray w-full h-3/4 relative">
                <div class="flex items-center flex-col">
                    <figure class="w-full h-1/6">
                        <img src="./components/img/montacarga_5.jpeg" alt="montacarga" title="alquiler">
                    </figure>
                    <h2 class="text-yellow-2 text-3xl font-serif font-bold text-center mx-4 mt-4 mb-1">
                        Montacargas
                    </h2>
                    <p class="text-gray dark:text-gray-light text-xl font-serif text-center mx-2 mb-4">
                        <span class="transform -skew-x-12 inline-block">Actualmente nuestro servicio de alquiler cuenta con
                            una flota amplia de máquinas y consideramos
                            que nuestro éxito está fundamentado en la calidad de nuestros equipos,</span>
                        <span class="transform -skew-x-12 inline-block"> soporte técnico y asesoría que permite a todos
                            nuestros clientes mantener su operación logística
                            de manera continua y eficiente.</span>
                        <span class="transform -skew-x-12 inline-block">
                            Nuestra experiencia, solidez y compromiso, permiten optimizar los recursos, aumentar la
                            eficiencia y
                            disminuir los costos operativos de nuestros clientes.
                        </span>
                    </p>
                    <figure class="w-full h-1/6">
                        <img src="./components/img/bateria.jpeg" alt="bateria de traccion" title="alquiler">
                    </figure>
                    <h2 class="text-yellow-2 text-3xl font-serif font-bold text-center mx-4 mt-4 mb-1">
                        Baterias de Traccion
                    </h2>
                    <p class="text-gray dark:text-gray-light text-xl font-serif text-center mx-1 mb-4">
                        <span class="transform -skew-x-12 inline-block">Largas jornadas de trabajo y sus baterías no las
                            soportan, en Tecnimontacargas Dual encontrarás una
                            línea de baterías nuevas y seminuevas para la venta y alquiler. 12V 24V 36V 48V 80V.</span>
                    </p>
                </div>
                <Chat_Flotante />
            </main>
            <Footer_Cel />
        </div>

</template>