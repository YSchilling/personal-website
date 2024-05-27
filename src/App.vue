<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const loadingCurtain = ref();

function removeCurtain() {
  loadingCurtain.value.classList.toggle("movedCurtain");
}

onMounted(() => window.addEventListener("load", removeCurtain));
onUnmounted(() => window.removeEventListener("load", removeCurtain));
</script>

<template>
  <div
    ref="loadingCurtain"
    class="w-screen h-screen fixed top-0 left-0 z-50 transition-all duration-1000"
    style="background-color: var(--highlight-color)"></div>
  <router-view />
</template>

<style scoped></style>
