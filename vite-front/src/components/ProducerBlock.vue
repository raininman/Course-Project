<template>
  <div class="producer">
    <div>
      <img
        height="450"
        width="300"
        :src="producer.photoURL"
        :alt="producer.name"
      />
    </div>
    <div>
      <h2 class="producer-name">{{ producer.name }}</h2>
      {{ producer.age }}
      <div class="producer-block">
        <div v-html="producer.description"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  producer: {
    type: Object,
    default: () => {},
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.producer {
  background: var(--primary);
  padding: 50px 140px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 500px;
  column-gap: 65px;
  font-family: var(--exo2);
  color: white;
  &-name {
    font-size: 36px;
  }
  &-block {
    margin: 40px 0;
    &__title {
      margin-top: 20px;
      display: block;
      margin-bottom: 14px;
      font-size: 20px;
    }
  }
}
</style>
