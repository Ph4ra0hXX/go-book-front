import { createWebHistory, createRouter } from "vue-router";

import Home from "../pages/home.vue";
import Page from "../pages/page.vue";
import About from "../pages/about.vue";
import Login from "../pages/login.vue";
import Register from "../pages/register.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/page/:id", component: Page },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
