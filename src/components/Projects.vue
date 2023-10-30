<script setup>
import ProjectCard from './ProjectCard.vue';
import projects from '../data/projects.json';
</script>

<template>
  <section class="min-h-screen grid grid-cols-12 grid-rows-3">
    <h2 class="row-start-1 col-start-3 col-span-8 text-4xl self-end mb-8 font-roboto">// Projects</h2>
    <swiper-container :free-mode="true" :slides-per-view="1" :breakpoints="{
      1024: {
        slidesPerView: 2,
      },
      1536: {
        slidesPerView: 3,
      },
    }" class="swiper row-start-2 col-start-3 col-span-8 w-full h-max">
      <swiper-slide v-for="project in projects">
        <ProjectCard :project-data="project"></ProjectCard>
      </swiper-slide>
    </swiper-container>
  </section>
</template>

<style scoped></style>