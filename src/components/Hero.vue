<script setup>
import HeaderBar from "./HeaderBar.vue";
import { ref, onMounted, onUnmounted } from "vue";

const header = ref();
const cursor = ref();
const intervalIDs = ref([]);

const headerAnimation = ref({
  state: 0,
  headerTexts: ["Software Engineer", "Startup Enthusiast", "Web Developer", "World Explorer"],
  currentIndex: 0,
});

function incrementSelectedHeader() {
  headerAnimation.value.currentIndex =
    (headerAnimation.value.currentIndex + 1) % headerAnimation.value.headerTexts.length;
}

function writeHeader(text) {
  let timer = setInterval(onTick, 50);
  let char = 0;

  function onTick() {
    header.value.innerHTML += text[char];
    char++;
    if (char === text.length) {
      clearInterval(timer);
      headerAnimation.value.state = 1;
    }
  }
}

function deleteHeader() {
  let timer = setInterval(onTick, 50);
  let char = 0;
  let text = header.value.innerHTML;

  function onTick() {
    header.value.innerHTML = header.value.innerHTML.slice(0, -1);
    char++;
    if (char === text.length) {
      clearInterval(timer);
      headerAnimation.value.state = 0;
    }
  }
}

function checkHeaderState() {
  switch (headerAnimation.value.state) {
    case 0:
      writeHeader(headerAnimation.value.headerTexts[headerAnimation.value.currentIndex]);
      incrementSelectedHeader();
      headerAnimation.value.state = 2;
      break;
    case 1:
      setTimeout(deleteHeader, 2 * 1000);
      headerAnimation.value.state = 2;
      break;
  }
}

onMounted(() => {
  intervalIDs.value.push(setInterval(() => cursor.value.classList.toggle("black"), 700));
  intervalIDs.value.push(setInterval(checkHeaderState, 50));
});
onUnmounted(() => {
  intervalIDs.value.forEach((id) => clearInterval(id));
});
</script>

<template>
  <section class="grid grid-cols-12 grid-rows-3 min-h-screen">
    <HeaderBar></HeaderBar>
    <h1
      class="text-4xl md:text-5xl xl:text-6xl mt-8 lg:mt-0 row-start-2 justify-self-center lg:justify-self-start col-start-2 col-span-10 lg:col-start-3 lg:col-span-8 leading-tight flex items-center text-center lg:text-left">
      <b>
        Hey! I'm <span class="text-highlight">Yorick Schilling</span><br />
        A <span ref="header"></span><span ref="cursor">_</span>
      </b>
    </h1>
  </section>
</template>

<style scoped>
.black {
  color: var(--main-bg-color);
}

@media (max-width: 1024px) {
  section {
    grid-template-rows: max-content 1fr 1fr;
  }
}
</style>
