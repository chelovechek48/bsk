<script setup>
defineProps({
  article: {
    type: Object,
    required: true,
  },
  background: {
    type: Object,
    required: true,
  },
});

</script>

<template>
  <article
    class="card"
    :style="`
      --block-background: ${background.block};
      --container-background: ${background.container};
    `"
  >
    <span
      class="card__decal"
      aria-hidden="true"
    >
      <svg
        class="card__decal-mask"
        viewBox="0 0 144 144"
      >
        <use href="@icons/sprite.svg#mask" />
      </svg>
      <div class="card__decal-square">
        <svg
          class="card__decal-arrow"
          viewBox="0 0 36 24"
        >
          <use href="@icons/sprite.svg#arrow" />
        </svg>
      </div>
    </span>
    <div class="card__image-wrapper">
      <img
        class="card__image"
        :src="article.image.src"
        :alt="article.image.alt"
      >
    </div>
    <div class="card__text">
      <header class="card__title">
        {{ article.title }}
      </header>
      <NewsTags
        class="card__tags"
        :tags="article.tags"
      />
    </div>
  </article>
</template>

<style lang="scss" scoped>
@use '@vars/breakpoints' as *;
@use '@vars/colors';

.card {
  --white: #{colors.$white};
  --gray-lightest: #{colors.$gray-lightest};

  $decal-width: clamp(5rem, 17vw, 8.5rem);
  $square-width: calc($decal-width * 0.6);
  $radius: 1.5rem;

  display: flex;
  gap: clamp(1rem, 3vw, 1.5rem);

  background-color: var(--block-background);
  border-radius: $radius;

  position: relative;

  @media (min-width: calc($mobile + 1px)) {
    padding: 0.25rem $decal-width 0.25rem 0.25rem;
  }
  @media (max-width: $mobile) {
    padding: 0.25rem;
    flex-wrap: wrap;
  }

  &__decal {
    position: absolute;
    right: 0;
    @media (min-width: calc($mobile + 1px)) {
      top: 0;
    }
    @media (max-width: $mobile) {
      bottom: 0;
    }

    width: $decal-width;
    height: $decal-width;

    &-mask {
      position: absolute;
      inset: 0;
      color: var(--container-background);
      @media (max-width: $mobile) {
        rotate: 90deg;
      }
    }

    &-square {
      display: flex;
      align-items: center;
      justify-content: center;

      width: $square-width;
      height: $square-width;

      position: absolute;
      right: 0;
      @media (min-width: calc($mobile + 1px)) {
        top: 0;
      }
      @media (max-width: $mobile) {
        bottom: 0;
      }

      background: colors.$white;
      border-radius: $radius;
      box-shadow: 0 2px 4px 0px rgba(#000, 0.25);
    }

    &-arrow {
      color: colors.$red;
      width: 50%;
      @media (max-width: $mobile) {
        rotate: -45deg;
      }
    }

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

  &__tags {
    @media (max-width: $mobile) {
      padding-right: $square-width;
    }
  }
}
</style>
