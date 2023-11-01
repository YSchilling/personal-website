<script setup>
import GitHubIcon from './icons/GitHubIcon.vue'
import ExpandableButton from './ExpandableButton.vue';

const props = defineProps(['projectData'])
const imgURL = new URL(`../assets/media/${props.projectData.fileName}`, import.meta.url).href
</script>

<template>
  <div class="border border-white rounded p-4 flex flex-col w-80 flex-shrink-0">
    <img :src="imgURL" alt="" class="mb-6 border border-white">
    <h3 id="title" class="text-2xl mb-3"><b>{{ projectData.title }}</b></h3>
    <p class="mb-10">{{ projectData.description }}</p>
    <ExpandableButton class="w-max mb-5" :tech-stack="projectData.techStack" />
    <a v-if="projectData.githubURL != ''" href=""
      class="flex items- gap-4 border border-white rounded-xl py-2 px-4 w-max font-roboto hover:bg-white hover:text-black">
      <GitHubIcon></GitHubIcon>GitHub
    </a>
  </div>
</template>

<style scoped>
#title {
  color: var(--highlight-color)
}

img {
  aspect-ratio: 4/3;
}
</style>