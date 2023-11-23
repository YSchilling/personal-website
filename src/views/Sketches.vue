<script setup>
import Navbar from "../components/Navbar.vue";
import SketchesGrid from "../components/SketchesGrid.vue";
</script>

<template>
  <section class="grid grid-cols-12">
    <Navbar class="col-start-9 col-span-3 lg:col-start-9 lg:col-span-2 justify-self-end my-24 lg:mt-24" />
    <h1
      class="text-4xl md:text-5xl xl:text-6xl row-start-2 justify-self-center lg:justify-self-start col-start-3 col-span-8 leading-tight flex items-center text-center lg:text-left">
      <b>My <span id="title">Creative Coding</span> Sketches</b>
    </h1>
    <h2 class="row-start-3 col-start-3 col-span-8 font-roboto">// Click on one of the gifs to view the full sketch!</h2>
    <SketchesGrid class="row-start-4 col-start-2 col-span-10 lg:col-start-3 lg:col-span-8" />
  </section>
</template>

<style scoped>
#title {
  color: var(--highlight-color);
}

section {
  grid-template-rows: 20vh 20vh 10vh 1fr;
}
</style>
