import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';

import Wind from './presets/wind';

import './style.css';
import App from './App.vue';
import router from './router';

import Ripple from 'primevue/ripple';

// store 설정
const pinia = createPinia();

// app 설정
const app = createApp(App);
app.use(router);
app.use(pinia);


app.use(PrimeVue, {
  unstyled: true,
  ripple: true,
  pt: Wind,
});

app.directive('ripple', Ripple);

app.mount('#app');
