<template>
  <div
    class="category_block"
    :style="`background-image: url('${category.background}')`"
  ></div>
  <div>
    <div class="category_block_left">{{ category.title }}</div>
    <div class="category_block_right">{{ category.description }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  category: {
    type: Object,
    default: () => {},
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.category_block {
  height: 500px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  grid-template-columns: 1fr 3fr;
  font-family: var(--exo2);
  color: white;
  opacity: 0.4;

  &_left {
    position: absolute;
    top: 100px;
    left: 50px;
    font-size: 40px;
    margin-top: 300px;
    margin-right: 20px;
    width: 300px;
  }
  &_right {
    margin-top: 200px;
    width: 900px;
    position: absolute;
    top: 100px;
    right: 50px;
    font-size: 24px;
    text-align: justify;
  }
}
</style>
