import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';

import Wind from './presets/wind';

import { createApp } from 'vue';

import './style.css';
import App from './App.vue';
import router from './router';

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
