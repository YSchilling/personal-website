<script setup>
import FancyButton from "./FancyButton.vue";

// burger menu

function toggleBurger() {
  var burger = document.getElementById("burger-menu");
  var overlay = document.getElementById("menu");
  burger.classList.toggle("close");
  overlay.classList.toggle("overlay");
}
</script>

<template>
  <header class="flex col-start-3 col-span-8 mt-16 lg:mt-24 mb-24 items-center justify-between h-6">
    <router-link to="/" class="flex items-center">
      <img src="/logo.svg" alt="Logo" />
      <h2 class="text-2xl hidden lg:block">Yorick Schilling</h2>
    </router-link>
    <!-- START Desktop -->
    <ul class="hidden lg:flex gap-4">
      <li>
        <router-link to="/">
          <FancyButton>Home</FancyButton>
        </router-link>
      </li>
      <li>
        <router-link to="/sketches">
          <FancyButton>Sketches</FancyButton>
        </router-link>
      </li>
      <li>
        <router-link to="/linktree">
          <FancyButton>Linktree</FancyButton>
        </router-link>
      </li>
    </ul>
    <!-- END Desktop -->

    <!-- START Mobile -->
    <div @click="toggleBurger" id="burger-menu" class="lg:hidden">
      <span></span>
    </div>
    <!-- END Mobile -->
  </header>
  <!-- START BURGER -->
  <div id="menu" class="lg:hidden">
    <ul>
      <li class="flex justify-center">
        <router-link to="/" class="w-max">
          <FancyButton>Home</FancyButton>
        </router-link>
      </li>
      <li class="flex justify-center">
        <router-link to="/sketches" class="w-max">
          <FancyButton>Sketches</FancyButton>
        </router-link>
      </li>
      <li class="flex justify-center">
        <router-link to="/linktree" class="w-max">
          <FancyButton>Linktree</FancyButton>
        </router-link>
      </li>
    </ul>
    <!-- END BURGER -->
  </div>
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
</style>
