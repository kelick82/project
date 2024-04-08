import { createRouter, createWebHistory } from 'vue-router';

import LogEmail from './components/LogEmail.vue';
import LogPhone from './components/LogPhone.vue';
import DefaultLayout from './layouts/DefaultLayout.vue';
import MainLayout from './layouts/MainLayout.vue';
import Home from './views/Home.vue';
import Log from './views/Log.vue';
import test from './views/test.vue';

const routes = [
  {
    path: '/',
    component: Home,
    meta: { layout: MainLayout },
  },
  {
    path: '/test',
    component: test,
    //meta: { layout: MainLayout },
  },
  {
    path: '/test',
    component: test,
    //meta: { layout: MainLayout },
  },
  {
    path: '/log',
    component: Log,
    meta: { layout: DefaultLayout },
    children: [
      {
        path: 'phone',
        component: LogPhone,
      },
      {
        //
        path: 'email',
        component: LogEmail,
      },
    ],
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
