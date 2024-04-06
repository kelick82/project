import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';

import Wind from './presets/wind'; //import preset

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import './style.css';
import App from './App.vue';
import MainLayout from './layouts/MainLayout.vue';
import ApiPermissionManagement from './views/ApiPermissionManagement.vue';

const routes = [
  {
    path: '/',
    component: ApiPermissionManagement,
    meta: { layout: MainLayout },
  },
];

// router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// store 설정
const pinia = createPinia();

// app 설정
const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(PrimeVue, {
  unstyled: true,
  pt: Wind,
});

app.mount('#app');
