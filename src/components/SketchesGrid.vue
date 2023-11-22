<script setup>
var sketches = Array(20);
sketches.fill(0);
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div v-for="sketch in sketches" class="sketch">
      <img src="https://placehold.co/160x90" alt="" class="w-full h-full" />
    </div>
  </div>
</template>

<style scoped>
.sketch {
  aspect-ratio: 16/9;
}
</style>
