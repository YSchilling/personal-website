<script setup>
import { onMounted, ref } from "vue";
import p5 from "p5";

const sketch = function (p) {
  let deg = 0;

  p.setup = () => {
    p.createCanvas(512, 512);
  };

  p.draw = () => {
    p.background(p.color("#111111"));
    p.translate(p.width / 2, p.height / 2);
    p.noFill();
    p.stroke(p.color(255, 255, 255));
    p.strokeWeight(2);

    p.rotate(p.radians(deg));

    let size = 64;
    p.square(-size / 2, -size / 2, size);

    p.rotate(p.radians(-deg * 2));

    let size2 = 128;
    p.square(-size2 / 2, -size2 / 2, size2);

    p.rotate(p.radians(deg * 2));

    let size3 = 256;
    p.square(-size3 / 2, -size3 / 2, size3);

    deg += 0.5;
  };
};

const canvas = ref(null);

onMounted(() => new p5(sketch, canvas.value));
</script>

<template>
  <div
    ref="canvas"
    class="absolute top-0 h-full w-full flex justify-center items-center overflow-hidden"
    style="z-index: -100; filter: blur(2px)"></div>
</template>
