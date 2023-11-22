<script setup>
import FancyButton from "./FancyButton.vue";
</script>

<template>
  <ul class="flex gap-4">
    <li>
      <router-link to="/"><FancyButton>Home</FancyButton></router-link>
    </li>
    <li>
      <router-link to="/sketches"
        ><FancyButton>Sketches</FancyButton></router-link
      >
    </li>
    <li>
      <router-link to="/linktree"
        ><FancyButton>Linktree</FancyButton></router-link
      >
    </li>
  </ul>
</template>
