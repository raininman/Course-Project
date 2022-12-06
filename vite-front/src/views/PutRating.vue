<template>
  <div class="film_container">
    <label class="film_container_label">
      <input
        class="film_container_input"
        placeholder="Кинопоиск"
        v-model="kp"
      />
    </label>
    <label class="film_container_label">
      <input
        class="film_container_input"
        placeholder="IMDB"
        v-model="imdb"
      />
    </label>
    <div class="film_container_producers" v-for="film in filter">
      <span class="film_container_name">{{ film.film.title }}</span><br>
      <span class="film_container_name">Кинопоиск: {{ film.rating.kp }}</span><br>
      <span class="film_container_name">IMDB: {{ film.rating.imdb }}</span>
      <button class="film_container_button" @click="ratingFilm(film)">
        &#10003;
      </button>
    </div>
    <button class="film_container_submit" @click="submit">Отправить</button>
    <button class="film_container_back" @click="router.push('admin')">
      Назад
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import api from '@/api.js'
const router = useRouter()

const ratings = ref([])
const films = ref([])
const filter = ref([])

let kp = ''
let imdb = ''
let ratingId = ''
let filmId = ''

const ratingFilm = (film) => {
  ratingId = film.rating._id
  filmId = film.film._id
}

const submit = async () => {
  await api.putRating({
      kp: kp,
      imdb: imdb,
      film:filmId
    },ratingId)
  document.location.reload()
}

onMounted(async () => {
  ratings.value = await api.getRatings()
  films.value = await api.getFilms()
  document.documentElement.scrollTop = 0
  ratings.value.forEach(rat=>{
  films.value.forEach(film=>{
    if(rat.film == film._id){
      filter.value.push({film,rating:rat})
      console.log(film)
    }
  })
})
})
</script>

<style lang="scss" scoped>
.film_container {
  margin: 50px auto;
  display: grid;
  font-family: var(--exo2);
  text-align: center;
  &_head {
    margin-bottom: 40px;
    font-weight: 700;
    font-size: 40px;
  }
  &_label {
    font-size: 24px;
    margin-bottom: 30px;
  }
  &_input {
    border: 2px solid var(--primary);
    padding: 10px 50px;
    border-radius: 35px;
    background-color: white;
    font-size: 24px;
    &:focus {
      border: 3px solid var(--primary);
    }
  }
  &_submit {
    margin: 20px auto;
    border: none;
    background: var(--primary);
    width: 230px;
    padding: 20px 50px;
    border-radius: 35px;
    color: white;
    font-size: 24px;
  }

  &_producers {
    background-color: var(--primary);
    color: white;
    width: 400px;
    margin: 20px auto;
    font-size: 24px;
  }
  &_decades {
    background-color: var(--primary);
    color: white;
    width: 200px;
    margin: 20px auto;
    font-size: 24px;
  }
  &_button {
    margin-left: 10px;
    width: 20px;
    height: 20px;
    border: none;
    background-color: white;
    padding: 5px;
    text-align: center;
    &:hover {
      background-color: lightblue;
    }
  }
  &_submit {
    margin: 30px auto;
    border-radius: 30px;
    border: 2px solid var(--primary);
    background-color: white;
    padding: 20px 30px;
    text-align: center;
    color: var(--primary);
    &:hover {
      text-decoration: underline;
    }
  }
  &_back {
    margin: 40px auto;
    border: none;
    background-color: white;
    padding: 20px 30px;
    text-align: center;
    color: var(--primary);
    font-size: 24px;
    font-family: var(--exo2);
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
