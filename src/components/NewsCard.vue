<script setup>
defineProps({
  article: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article>
    {{ article.title }}
  </article>
</template>
