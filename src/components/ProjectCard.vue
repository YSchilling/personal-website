<script setup>
import GitHubIcon from './icons/GitHubIcon.vue'

const props = defineProps(['projectData'])
</script>

<template>
  <div class="bg-gray-900 border border-transparent rounded p-4 flex flex-col w-80 flex-shrink-0">
    <img :src="projectData.imgURL" alt="" class="mb-6">
    <h3 class="text-2xl mb-3"><b>{{ projectData.title }}</b></h3>
    <p class="mb-10">{{ projectData.description }}</p>
    <button class="w-max mb-5">> Show tech stack</button>
    <a v-if="projectData.githubURL != ''" href=""
      class="flex items- gap-4 border border-white rounded-xl py-2 px-4 w-max font-roboto hover:bg-white hover:text-black">
      <GitHubIcon></GitHubIcon>GitHub
    </a>
  </div>
</template>

<style scoped>
img {
  aspect-ratio: 4/3;
}
</style>