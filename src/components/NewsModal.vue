<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <h1>{{ item.title }}</h1>
</template>
