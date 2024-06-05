<script setup>
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

  intervalIDs.value.push(timer);

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

  intervalIDs.value.push(timer);

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
      intervalIDs.value.push(setTimeout(deleteHeader, 2 * 1000));
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
  intervalIDs.value = [];
});
</script>

<template>
  <section class="grid grid-cols-12 min-h-screen items-center justify-center lg:justify-start">
    <h1
      class="text-4xl md:text-5xl xl:text-6xl mt-8 lg:mt-0 col-start-2 col-span-10 lg:col-start-3 lg:col-span-8 leading-tight text-center lg:text-left font-poppins">
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
</style>
