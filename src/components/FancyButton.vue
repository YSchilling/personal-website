<script setup></script>

<template>
  <div id="wrapper" class="w-max">
    <div id="button" class="flex justify-center items-center gap-2 px-4 py-3">
      <slot />
    </div>
  </div>
</template>

<style scoped>
#wrapper {
  position: relative;
}

#button {
  transition: color 0.3s;
}

#button:hover {
  color: var(--highlight-color);
}

#button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid #ffffff;
  opacity: 1;
  transition: opacity 0.3s;
}

#button:hover::before {
  opacity: 0;
}

#button::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid var(--highlight-color);
  transform: scaleX(1.2) scaleY(1.5);
  opacity: 0;
  transition: transform 0.3s, opacity 0.3s;
}

#button:hover::after {
  transform: scaleX(1) scaleY(1);
  opacity: 1;
}
</style>
