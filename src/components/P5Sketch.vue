<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import p5 from "p5";

const props = defineProps(["scriptCode"]);

const canvas = ref(null);
const runtime = ref(null);

const sketch = new Function("p", props.scriptCode);

onMounted(() => (runtime.value = new p5(sketch, canvas.value)));
onUnmounted(() => runtime.value.remove());
</script>

<template>
  <div ref="canvas" class="h-full w-full flex justify-center items-center overflow-hidden"></div>
</template>
