import { createMemoryHistory, createRouter } from "vue-router";

import Home from "../pages/home.vue";
import Page from "../pages/page.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/page/:id", component: Page },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
