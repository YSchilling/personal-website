<script setup>
const props = defineProps(["title"]);
</script>

<template>
  <div
    id="container"
    class="w-10/12 h-16 md:max-w-2xl grid grid-rows-1 justify-items-center items-center px-3 py-2 my-2 border-transparent rounded-lg hover:scale-105 duration-150"
    style="width: 90vw; background-color: #202020">
    <slot />
    <h5 class="text-white col-start-2">{{ title }}</h5>
  </div>
</template>

<style scoped>
#container {
  grid-template-columns: 48px 1fr 48px;
}
</style>
