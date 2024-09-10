<script setup>
import { useRoute } from 'vue-router';
import articleList from '@json/news.json';

definePageMeta({
  name: 'news-article',
});

const route = useRoute();
const { params } = route;

const article = articleList.find((item) => item.id === params.id);
</script>

<template>
  <div>
    <BreadCrumbs :title="article.title" />
    <NewsModal :item="article" />
  </div>
</template>
