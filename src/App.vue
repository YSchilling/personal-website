<script setup>
import { ref } from "vue";

const loadingCurtain = ref();

function removeCurtain() {
  loadingCurtain.value.classList.toggle("movedCurtain");
}

window.addEventListener("load", removeCurtain);
</script>

<template>
  <div
    ref="loadingCurtain"
    class="w-screen h-screen fixed top-0 left-0 z-50 transition-all duration-1000"
    style="background-color: var(--highlight-color)"></div>
  <router-view />
</template>

<style scoped>
.movedCurtain {
  top: -100%;
}
</style>
