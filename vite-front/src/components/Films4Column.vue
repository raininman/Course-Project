<template>
  <div class="films_container">
    <div class="films_compilation">
    Подборка месяца
  </div>
  <div class="films">
    <Film
      v-for="film of films"
      :key="film.id"
      :img="film.img"
      :title="film.title"
      :year="film.year"
    />
  </div>
</div>
</template>

<script setup>
import Film from '../components/Film.vue'
import {ref} from 'vue'

const films = ref([
  {
    id:1,
    img:'/img/Caligari.webp',
    title:'Кабинет доктора Калигари',
    year: 1920
  },
  {
    id:2,
    img:'/img/Apocalypse_Now.webp',
    title:'Апокалипсис сегодня ',
    year: 1979
  },
  {
    id:3,
    img:'/img/Smultronstallet.webp',
    title:'Земляничная поляна',
    year: 1957
  },
  {
    id:4,
    img:'/img/Tengoku_to_jigoku.webp',
    title:'Рай и ад',
    year: 1963
  },

])

</script>

<style lang="scss" scoped>
.films{
  padding: 0 80px;
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  &_compilation{
    font-family: 'Exo 2', sans-serif;
    text-align: center;
    font-weight: 400;
    font-size: 30px;
    color: #2A254B;
    margin: 40px 0;
  }
  &_container{
    margin-bottom: 56px;
  }
}
</style>