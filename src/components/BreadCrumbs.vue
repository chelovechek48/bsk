<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

const getBreadcrumbs = (fullPath) => {
  const parts = fullPath.split('/');
  let path = '';

  return parts.map((part) => {
    if (part !== '') {
      path += `/${part}`;
    }

    const validPath = path || '/';
    const routeName = router.resolve(validPath).name;

    return {
      name: routeName === 'news-article' ? props.title : routeName,
      path: validPath,
    };
  });
};

const breadcrumbs = ref(getBreadcrumbs(route.fullPath));

</script>

<template>
  <nav>
    <ol>
      <li
        v-for="crumb in breadcrumbs"
        :key="crumb"
      >
        <NuxtLink :to="crumb.path">
          {{ crumb.name }}
        </NuxtLink>
      </li>
    </ol>
  </nav>
</template>
