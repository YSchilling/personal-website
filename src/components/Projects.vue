<script setup>
import ProjectCard from "./ProjectCard.vue";
import projects from "../data/projects.json";
</script>

<template>
  <section class="grid grid-cols-12 grid-rows-3">
    <h2 class="row-start-1 col-start-2 col-span-10 md:col-start-3 md:col-span-8 text-4xl self-end mb-8 font-roboto">
      // Projects
    </h2>
    <swiper-container free-mode="true" slides-per-view="auto" space-between="30"
      class="swiper row-start-2 col-start-2 col-span-10 md:col-start-3 md:col-span-8 w-full h-max">
      <swiper-slide v-for="project in projects" class="max-w-md">
        <ProjectCard :project-data="project"></ProjectCard>
      </swiper-slide>
    </swiper-container>
  </section>
</template>

<style scoped></style>
