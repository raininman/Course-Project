<template>
  <div class="films_container">
    <div class="films_compilation">Подборка месяца</div>
    <div class="films">
      <Film
        v-for="film of films"
        :key="film.id"
        :img="film.imgURL"
        :title="film.title"
        :year="film.year"
        :id="film.id"
      />
    </div>
  </div>
</template>

<script setup>
import Film from '@/components/Film.vue'
import { ref } from 'vue'

const props = defineProps({
  films: {
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.films {
  padding: 0 80px;
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  &_compilation {
    font-family: var(--exo2);
    text-align: center;
    font-weight: 400;
    font-size: 30px;
    color: var(--primary);
    margin: 40px 0;
  }
  &_container {
    margin-bottom: 56px;
  }
}
</style>
