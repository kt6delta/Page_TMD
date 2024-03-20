<template>
    <div class="w-full h-3/4 relative" data-aos="fade-up">
        <div class="flex flex-col md:flex-row md:my-5">
            <div class="flex items-center md:w-4/5 mr-5">
                <figure class="w-full h-1/6 md:h-auto items-center">
                    <img :src="images[0]" alt="montacarga" title="alquiler" class="rounded-md mx-auto">
                </figure>
            </div>
            <div class="hidden md:block items-center md:w-1/6">
                <figure class="mx-auto h-auto md:w-full md:h-1/3 flex md:justify-center md:items-center">
                    <img :src="images[1]" alt="montacarga 2" class="rounded">
                </figure>
                <figure class="md:mx-auto md:w-full md:h-1/3 flex md:justify-center md:items-end">
                    <img :src="images[2]" alt="montacarga 3" class="rounded">
                </figure>
                <figure class="md:mx-auto md:w-full md:h-1/3 flex justify-center items-end">
                    <img :src="images[3]" alt="montacarga 4" class="rounded">
                </figure>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        images: {
            type: Array,
            required: true,
        },
    },
};
</script>