import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';

import Wind from './presets/wind'; //import preset

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import './style.css';
import App from './App.vue';
import AuthLayout from './layouts/AuthLayout.vue';
import MainLayout from './layouts/MainLayout.vue';
import HomePage from './views/MainPage.vue';
import SamplePage from './views/SamplePage.vue';
import SamplePage2 from './views/SamplePage2.vue';

const routes = [
  { path: '/', component: HomePage, meta: { layout: MainLayout } },
  { path: '/page1', component: SamplePage, meta: { layout: AuthLayout } },
  { path: '/page2', component: SamplePage2, meta: { layout: AuthLayout } },
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
