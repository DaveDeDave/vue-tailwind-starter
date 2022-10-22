import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("./pages/Home.vue");

const routes = [
  { path: "/", component: Home, meta: { title: "Home" } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  }
});

export { router };
