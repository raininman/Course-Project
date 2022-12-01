<template>
  <div class="film">
    <router-link :to="`/film/${id}`">
      <img :src="img" :alt="title" class="film_img" />
    </router-link>
    <router-link :to="`/film/${id}`" class="film_title">{{
      title
    }}</router-link>
    <span class="film_year">{{ year }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.film {
  font-family: var(--exo2);
  &_img {
    display: block;
    height: 450px;
    width: 300px;
    margin-bottom: 24px;
  }
  &_title {
    display: block;
    font-weight: 400;
    font-size: 20px;
    color: var(--primary);
    text-decoration: none;
    line-height: 140%;
    &:hover {
      text-decoration: underline;
    }
    &_year {
      display: block;
      font-weight: 400;
      font-size: 18px;
      line-height: 150%;
      color: var(--primary);
    }
  }
}
</style>
