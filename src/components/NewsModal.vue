<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const modal = ref(null);

onMounted(() => {
  modal.value.showModal();
});

</script>

<template>
  <dialog
    ref="modal"
    class="modal"
    @close="router.push({})"
  >
    <div class="modal__wrapper">
      <div class="modal__container container">
        <!-- <BreadCrumbs :title="item.title" /> -->
        <header class="modal__header">
          <NewsTags :tags="item.tags" />
          <h2 class="modal__title">
            {{ item.title }}
          </h2>
          <time
            class="modal__data"
            :datetime="item.datetime"
          >
            {{ item.datetime }}
          </time>
        </header>
        <div class="modal__text-wrapper">
          <p class="modal__text">
            {{ item.description.top }}
          </p>
          <button class="modal__button-share">
            Поделиться
          </button>
        </div>

        <img
          class="modal__image"
          src="@images/image.webp"
          alt=""
        >

        <p class="modal__text">
          {{ item.description.bottom }}
        </p>
        <NewsList
          title="Ещё статьи"
          :background="{ block: 'var(--gray-lightest)', container: 'var(--white)' }"
        />
      </div>
    </div>
  </dialog>
</template>

<style lang="scss" scoped>
@use '@vars/colors';

.modal {
  min-width: 100%;
  min-height: 100%;
  background-color: transparent;

  &__wrapper {
    max-width: 100rem;
    margin: 0 auto;

    background-color: colors.$white;
    padding-block: 1rem;
    border-radius: 1.5rem;
    margin-block: 1rem;
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  &__data {
    font-size: 1rem;
    color: colors.$gray-light;

    position: relative;
    &::after {
      content: '';
      width: 100%;
      height: 1px;
      position: absolute;
      top: 100%;
      left: 0;
      background-color: currentColor;
    }
  }

  &__header {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;
  }

  &__title {
    font-family: 'Unbounded', sans-serif;
    font-size: clamp(1.5rem, 5vw, 3rem);
    font-weight: 700;
    color: colors.$gray-dark;
  }

  &__text {
    max-width: 37.5rem;
    font-size: 1rem;
    color: colors.$gray-medium;

    &-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: end;
    }
  }

  &__button-share {
    font-size: 1rem;
    color: colors.$white;
    background-color: colors.$red;
    padding: 1rem 1.5rem;
    border-radius: 1rem;
  }

  &__image {
    width: 100%;
    border-radius: 2rem;
  }
}
</style>
