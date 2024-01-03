import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0, isLoading: false };
  },
  getters: {
    doubleCount: state => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    async incrementAsync() {
      this.isLoading = true;
      setTimeout(() => {
        this.count *= this.count;
        this.isLoading = false;
        Promise.resolve();
      }, 1000);
    },
    async decrementAsync() {
      this.isLoading = true;
      setTimeout(() => {
        this.count /= this.count;
        this.isLoading = false;
        Promise.resolve();
      }, 1000);
    },
  },
});
