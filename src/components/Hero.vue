<script setup>
import FancyButton from "./FancyButton.vue";
</script>

<template>
  <section class="min-h-screen grid grid-rows-3 grid-cols-12">
    <router-link to="/linktree" class="col-start-10 mt-24"
      ><FancyButton>Linktree</FancyButton></router-link
    >
    <h1
      class="text-4xl md:text-5xl xl:text-6xl row-start-2 justify-self-center lg:justify-self-start col-start-3 col-span-8 leading-tight flex items-center text-center lg:text-left"
    >
      <b>
        Hey! I'm <span id="title">Yorick Schilling</span><br />
        A young Software Engineer <br />
        & Entrepreneurship Enthusiast!
      </b>
    </h1>
  </section>
</template>

<style scoped>
#title {
  color: var(--highlight-color);
}
</style>
