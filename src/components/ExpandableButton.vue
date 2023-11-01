<script setup>
import { ref } from 'vue'

const props = defineProps(["techStack"])
const isToggled = ref(false)
</script>

<template>
    <div class="flex flex-col w-fit">
        <button @click="isToggled = !isToggled" class="w-max mb-2 duration-200 hover:scale-105">
            <span v-if="!isToggled">˃ </span>
            <span v-else>˅ </span>
            <span id="title">Show tech stack</span>
        </button>
        <ol v-if="isToggled" class="flex flex-wrap">
            <li v-for="tech in techStack" class="w-max px-4 py-2 mr-4 border border-white rounded-md">{{ tech }}</li>
        </ol>
    </div>
</template>

<style scoped>
#title {
    color: var(--secondary-highlight-color)
}
</style>