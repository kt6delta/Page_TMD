<router-view v-if="!mostrarContenido"></router-view>

<div v-if="mostrarContenido">
    <div v-if="mostrarMenu" class="bg-yellow-2 w-full h-screen flex flex-col">
    </div>
    <div v-if="!mostrarMenu" class=" bg-yellow-2">
    </div>
</div>
//la estructura la puedo cambiar?