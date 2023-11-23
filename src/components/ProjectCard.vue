<script setup>
import GitHubIcon from "./icons/GitHubIcon.vue";
import TechStackButton from "./TechStackButton.vue";
import FancyButton from "./FancyButton.vue";

const props = defineProps(["projectData"]);
const imgURL = new URL(
  `../assets/media/projects/${props.projectData.fileName}`,
  import.meta.url
).href;
</script>

<template>
  <div class="border border-white rounded p-4 flex flex-col flex-shrink-0 mx-4">
    <img :src="imgURL" alt="" class="mb-6 border border-white" />
    <h3 id="title" class="text-2xl mb-3">
      <b>{{ projectData.title }}</b>
    </h3>
    <p class="mb-10">{{ projectData.description }}</p>
    <TechStackButton class="w-max mb-5" :tech-stack="projectData.techStack" />
    <a v-if="projectData.githubURL != ''" :href="projectData.githubURL" target="_blank">
      <FancyButton>
        <GitHubIcon />GitHub
      </FancyButton>
    </a>
  </div>
</template>

<style scoped>
#title {
  color: var(--highlight-color);
}

img {
  aspect-ratio: 4/3;
}
</style>
