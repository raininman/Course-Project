<template>
  <div class="film">
    <div>
      <img :src="film.imgURL" :alt="film.title" />
    </div>
    <div>
      <h2 class="film-name">{{ film.title }}</h2>
      <div class="film-block product-description">
        <span class="film-block__title">Описание фильма</span>
        <div v-html="film.description"></div>
      </div>
      <div class="film-block__awards" v-if="film.awards != ' '">
        Награды: {{ film.awards }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  film: {
    type: Object,
    default: () => {},
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.film {
  background: var(--lightgray);
  padding: 50px 140px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 500px;
  column-gap: 65px;
  font-family: var(--exo2);
  &-name {
    margin: 0 0 40px 0;
    font-size: 36px;
  }
  &-block {
    margin-bottom: 40px;
    &__title {
      margin-top: 20px;
      display: block;
      margin-bottom: 14px;
      font-size: 20px;
    }
  }
}
</style>
