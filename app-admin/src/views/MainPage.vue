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
  <div>
    <div class="bg-LogiSkyblue-100">
      <DataTable
        :value="products"
        show-gridlines
        striped-rows
        paginator
        :rows="5"
        table-style="min-width: 50rem"
      >
        <Column field="no" sortable header="NO"></Column>
        <Column field="name" header="광역"></Column>
        <Column field="category" sortable header="지역명"></Column>
        <Column field="quantity" header="위도"></Column>
        <Column field="quantity" header="경도"></Column>
        <Column field="quantity" sortable header="운송 난의도"></Column>
        <Column
          field="quantity"
          sortable
          header="운송 난의도(3.5톤 이상)"
        ></Column>
        <Column field="quantity" header="등록일"></Column>
      </DataTable>
    </div>
  </div>
</template>
