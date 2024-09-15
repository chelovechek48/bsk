<script setup>
definePageMeta({
  name: 'главная',
});
</script>

<template>
  <div class="container">
    <NuxtLink to="/news">
      Открыть список новостей
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
@forward '@vars/container';
</style>
