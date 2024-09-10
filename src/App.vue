<template>
  <main class="page">
    <div class="container">
      <NuxtPage />
    </div>
  </main>
</template>

<style lang="scss">
@import '@styles';
</style>

<style lang="scss" scoped>
@use '@vars/colors';

.page {
  background-color: colors.$gray-lightest;
}

.container {
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  padding-inline: 1rem;
}
</style>
