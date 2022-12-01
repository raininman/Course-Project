<template>
  <div class="container">
    <router-link
      v-for="category in categories"
      :key="category._id"
      :to="`/category/${category._id}`"
      class="panel"
      @mouseover="category.show = true"
      @mouseout="category.show = false"
      :class="{ active: category.show }"
      :style="`
        background-image: url('${category.background}');
      `"
    >
      <h3>{{ category.title }}</h3>
    </router-link>
  </div>
</template>

<script setup>
const props = defineProps({
  categories: {
    type: Array,
    required: true,
    show: false,
  },
});
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90vw;
  margin: auto;
  margin-top: 50px;
}
.panel {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  flex: 0.5;
  margin: 0 10px;
  position: relative;
  transition: flex 0.7s ease-in;
}
.panel h3 {
  font-size: 24px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin: 0;
  opacity: 0;
}
.panel.active {
  flex: 5;
}
.panel.active h3 {
  opacity: 1;
  transition: opacity 0.3s ease-in 0.4s;
}
</style>
