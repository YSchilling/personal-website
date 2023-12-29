<script setup>
import Navbar from "../components/Navbar.vue";
import SketchesGrid from "../components/SketchesGrid.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <!-- TODO remove margin bottom if enough sketches that footer is on the bottom of the page-->
  <section id="mainsection" class="grid grid-cols-12 mb-96">
    <Navbar class="col-start-9 col-span-3 lg:col-start-9 lg:col-span-2 justify-self-end my-24 lg:mt-24" />
    <h1
      class="text-4xl md:text-5xl xl:text-6xljustify-self-center lg:justify-self-start col-start-3 col-span-8 leading-tight flex items-center text-center lg:text-left mb-8">
      <b>My <span class="text-highlight">Creative Coding</span> Sketches</b>
    </h1>
    <h2 class="col-start-3 col-span-8 font-roboto mb-16">// Click on one of the gifs to view the full sketch!</h2>
    <SketchesGrid class="col-start-2 col-span-10 lg:col-start-3 lg:col-span-8" />
  </section>
  <Footer />
</template>
