<script setup>
defineEmits(['onClick']);
defineProps({
  label: String,
});
</script>

<template>
  <button @click="$emit('onClick')">{{ label }}</button>
</template>
