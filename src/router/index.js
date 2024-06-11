import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/linktree",
      name: "Linktree",
      component: () => import("../views/Linktree.vue"),
    },
    {
      path: "/sketches",
      name: "Sketches",
      component: () => import("../views/Sketches.vue"),
    },
    {
      path: "/impressum",
      name: "Impressum",
      component: () => import("../views/Impressum.vue"),
    },
    {
      path: "/creativecoding",
      name: "CreativeCoding",
      component: () => import("../views/creative-coding/CCHero.vue"),
    },
    {
      path: "/creativecoding/explorer",
      name: "CreativeCodingExplorer",
      component: () => import("../views/creative-coding/CCExplorer.vue"),
    },
    {
      path: "/creativecoding/viewer",
      name: "CreativeCodingViewer",
      component: () => import("../views/creative-coding/CCViewer.vue"),
    },
  ],
});

export default router;
