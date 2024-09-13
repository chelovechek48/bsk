<template>
  <main class="page">
    <NuxtPage />
  </main>
</template>

<style lang="scss">
@import '@styles';
</style>

<style lang="scss" scoped>
@use '@vars/colors';

.page {
  min-height: 100dvh;
  background-color: colors.$gray-lightest;
  padding-block: 1rem;
}
</style>

<style lang="scss">
.container {
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  padding-inline: 1rem;
}
</style>
