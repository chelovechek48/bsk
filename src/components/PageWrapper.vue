<template>
  <main class="page-wrapper">
    <slot />
  </main>
</template>

<style lang="scss" scoped>
@use '@vars/colors';

.page-wrapper {
  min-height: 100dvh;
  background-color: colors.$gray-lightest;
  padding-block: 1rem;
}
</style>
