<template>
  <div class="category_film">
    <Film
      v-for="film of filterFilms"
      :key="film._id"
      :img="film.imgURL"
      :title="film.title"
      :year="film.year"
      :id="film._id"
    />
  </div>
</template>

<script setup>
import Film from "@/components/Film.vue";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import api from "@/api.js";

const route = useRoute();
const router = useRouter();

const filterFilms = ref([]);
const films = ref([]);

onMounted(async () => {
  films.value = await api.getFilms();
  console.log(films.value);
  films.value.forEach((film) => {
    if (film.producer == route.params.id) {
      filterFilms.value.push(film);
      console.log(filterFilms.value);
    }
  });
});
</script>

<style lang="scss" scoped>
.category_film {
  padding: 0 80px;
  margin-top: 40px;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  font-family: var(--exo2);
}
</style>
