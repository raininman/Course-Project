<template>
  <div class="producer">
    <router-link :to="`/producer/${id}`">
      <img :src="img" :alt="title" class="producer_img" />
    </router-link>
    <router-link :to="`/producer/${id}`" class="producer_title">{{
      title
    }}</router-link>
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
  id: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.producer {
  font-family: var(--exo2);
  &_img {
    margin: 24px auto;
    display: block;
    height: 300px;
    width: 200px;
  }
  &_title {
    display: block;
    font-weight: 400;
    font-size: 20px;
    color: var(--primary);
    text-decoration: none;
    line-height: 140%;
    text-align: center;
    margin-bottom: 30px;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
