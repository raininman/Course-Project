<template>
  <div class="film">
    <div>
      <img height="450" width="300" :src="film.imgURL" :alt="film.title" />
    </div>
    <div>
      <h2 class="film-name">{{ film.title }} ({{ film.year }})</h2>
      <div class="film-block product-description">
        <span class="film-block__title">Описание фильма</span>
        <div v-html="film.description"></div>
      </div>
      <div class="film-block__awards" v-if="film.awards != ' ' && film.awards">
        Награды: {{ film.awards }}
      </div>
      <div class="film-block__awards">
        Кинопоиск: {{ rating.kp }}<br />
        IMDB: {{ rating.imdb }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/api.js'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()

const ratings = ref([])
const rating = ref({})
const props = defineProps({
  film: {
    type: Object,
    default: () => {},
    required: true,
  },
})
onMounted(async () => {
  ratings.value = await api.getRatings()
  ratings.value.forEach((rat) => {
    if (rat.film == route.params.id) {
      rating.value = rat
      console.log(rating.value)
    }
  })
})
</script>

<style lang="scss" scoped>
.film {
  background: var(--lightgray);
  padding: 50px 140px;
  display: grid;
  align-items: center;
  grid-template-columns: 500px 1fr;
  column-gap: 65px;
  font-family: var(--exo2);
  &-name {
    margin: 0 0 40px 0;
    font-size: 36px;
  }
  &-block {
    margin-bottom: 40px;
    &__awards {
      margin-bottom: 40px;
    }
    &__title {
      margin-top: 20px;
      display: block;
      margin-bottom: 14px;
      font-size: 20px;
    }
  }
}
</style>
