<script setup>
import LinktreeItem from "../components/LinktreeItem.vue";
import GitHubIconSVG from "../components/icons/GitHubIconSVG.vue";
import LinkedinIcon from "../components/icons/LinkedinIcon.vue";
import PersonalWebsiteIcon from "../components/icons/PersonalWebsiteIcon.vue";
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <img
      class="w-24 h-24 border-transparent rounded-full mt-24 mb-4"
      src="../assets/media/profile_picture.jpeg"
      alt="Profile Picture" />
    <h5 class="text-white text-xl font-bold">Yorick Schilling</h5>
    <p class="text-gray-400 mb-4">Computer Science | Business | Travel</p>
    <!-- START OF LIST -->
    <router-link to="/">
      <LinktreeItem title="Personal Website">
        <PersonalWebsiteIcon class="w-12 h-12" />
      </LinktreeItem>
    </router-link>
    <a href="https://linkedin.com/in/yschilling" target="_blank">
      <LinktreeItem title="LinkedIn">
        <LinkedinIcon class="w-12 h-12" />
      </LinktreeItem>
    </a>
    <a href="https://github.com/yschilling" target="_blank">
      <LinktreeItem title="GitHub">
        <GitHubIconSVG class="w-12 h-12" />
      </LinktreeItem>
    </a>
    <div class="w-10/12 h-16 md:max-w-2xl px-3 py-2 my-2 flex justify-center items-end">
      <h2 class="h-max">Competitive Programming Sites</h2>
    </div>
    <a href="https://www.hackerrank.com/profile/yorick1" target="_blank">
      <LinktreeItem title="HackerRank">
        <img
          class="w-12 h-12"
          src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F40%2FHackerRank_Icon-1000px.png%2F480px-HackerRank_Icon-1000px.png&sp=1716895167Tf48196f86040495342e286761c8b3ff83bd4aa9650658eea0056e346696513c5"
          alt="" />
      </LinktreeItem>
    </a>
    <a href="https://exercism.org/profiles/YSchilling" target="_blank">
      <LinktreeItem title="Exercism">
        <img
          src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fuser-images.githubusercontent.com%2F38899847%2F48952150-634e9b80-eefe-11e8-890e-7a233d56df65.png&sp=1716895353T52196122e338ffabf2f3ecbad625f92b091afb5ff746b309a0b2ab08f44cc5b6"
          alt="" />
      </LinktreeItem>
    </a>
  </div>
</template>
