<script setup>
import FancyButton from "../../components/FancyButton.vue";
import HeaderBar from "../../components/HeaderBar.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <HeaderBar />
  <main class="flex flex-col items-center justify-between h-screen text-center">
    <h1 class="text-4xl md:text-6xl lg:text-8xl font-montserrat mt-64 font-semibold">Creative Coding</h1>
    <hr />
    <h2 class="text-base md:text-lg lg:text-2xl font-montserrat">Exploring the patterns in our informative world</h2>
    <hr />
    <RouterLink to="/creativecoding/explorer">
      <FancyButton class="text-base md:text-lg lg:text-2xl border px-4 md:px-8 py-1 md:py-2 mb-64 lg:mb-32"
        >Start Exploring</FancyButton
      ></RouterLink
    >
  </main>
</template>

<style>
hr {
  border: 1px solid white;
  height: 1px;
  width: 64px;
  transform: rotate(90deg);
}
</style>
