<script setup>
import LinktreeItem from "../components/LinktreeItem.vue";
import GitHubIconSVG from "../components/icons/GitHubIconSVG.vue";
import LinkedinIcon from "../components/icons/LinkedinIcon.vue";
import PersonalWebsiteIcon from "../components/icons/PersonalWebsiteIcon.vue";
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <img class="w-24 h-24 border-transparent rounded-full mt-24 mb-4" src="../assets/media/profile_picture.jpeg"
      alt="Profile Picture" />
    <h5 class="text-white text-xl font-bold">Yorick Schilling</h5>
    <p class="text-gray-400 mb-4">Computer Science | Business | Travel</p>
    <!-- START OF LIST -->
    <router-link to="/">
      <LinktreeItem title="Personal Website">
        <PersonalWebsiteIcon />
      </LinktreeItem>
    </router-link>
    <a href="https://linkedin.com/in/yschilling" target="_blank">
      <LinktreeItem title="LinkedIn">
        <LinkedinIcon />
      </LinktreeItem>
    </a>
    <a href="https://github.com/yschilling" target="_blank">
      <LinktreeItem title="GitHub">
        <GitHubIconSVG />
      </LinktreeItem>
    </a>
    <div class="w-10/12 h-16 md:max-w-2xl px-3 py-2 my-2 flex justify-center items-end">
      <h2 class="h-max">Competitive Programming Sites</h2>
    </div>
    <a href="https://www.hackerrank.com/profile/yorick1" target="_blank">
      <LinktreeItem title="HackerRank">
        <div class="w-12 h-12"></div>
      </LinktreeItem>
    </a>
    <a href="https://exercism.org/profiles/YSchilling" target="_blank">
      <LinktreeItem title="Exercism">
        <div class="w-12 h-12"></div>
      </LinktreeItem>
    </a>
  </div>
</template>
