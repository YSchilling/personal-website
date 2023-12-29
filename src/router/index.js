import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Linktree from "../views/Linktree.vue";
import Sketches from "../views/Sketches.vue";
import Impressum from "../views/Impressum.vue";

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/linktree",
      name: "Linktree",
      component: Linktree,
    },
    {
      path: "/sketches",
      name: "Sketches",
      component: Sketches,
    },
    {
      path: "/impressum",
      name: "Impressum",
      component: Impressum,
    },
  ],
});

export default router;
