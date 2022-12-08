<template>
  <div class="film_container">
    <div class="grid">
      <div class="film_container_producers" v-for="film in filter">
        <span class="film_container_name">{{ film.film.title }}</span>
        <button class="film_container_button" @click="ratingFilm(film.rating)">
          &#10003;
        </button>
      </div>
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

let ratingId = ''

const ratingFilm = (...rating) => {
  ratingId = rating
}

const submit = async () => {
  await api.deleteRating(ratingId)
  document.location.reload()
}

onMounted(async () => {
  ratings.value = await api.getRatings()
  films.value = await api.getFilms()
  document.documentElement.scrollTop = 0
  ratings.value.forEach((rat) => {
    films.value.forEach((film) => {
      if (rat.film == film._id) {
        filter.value.push({ film, rating: rat._id })
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
    &:focus {
      background-color: green;
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
    padding: 10px 20px;
    border-radius: 10px;
  }
  &_decades {
    background-color: var(--primary);
    color: white;
    width: 200px;
    margin: 20px auto;
    font-size: 24px;
    padding: 10px 20px;
    border-radius: 10px;
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
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
