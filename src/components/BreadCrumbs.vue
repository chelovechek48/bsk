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
  scrolled: {
    type: Boolean,
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
  <nav
    v-if="!scrolled"
    class="breadcrumbs"
  >
    <ol class="breadcrumbs__list">
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
  <header
    v-else
    class="breadcrumbs breadcrumbs__title"
  >
    {{ title }}
  </header>
</template>

<style lang="scss" scoped>
@use '@vars/colors';

.breadcrumbs {
  font-size: 1rem;
  text-transform: uppercase;
  white-space: nowrap;

  &__list {
    font-weight: 500;
    display: flex;
    gap: 0.5rem;
  }

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

  &__title {
    color: colors.$gray-dark;
    font-weight: 700;
  }
}
</style>
