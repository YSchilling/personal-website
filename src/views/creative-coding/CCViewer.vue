<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import ArrowDownIcon2 from "../../components/icons/ArrowDownIcon2.vue";
import P5Sketch from "../../components/P5Sketch.vue";
import sketches from "../../data/sketches.json";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

const sketch = ref(sketches.find((sketch) => sketch.title == useRoute().params.sketch));

function formatCode(code) {
  //remove instance mode specific stuff
  let replacedCode = code.replaceAll("p.", "");
  replacedCode = replacedCode.replaceAll("setup = () =>", "function setup()");
  replacedCode = replacedCode.replaceAll("draw = () =>", "function draw()");

  //highlight
  const highlightedCode = hljs.highlight(replacedCode, { language: "javascript" });

  //format output
  let splittedCode = highlightedCode.value.split("\n");
  let formattedCode = "";
  for (let i = 0; i < splittedCode.length - 1; i++) {
    formattedCode += `<span style="color: #666">${i}:</span> ${splittedCode[i]}\n`;
  }

  return formattedCode;
}
</script>

<template>
  <div class="w-full flex justify-center">
    <main class="flex flex-col items-center min-h-screen max-w-screen-xl w-full">
      <RouterLink to="/creativecoding/explorer" class="text-3xl mt-16 self-end">X</RouterLink>
      <P5Sketch :scriptCode="sketch.code" style="height: 70vh; aspect-ratio: 16/9"></P5Sketch>
      <h2 class="text-3xl my-8">Scroll to learn more</h2>
      <ArrowDownIcon2 class="mb-32" />
      <!-- Detail Panel -->
      <section class="w-full flex justify-center" style="margin-bottom: 15vh">
        <div class="border border-white p-12 grow">
          <h2 class="text-4xl font-poppins font-bold text-highlight">{{ sketch.title }}</h2>
          <p class="my-8" v-html="sketch.description"></p>
          <h3 class="font-jetbrains text-3xl mb-2">The Code</h3>
          <div class="border p-1" style="border-color: var(--highlight-color); background-color: #1f1f1f">
            <pre><code class="font-jetbrains" v-html="formatCode(sketch.code)"></code></pre>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
