<script setup>
import { ref } from "vue";

const props = defineProps(["techStack"]);
const isToggled = ref(false);
</script>

<template>
  <div class="flex flex-col w-fit">
    <button
      @click="isToggled = !isToggled"
      class="w-max mb-2 duration-200 hover:border-b-transparent"
      style="border-bottom-width: 1px">
      {{ isToggled ? "Hide" : "Show" }} tech stack
    </button>
    <TransitionGroup>
      <ol v-if="isToggled" class="flex flex-wrap">
        <li v-for="tech in techStack" class="w-max px-4 py-2 mr-4 border border-white rounded-lg">
          {{ tech }}
        </li>
      </ol></TransitionGroup
    >
  </div>
</template>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
