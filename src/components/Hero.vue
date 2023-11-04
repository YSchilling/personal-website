<script setup>

</script>

<template>
  <section class="min-h-screen grid grid-rows-3 grid-cols-1 lg:grid-cols-12">
    <router-link to="/linktree"
      class="lg:col-start-10 self-start justify-self-end mt-24 border border-white text-center p-4 mr-6 lg:mr-0 hover:text-black hover:bg-white">Linktree</router-link>
    <h1
      class="text-4xl md:text-5xl xl:text-6xl row-start-2 justify-self-center lg:justify-self-start lg:col-start-3 col-span-8 leading-tight flex items-center text-center lg:text-left">
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
  color: var(--highlight-color)
}
</style>