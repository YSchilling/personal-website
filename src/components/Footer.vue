<script setup>

</script>

<template>
    <section class="grid grid-cols-12 items-center justify-items-center h-16">
        <div id="line" class="w-full h-px col-start-3 col-span-8 self-start bg-white from-black"></div>
        <div class="col-start-3 col-span-8">©2023 Yorick Schilling</div>
    </section>
</template>

<style scoped>
section {
    grid-template-rows: max-content 1fr;
}

#line {
    background: rgb(0, 0, 0);
    background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(0, 0, 0, 1) 100%);
}
</style>