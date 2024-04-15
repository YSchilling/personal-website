<script setup>
import HeaderBar from "./HeaderBar.vue";
</script>

<template>
  <section class="grid grid-cols-12 grid-rows-3 min-h-screen">
    <HeaderBar></HeaderBar>
    <h1
      class="text-4xl md:text-5xl xl:text-6xl mt-8 lg:mt-0 row-start-2 justify-self-center lg:justify-self-start col-start-3 col-span-8 leading-tight flex items-center text-center lg:text-left">
      <b>
        Hey! I'm <span class="text-highlight">Yorick Schilling</span><br />
        A young Software Engineer <br />
        & Entrepreneurship Enthusiast!
      </b>
    </h1>
  </section>
</template>

<style scoped>
@media (max-width: 1024px) {
  section {
    grid-template-rows: max-content 1fr 1fr;
  }
}
</style>
