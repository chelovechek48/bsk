<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import json from '@json/news.json';

const route = useRoute();

const popupTitle = ref(null);

const updateTitle = () => {
  popupTitle.value = route.query.title;
};

onMounted(() => {
  updateTitle();
});

const url = 'https://bsk-admin.testers-site.ru/api/news/';
const defTitle = 'chto-budet-s-ipotekoy-v-2024-godu';

const { data } = await useFetch(`${url}${defTitle}`);

const item = ref(data.value.data.result);

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
      v-if="popupTitle"
      :item="item"
    />
  </div>
</template>

<style lang="scss" scoped>
@forward '@vars/container';
</style>
