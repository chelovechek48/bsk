<script setup>
import json from '@json/news.json';

defineProps({
  list: {
    type: Array,
    required: false,
    default: json,
  },
  title: {
    type: String,
    required: true,
  },
  background: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section class="articles">
    <h2 class="articles__title">
      {{ title }}
    </h2>
    <ul class="articles__list">
      <li
        v-for="item in list"
        :key="item"
      >
        <NuxtLink :to="`/news?title=${item.id}`">
          <NewsCard
            :article="item"
            :background="background"
          />
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
@use '@vars/colors';

.articles {
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 3vw, 1.5rem);

  &__title {
    font-family: 'Unbounded', sans-serif;
    font-size: clamp(1.25rem, 6.5vw, 2.5rem);
    font-weight: 700;
    color: colors.$gray-dark;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: clamp(1rem, 3vw, 1.5rem);
  }

}
</style>
