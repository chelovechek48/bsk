<script setup>
import { useRoute } from 'vue-router';
import articleList from '@json/news.json';

const route = useRoute();
const { params } = route;

const article = articleList.find((item) => item.id === params.title);
</script>

<template>
  <NewsModal :item="article" />
</template>
