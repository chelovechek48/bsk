<script setup>
import { onMounted } from 'vue';

defineProps({
  item: {
    type: Object,
    required: true,
  },
});

onMounted(() => {
  window.modal.showModal();
});

</script>

<template>
  <div class="container">
    <NewsList
      title="Основные новости"
      :background="{ block: 'var(--white)', container: 'var(--gray-lightest)' }"
    />
    <dialog
      id="modal"
      class="modal"
    >
      <div class="modal__wrapper">
        <div class="modal__container container">
          <!-- <BreadCrumbs :title="item.title" /> -->
          <header class="modal__header">
            <NewsTags :tags="item.tags" />
            <h2 class="modal__title">
              {{ item.title }}
            </h2>
            <data
              class="modal__data"
              value=""
            >
              06.10.2023
            </data>
          </header>
          <div>
            <p class="modal__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, iusto nemo! Assumenda illo aspernatur dolore veniam mollitia odit velit inventore alias eum, labore harum? Minima excepturi quia facere libero tempore amet ipsam eveniet, a provident, temporibus iure vitae commodi nulla!
            </p>
            <button>
              Поделиться
            </button>
          </div>

          <img
            class="modal__image"
            src="@images/image.webp"
            alt=""
          >

          <p class="modal__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, iusto nemo! Assumenda illo aspernatur dolore veniam mollitia odit velit inventore alias eum, labore harum? Minima excepturi quia facere libero tempore amet ipsam eveniet, a provident, temporibus iure vitae commodi nulla!
          </p>
          <NewsList
            title="Ещё статьи"
            :background="{ block: 'var(--gray-lightest)', container: 'var(--white)' }"
          />
        </div>
      </div>
    </dialog>
  </div>
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
  }

  &__image {
    width: 100%;
    border-radius: 2rem;
  }
}
</style>
