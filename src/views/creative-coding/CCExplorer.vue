<script setup>
import HeaderBar from "../../components/HeaderBar.vue";
import sketches from "../../data/sketches.json";

function getSketchURL(fileName) {
  return new URL(`../../assets/media/sketches/${fileName}`, import.meta.url).href;
}
</script>

<template>
  <HeaderBar />
  <main class="grid grid-cols-12 h-screen pb-16 pt-32">
    <div class="col-start-2 col-span-12 flex items-end mb-2">
      <button class="ml-8 mr-16 text-lg md:text-2xl">Add Filter</button>
      <ul class="flex gap-4">
        <li class="border border-white rounded-2xl py-1 px-2">Particle System</li>
        <li class="border border-white rounded-2xl py-1 px-2">Interactive</li>
      </ul>
    </div>
    <div
      class="col-start-2 col-span-10 border border-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full overflow-auto p-2 gap-2">
      <RouterLink :to="`/creativecoding/viewer/${sketch.title}`" v-for="sketch in sketches"
        ><img :src="getSketchURL(sketch.imgFileName)" alt="Sketch" width="640" height="360"
      /></RouterLink>
    </div>
  </main>
</template>
<style scoped>
main {
  grid-template-rows: max-content 1fr;
}
</style>
