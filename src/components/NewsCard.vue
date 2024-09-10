<script setup>
defineProps({
  article: {
    type: Object,
    required: true,
  },
});

</script>

<template>
  <article class="card">
    <div class="card__image-wrapper">
      <img
        class="card__image"
        src="@images/image.webp"
        alt=""
      >
    </div>
    <div class="card__text">
      <header class="card__title">
        {{ article.title }}
      </header>
      <ul class="card__tag-list">
        <li
          class="card__tag"
          v-for="tag in article.tags"
          :key="tag"
        >
          {{ tag }}
        </li>
      </ul>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@use '@vars/breakpoints' as *;
@use '@vars/colors';

.card {
  $square-width: clamp(5rem, 17vw, 8.5rem);
  $radius: 1.5rem;

  display: flex;
  gap: clamp(1rem, 3vw, 1.5rem);

  background-color: colors.$gray-lightest;
  border-radius: $radius;

  position: relative;

  @media (min-width: calc($mobile + 1px)) {
    padding: 0.25rem $square-width 0.25rem 0.25rem;
  }
  @media (max-width: $mobile) {
    padding: 0.25rem;
    flex-wrap: wrap;
  }

  &::before, &::after {
    content: '';
    position: absolute;

    @media (min-width: calc($mobile + 1px)) {
      top: 0;
      right: 0;
    }
    @media (max-width: $mobile) {
      top: auto;
      bottom: 0;
    }
  }

  &::before {
    width: $square-width;
    height: $square-width;

    background-image: url('@icons/mask.svg');
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: $mobile) {
      rotate: 90deg;
    }
  }
  &::after {
    width: calc($square-width * 0.6);
    height: calc($square-width * 0.6);

    background-image: url('@icons/arrow.svg');
    background-size: 50% auto;
    background-position: center;
    background-repeat: no-repeat;

    box-shadow: 0 1px 0.25rem 0px rgba(#000, 0.25);
    border-radius: $radius;
  }

  &__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: $radius;

    &-wrapper {
      min-height: 13.75rem;

      @media (min-width: calc($mobile + 1px)) {
        flex: 0 1 20rem;
      }
      @media (max-width: $mobile) {
        flex: 1 1 100%;
      }
    }
  }

  &__text {
    flex: 1 0 10rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: calc($mobile + 1px)) {
      gap: 1rem;
      padding-block: 1rem;
    }
    @media (max-width: $mobile) {
      gap: clamp(1rem, 3vw, 1.5rem);
      padding-bottom: clamp(1rem, 3vw, 1.5rem);
      padding-inline: 0.5rem;
    }
  }

  &__title {
    font-family: 'Unbounded', sans-serif;
    font-size: clamp(1.125rem, 4vw, 1.5rem);
    font-weight: 700;
    color: colors.$gray-dark;
  }

  &__tag {
    font-size: 1rem;
    white-space: nowrap;

    border-radius: $radius;
    border: 1px solid currentColor;
    padding: 0.25rem 0.75rem;

    &-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      // @media (max-width: $mobile) {
      //   padding-right: calc($square-width * 0.6);
      // }
    }

    &:nth-child(even) {
      color: colors.$red;
    }
    &:nth-child(odd) {
      color: colors.$pink;
    }
  }
}
</style>
