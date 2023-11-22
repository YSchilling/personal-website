import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Linktree from "../views/Linktree.vue";
import Sketches from "../views/Sketches.vue";

const router = createRouter({
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
  ],
});

export default router;
