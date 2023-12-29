<script setup>

</script>

<template>
    <section class="grid grid-cols-12 items-center justify-items-center">
        <div id="line" class="w-full h-px col-span-12 self-start bg-white from-black mb-8"></div>
        <div class="col-span-12 mb-2">©2023 Yorick Schilling</div>
        <router-link to="/impressum" class="col-span-12 text-sm mb-4 duration-200 border-b-2 hover:border-b-transparent">Legal Notice - Impressum</router-link>
    </section>
</template>

<style scoped>
section {
    grid-template-rows: max-content 1fr;
}

#line {
    background: rgb(0, 0, 0);
    background: linear-gradient(90deg, rgb(17, 17, 17) 0%, rgb(255, 255, 255) 50%, rgb(17, 17, 17) 100%);
}
</style>