<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import json from '@json/news.json';

const route = useRoute();

const popup = ref(null);

const updateTitle = () => {
  popup.value = route.query.title;
};

onMounted(() => {
  updateTitle();
});

watch(
  () => route.query.title,
  () => {
    updateTitle();
  },
);

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
    <NewsModal
      v-if="popup"
      :item="json.find((item) => item.id === popup)"
    />
  </div>
</template>

<style lang="scss" scoped>
@forward '@vars/container';
</style>
