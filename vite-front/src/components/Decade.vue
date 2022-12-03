<template>
  <div v-for="decade of decades" :key="decade._id">
    <router-link
      :to="`decade/${decade._id}`"
      class="decade_block"
      :style="`background-image: url(${decade.background})`"
    >
      <div class="decade_block_title">
        {{ decade.title }}
      </div>

    </router-link>
  </div>
</template>

<script setup>
const props = defineProps({
  decades: {
    type: Array,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.decade_block {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  background-color: lightgray;
  color: white;
  height: 200px;
  width: 100%;
  font-family: var(--exo2);
  margin-bottom: 20px;
  margin-top: 30px;
  text-decoration: none;
  opacity: 0.7;
  &_title {
    text-align: center;
    padding-top: 70px;
    font-size: 30px;
    &:hover {
      text-decoration: underline;
    }
  }
  &_description {
    font-size: 20px;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
