<template>
    <div class="fixed -bottom-0 right-0" v-show="showImage">
        <figure class="self-center order-last">
            <img src="./img/chat_icon_cel.png" alt="chat" title="chate con nosotros" class="w-14 h-14">
        </figure>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showImage: false,
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            this.showImage= window.scrollY < window.innerHeight;
        },
    },
};
</script>

