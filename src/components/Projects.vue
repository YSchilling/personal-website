<script setup>
import ProjectCard from "./ProjectCard.vue";
import projects from "../data/projects.json";
import FancyButton from "./FancyButton.vue";
import GitHubIconSVG from "./icons/GitHubIconSVG.vue";
</script>

<template>
  <section class="grid grid-cols-12 mb-64">
    <h2 class="col-start-2 col-span-10 lg:col-start-3 lg:col-span-8 text-4xl self-end mb-8 font-roboto">
      //<span class="text-highlight ml-2">Projects</span>
    </h2>
    <h2 class="col-start-2 col-span-10 lg:col-start-3 lg:col-span-8 font-roboto mb-16">
      // Swipe to switch between projects!
    </h2>
    <swiper-container
      free-mode="true"
      slides-per-view="auto"
      space-between="30"
      class="swiper col-start-2 col-span-10 lg:col-start-3 lg:col-span-8 w-full h-max">
      <swiper-slide v-for="project in projects" class="max-w-md">
        <ProjectCard :project-data="project"></ProjectCard>
      </swiper-slide>
    </swiper-container>
    <a
      href="https://github.com/YSchilling?tab=repositories"
      target="_blank"
      class="col-start-2 col-span-10 lg:col-start-3 lg:col-span-8 justify-self-center mt-16">
      <FancyButton> <GitHubIconSVG class="w-5 h-5" style="margin-bottom: 2px" />View more on my GitHub! </FancyButton>
    </a>
  </section>
</template>
