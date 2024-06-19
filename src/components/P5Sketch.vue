<script setup>
import { onMounted, ref } from "vue";
import p5 from "p5";

const props = defineProps(["scriptCode"]);

const sketch = new Function("p", props.scriptCode);

const canvas = ref(null);

onMounted(() => new p5(sketch, canvas.value));
</script>

<template>
  <div ref="canvas" class="h-full w-full flex justify-center items-center overflow-hidden"></div>
</template>
