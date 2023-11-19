<script setup>
const props = defineProps(["title"]);
</script>

<template>
  <div
    class="w-10/12 md:max-w-2xl flex items-center justify-between px-3 py-2 my-2 border-transparent rounded-lg hover:scale-105 duration-150"
    style="width: 90vw; background-color: #202020"
  >
    <slot />
    <h5 class="text-white">{{ title }}</h5>
    <div class="w-12 h-12"></div>
  </div>
</template>
