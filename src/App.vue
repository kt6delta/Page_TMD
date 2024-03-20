<script>
import MenuBarra from './components/MenuBarra.vue';
import Chat_Flotante from './components/Chat_Flotante.vue';
import Footer from './components/Footer.vue';
export default {
  components: {
    MenuBarra,
    Chat_Flotante,
    Footer
  },
}
</script>

<template>
  <MenuBarra />
  <!--Para cambio de Pestalla en vue3-->
  <router-view></router-view>
  <Chat_Flotante />
  <Footer />
</template>