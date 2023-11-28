<script setup>
import ProjectCard from "./ProjectCard.vue";
import projects from "../data/projects.json";
import FancyButton from "./FancyButton.vue";
import GitHubIcon from "./icons/GitHubIcon.vue";
</script>

<template>
  <section class="grid grid-cols-12 mb-64">
    <h2 class="col-start-2 col-span-10 md:col-start-3 md:col-span-8 text-4xl self-end mb-8 font-roboto">
      // Projects
    </h2>
    <swiper-container free-mode="true" slides-per-view="auto" space-between="30"
      class="swiper col-start-2 col-span-10 md:col-start-3 md:col-span-8 w-full h-max">
      <swiper-slide v-for="project in projects" class="max-w-md">
        <ProjectCard :project-data="project"></ProjectCard>
      </swiper-slide>
    </swiper-container>
    <a href="https://github.com/YSchilling?tab=repositories" target="_blank"
      class="col-start-2 col-span-10 md:col-start-3 md:col-span-8 justify-self-center mt-16">
      <FancyButton>
        <GitHubIcon />View more on my GitHub!
      </FancyButton>
    </a>
  </section>
</template>

<style scoped></style>
