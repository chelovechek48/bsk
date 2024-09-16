<script setup>

defineProps({
  tags: {
    type: Array,
    required: true,
  },
});

</script>

<template>
  <ul class="tags">
    <li
      class="tags__item"
      v-for="tag in tags"
      :key="tag"
    >
      {{ (tag.values || [''])[0].name }}
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@use '@vars/colors';

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  &__item {
    font-size: 1rem;
    white-space: nowrap;

    border-radius: 1.5rem;
    border: 1px solid currentColor;
    padding: 0.25rem 0.75rem;

    &:nth-child(even) {
      color: colors.$red;
    }
    &:nth-child(odd) {
      color: colors.$pink;
    }
  }
}
</style>
