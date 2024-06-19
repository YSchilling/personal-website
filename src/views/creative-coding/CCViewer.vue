<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import ArrowDownIcon2 from "../../components/icons/ArrowDownIcon2.vue";
import sketches from "../../data/sketches.json";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

const sketch = ref(sketches.find((sketch) => sketch.title == useRoute().params.sketch));
const highlightedCode = hljs.highlight(sketch.value.code, { language: "javascript" });

let splittedCode = highlightedCode.value.split("\n");
let formattedCode = ref("");
for (let i = 0; i < splittedCode.length - 1; i++) {
  formattedCode.value += `<span style="color: #666">${i}:</span> ${splittedCode[i]}\n`;
}
</script>

<template>
  <div class="w-full flex justify-center">
    <main class="flex flex-col items-center min-h-screen max-w-screen-xl w-full">
      <RouterLink to="/creativecoding/explorer" class="text-3xl mt-16 self-end">X</RouterLink>
      <img src="https://placehold.co/640x360" alt="" style="height: 70vh; aspect-ratio: 16/9" />
      <h2 class="text-3xl my-8">Scroll to learn more</h2>
      <ArrowDownIcon2 class="mb-32" />
      <!-- Detail Panel -->
      <section class="w-full flex justify-center" style="margin-bottom: 15vh">
        <div class="border border-white p-12 grow">
          <h2 class="text-4xl font-poppins font-bold text-highlight">{{ sketch.title }}</h2>
          <p class="my-8" v-html="sketch.description"></p>
          <h3 class="font-jetbrains text-3xl mb-2">The Code</h3>
          <div class="border p-1" style="border-color: var(--highlight-color); background-color: #1f1f1f">
            <pre><code class="font-jetbrains" v-html="formattedCode"></code></pre>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
