<script setup>
import json from '@json/news.json';
</script>

<template>
  <ul>
    <li
      v-for="item in json"
      :key="item"
    >
      <NuxtLink :to="`/news/${item.id}`">
        <NewsCard :article="item" />
      </NuxtLink>
    </li>
  </ul>
</template>
