<script setup>
import sketches from "../data/sketches.json";

function getSketchURL(fileName) {
  return new URL(`../assets/media/sketches/${fileName}`, import.meta.url).href;
}
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div v-for="sketch in sketches" class="sketch hover:scale-110 duration-200">
      <a :href="sketch.URL" target="_blank">
        <img :src="getSketchURL(sketch.fileName)" alt="" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.sketch {
  aspect-ratio: 16/9;
}
</style>
