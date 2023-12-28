<script setup>
defineEmits(['onClick']);
</script>

<template>
  <button @click="$emit('onClick')">클릭</button>
</template>
