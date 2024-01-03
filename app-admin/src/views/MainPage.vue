<script setup>
import { computed } from 'vue';

import '@logispot/system-core/test';

import CustomButton from '../components/CustomButton.vue';
import HelloWorld from '../components/HelloWorld.vue';
import { useCounterStore } from '../stores/counter';

const store = useCounterStore();
const count = computed(() => store.count);
const isLoading = computed(() => store.isLoading);
const doubleCount = computed(() => store.doubleCount);

function onClick(e) {
  store.increment();
  console.log(e);
}
function onClick2(e) {
  store.decrement();
  console.log(e);
}
async function onClick3(e) {
  await store.incrementAsync();
  console.log(e);
}
async function onClick4(e) {
  await store.decrementAsync();
  console.log(e);
}
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <h2>{{ count }}, {{ doubleCount }}</h2>
    <router-link to="/page1">go page1</router-link>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <div v-if="isLoading">
    <p>Loading...</p>
  </div>
  <div v-else>
    <CustomButton @on-click="onClick" label="올리기" />
    <CustomButton @on-click="onClick2" label="내리기" />
    <CustomButton @on-click="onClick3" label="올리기Async" />
    <CustomButton @on-click="onClick4" label="내리기Async" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
