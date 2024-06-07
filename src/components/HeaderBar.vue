<script setup>
import FancyButton from "./FancyButton.vue";
import { ref, onMounted, onUnmounted } from "vue";

// burger menu

function toggleBurger() {
  var burger = document.getElementById("burger-menu");
  var overlay = document.getElementById("menu");
  burger.classList.toggle("close");
  overlay.classList.toggle("overlay");
}

function toggleHeader() {
  if (lastScrollPosition.value < window.scrollY) {
    header.value.classList.add("header-up");
    header.value.classList.remove("header-down");
  } else {
    header.value.classList.add("header-down");
    header.value.classList.remove("header-up");
  }

  lastScrollPosition.value = window.scrollY;
}

const header = ref(null);
const lastScrollPosition = ref(null);

onMounted(() => addEventListener("scroll", toggleHeader));
onUnmounted(() => removeEventListener("scroll", toggleHeader));
</script>

<template>
  <header
    ref="header"
    class="fixed w-full grid grid-cols-12 items-center h-16 mt-8 z-40 transition-all duration-500 header-down">
    <router-link to="/" class="col-start-2 col-span-2 lg:col-start-3 lg:col-span-3 flex items-center">
      <img src="/logo.svg" alt="Logo" />
      <h2 class="text-2xl hidden lg:block">Yorick Schilling</h2>
    </router-link>
    <!-- START Desktop -->
    <ul class="flex gap-4 col-start-8 col-span-3 justify-self-end">
      <li>
        <router-link to="/linktree">
          <FancyButton class="px-2">Contact</FancyButton>
        </router-link>
      </li>
    </ul>
    <!-- END Desktop -->
    <!-- MOBILE CURRENTLY NOT IN USE
    <\!-- START Mobile --\>
    <div @click="toggleBurger" id="burger-menu" class="lg:hidden col-start-10 col-span-2 justify-self-end">
      <span></span>
    </div>
    <\!-- END Mobile --\>
-->
  </header>
  <!-- MOBILE CURRENTLY NOT IN USE
  <\!-- START BURGER --\>
  <div id="menu" class="lg:hidden">
    <ul>
      <li class="flex justify-center">
        <router-link to="/linktree" class="w-max">
          <FancyButton>Linktree</FancyButton>
        </router-link>
      </li>
    </ul>
  </div>
  <\!-- END BURGER --\>
  -->
</template>

<style scoped>
/* burger menu */

#burger-menu {
  cursor: pointer;
  height: 27px;
  width: 27px;
  position: relative;
  z-index: 2;
}

#burger-menu span,
#burger-menu span:before,
#burger-menu span:after {
  background: #fff;
  display: block;
  height: 2px;
  opacity: 1;
  position: absolute;
  transition: 0.3s ease-in-out;
}

#burger-menu span:before,
#burger-menu span:after {
  content: "";
}

#burger-menu span:before {
  left: 0px;
  top: -10px;
  width: 27px;
}

#burger-menu span {
  right: 0px;
  top: 13px;
  width: 27px;
}

#burger-menu span:after {
  left: 0px;
  top: 10px;
  width: 27px;
}

#burger-menu.close span:before {
  top: 0px;
  transform: rotate(90deg);
  width: 27px;
}

#burger-menu.close span {
  transform: rotate(-45deg);
  top: 13px;
  width: 27px;
}

#burger-menu.close span:after {
  top: 0px;
  left: 0;
  transform: rotate(90deg);
  opacity: 0;
  width: 0;
}

#menu {
  z-index: 1;
  min-width: 100%;
  min-height: 100%;
  position: fixed;
  top: 0;
  height: 0;
  visibility: hidden;
  opacity: 0;
  text-align: center;
  padding-top: 20px;
  transition: all 0.3s ease-in-out;
}

#menu.overlay {
  visibility: visible;
  opacity: 1;
  padding-top: 100px;
  background: rgba(0, 0, 0, 0.5);
}

#menu ul {
  padding: 0;
}

#menu li {
  list-style: none;
}

#menu a {
  color: #fff;
  display: block;
  font-size: 32px;
  margin-bottom: 30px;
  text-decoration: none;
}

.header-up {
  top: -200%;
}

.header-down {
  top: 0px;
}
</style>
