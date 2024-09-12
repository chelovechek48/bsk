<script setup>
definePageMeta({
  name: 'новости',
});
</script>

<template>
  <div class="container">
    <NewsList
      title="Основные новости"
      :background="{ block: 'var(--white)', container: 'var(--gray-lightest)' }"
    />
  </div>
</template>
