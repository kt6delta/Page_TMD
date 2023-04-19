<script setup>
import { ref } from 'vue'

// Inicializamos el contador en 0 utilizando una referencia reactiva
const contador = ref(0)

function aumentarContador() {
  contador.value++ // Aumentamos el valor del contador en 1
}
</script>
<template>
    <div>
      <p>Contador: {{ contador }}</p>
      <button @click="aumentarContador">Aumentar contador</button>
    </div>
  </template>

<style scoped>
</style>
