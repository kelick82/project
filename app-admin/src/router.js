import { createRouter, createWebHistory } from 'vue-router';

import MainLayout from './layouts/MainLayout.vue';
import Home from './views/Home.vue';

const routes = [
  {
    path: '/',
    component: Home,
    meta: { layout: MainLayout },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    else return { left: 0, top: 0 };
  },
});

export default router;
