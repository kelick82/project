import { createRouter, createWebHistory } from 'vue-router';
import AgentCarrier from './components/AgentCarrier.vue';
import AgentClient from './components/AgentClient.vue';
import AgentForwarder from './components/AgentForwarder.vue';
import UserCarrier from './components/UserCarrier.vue';
import UserClient from './components/UserClient.vue';
import UserDriver from './components/UserDriver.vue';
import UserForwarders from './components/UserForwarders.vue';

import DefaultLayout from './layouts/DefaultLayout.vue';
import Agent from './views/Agent.vue';
import Home from './views/Home.vue';
import test from './views/test.vue';
import User from './views/User.vue';

const routes = [
  {
    path: '/',
    component: Home,
    meta: { layout: DefaultLayout },
  },
  {
    path: '/test',
    component: test,
    //meta: { layout: MainLayout },
  },
  {
    path: '/agent',
    component: Agent,
    meta: { layout: DefaultLayout },
    children: [
      {
        path: 'client', // 화주
        component: AgentClient,
      },
      {
        path: 'carrier', //운송사
        component: AgentCarrier,
      },
      {
        path: 'forwarders', //포워더
        component: AgentForwarder,
      },
    ],
  },
  {
    path: '/user',
    component: User,
    meta: { layout: DefaultLayout },
    children: [
      {
        path: 'client', // 화주
        component: UserClient,
      },
      {
        path: 'carrier', //운송사
        component: UserCarrier,
      },
      {
        path: 'forwarders', //포워더
        component: UserForwarders,
      },
      {
        path: 'driver', //포워더
        component: UserDriver,
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
