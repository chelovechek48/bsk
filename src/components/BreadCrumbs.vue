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

  const breadcrumbs = parts.map((part) => {
    const url = part.split('?')[0];
    if (url !== '') {
      path += `/${url}`;
    }

    const validPath = path || '/';
    const routeName = router.resolve(validPath).name;

    return {
      name: routeName === 'news-article' ? props.title : routeName,
      path: validPath,
    };
  });

  breadcrumbs.push({
    name: props.title,
    path: fullPath,
  });

  return breadcrumbs;
};

const breadcrumbs = ref(getBreadcrumbs(route.fullPath));

</script>

<template>
  <nav>
    <ol class="breadcrumbs">
      <li
        class="breadcrumbs__item"
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

<style lang="scss" scoped>
@use '@vars/colors';

.breadcrumbs {
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;

  display: flex;
  gap: 0.5rem;

  &__item {
    &:not(:last-child) {
      color: colors.$gray-dark;

      position: relative;
      &::after {
        content: '•';
        width: 4px;
        height: 4px;
        padding-left: 0.5rem;
      }
    }

    &:last-child {
      color: rgba(colors.$gray-dark, 0.4);
    }
  }
}
</style>
