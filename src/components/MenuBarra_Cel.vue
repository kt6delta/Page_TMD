<template>
    <header class="h-1/7 flex flex-col">
        <nav class="bg-black-0 w-full h-full">
            <ul class="flex justify-center items-center h-full">
                <li class="mr-4">
                    <button @click="OcultarMenu">
                        <figure>
                            <img src="./img/menu_lineas_blancas_cel.png" alt="menu" title="menu"
                                class="w-10 h-1/8">
                        </figure>
                    </button>
                </li>
                <li>
                    <button>
                        <figure>
                            <img src="./icons/ico_tmd_white_n.svg" alt="Montacarga" title="logo"
                                class="w-64 h-1/8">
                        </figure>
                    </button>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script>
export default {
    methods: {
        OcultarMenu() {
            this.$emit('actualizar-menu', !this.menuProp);
        }
    },
    props: {
        menuProp: {
            type: Boolean,
            required: true,
        }
    },
};
</script>