<script setup>
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup'; // optional
import DataTable from 'primevue/datatable';
import Row from 'primevue/row';
import { ref } from 'vue'; // optional
const products = ref([
  {
    code: '1',
    name: '1',
    category: '1',
    quantity: '1',
  },
  {
    code: '2',
    name: '2',
    category: '2',
    quantity: '2',
  },
]);
</script>

<template>
  <div class="flex flex-col">
    <div id="title" class="flex flex-col px-10 py-6 gap-2 items-center">
      <div class="flex flex-col justify-center items-start gap-2 flex-1">
        <div class="self-stretch text-gray-700 text-base">API 퍼미션 관리</div>
        <div class="flex flex-row">
          <div>API 퍼미션 관리</div>
          <Button>등록</Button>
        </div>
      </div>
    </div>
    <div>ACTION</div>
  </div>
</template>
