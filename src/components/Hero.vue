<script setup>
import FancyButton from "./FancyButton.vue";
import Navbar from "./Navbar.vue";
</script>

<template>
  <section class="grid grid-cols-12 grid-rows-3 min-h-screen">
    <header class="col-start-3 col-span-8 mt-24 flex items-center justify-between h-6">
      <div class="flex items-center">
        <img src="/logo.svg" alt="Logo">
        <h2 class="text-2xl">Yorick Schilling</h2>
      </div>
      <Navbar/>
    </header>
    <h1
      class="text-4xl md:text-5xl xl:text-6xl row-start-2 justify-self-center lg:justify-self-start col-start-3 col-span-8 leading-tight flex items-center text-center lg:text-left"
    >
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
