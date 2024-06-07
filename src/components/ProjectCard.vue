<script setup>
import GitHubIconSVG from "./icons/GitHubIconSVG.vue";
import TechStackButton from "./TechStackButton.vue";
import FancyButton from "./FancyButton.vue";
import LinkIcon from "./icons/LinkIcon.vue";

const props = defineProps(["projectData"]);
const imgURL = new URL(`../assets/media/projects/${props.projectData.fileName}`, import.meta.url).href;
</script>

<template>
  <div class="border border-white rounded p-4 flex flex-col flex-shrink-0 mx-4">
    <img width="360" height="240" :src="imgURL" alt="" class="mb-6 border border-white self-center" />
    <h3 class="text-highlight text-2xl mb-3 font-semibold font-montserrat">
      {{ projectData.title }}
    </h3>
    <p class="mb-10">{{ projectData.description }}</p>
    <TechStackButton class="w-max mb-5" :tech-stack="projectData.techStack" />
    <div class="flex gap-4">
      <a v-if="projectData.githubURL != ''" :href="projectData.githubURL" target="_blank">
        <FancyButton> <GitHubIconSVG class="w-5 h-5" style="margin-bottom: 2px" />GitHub </FancyButton>
      </a>
      <a v-if="projectData.projectURL != ''" :href="projectData.projectURL" target="_blank">
        <FancyButton> <LinkIcon />View Project</FancyButton>
      </a>
    </div>
  </div>
</template>

<style scoped>
img {
  aspect-ratio: 3/2;
}
</style>
