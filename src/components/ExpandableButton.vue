<script setup>
import { ref } from "vue";

const props = defineProps(["techStack"]);
const isToggled = ref(false);
</script>

<template>
  <div class="flex flex-col w-fit">
    <button
      @click="isToggled = !isToggled"
      class="w-max mb-2 duration-200 border-b-2 hover:border-b-transparent"
    >
      Show tech stack
    </button>
    <ol v-if="isToggled" class="flex flex-wrap">
      <li
        v-for="tech in techStack"
        class="w-max px-4 py-2 mr-4 border border-white rounded-md"
      >
        {{ tech }}
      </li>
    </ol>
  </div>
</template>

<style scoped></style>
