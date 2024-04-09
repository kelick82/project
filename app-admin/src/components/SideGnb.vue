<template>
  <div class="flex min-w-60 min-h-screen flex-col bg-LogiNavy-300">
    <div>
      <div class="flex h-20 p-4 justify-center items-center align-middle gap-2 flex-shrink-0">
        <img :src="logoUrl" alt=""/>
        <img :src="wordmark" alt=""/>
      </div>
    </div>
    <PanelMenu v-model:expandedKeys="expandedKeys" :model="items" class=" bg-LogiNavy-300">
      <template #item="{ item }">
        <RouterLink v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple class="flex items-center cursor-pointer text-surface-700 dark:text-surface-0/80 px-3 py-2" :href="href" @click="navigate">
            <span :class="[item.icon, 'text-LogiWhite']" />
            <span class="ml-2 text-LogiWhite">{{ item.label }}</span>
          </a>
        </RouterLink>
        <a v-else v-ripple class="flex items-center cursor-pointer text-surface-700 dark:text-surface-0/80 px-3 py-2" :href="item.url" :target="item.target">
          <span :class="[item.icon, 'text-LogiWhite']" />
          <span class="ml-2 text-LogiWhite">{{ item.label }}</span>
          <span v-if="item.items" class="pi pi-angle-down text-LogiWhite dark:text-primary-400 ml-auto" />
        </a>
      </template>
    </PanelMenu>
  </div>
</template>

<script setup>
import PanelMenu from 'primevue/panelmenu';
import { onMounted, ref } from 'vue';

import { GNBService } from '../service/GNBService';
const logoUrl = '/Icon_logi.svg';
const wordmark = '/wordmark.svg';

const items = ref(null);

onMounted(() => {
  GNBService.getGNBServiceNodes().then((data) => (items.value = data));
});

const expandedKeys = ref({});
</script>
