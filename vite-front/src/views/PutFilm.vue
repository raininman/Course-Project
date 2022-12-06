<template>
  <div class="film_container">
    <label class="film_container_label">
      <input
        class="film_container_input"
        placeholder="Название"
        v-model="title"
      />
    </label>
    <label class="film_container_label">
      <input class="film_container_input" placeholder="Год" v-model="year" />
    </label>
    <label class="film_container_label">
      <input
        class="film_container_input"
        placeholder="Описание"
        v-model="description"
      />
    </label>
    <label class="film_container_label">
      <input
        class="film_container_input"
        placeholder="Постер"
        v-model="imgURL"
      />
    </label>
    <label class="film_container_label">
      <input
        class="film_container_input"
        placeholder="Награды"
        v-model="awards"
      />
    </label>
    <div class="film_container_producers" v-for="film in films">
      <span class="film_container_name">{{ film.title }}</span>
      <button class="film_container_button" @click="getFilm(film)">
        &#10003;
      </button>
    </div>
    <div class="film_container_producers" v-for="producer in producers">
      <span class="film_container_name">{{ producer.name }}</span>
      <button
        class="film_container_button"
        @click="changeProducer(producer._id)"
      >
        &#10003;
      </button>
    </div>
    <div class="film_container_decades" v-for="decade in decades">
      <span class="film_container_name">{{ decade.title }}</span>
      <button class="film_container_button" @click="changeDecade(decade._id)">
        &#10003;
      </button>
    </div>
    <div class="film_container_decades" v-for="country in countries">
      <span class="film_container_name">{{ country.title }}</span>
      <button class="film_container_button" @click="changeCountry(country._id)">
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

const films = ref([])
const producers = ref([])
const decades = ref([])
const countries = ref([])

let producerId = ''
let decadeId = ''
let countryId = ''
let filmId = ''
let imgURL = ''
let awards = ''
let year = ''
let description = ''
let title = ''

const getFilm = (film) => {
  filmId = film._id
}
const changeProducer = (id) => {
  producerId = id
}
const changeDecade = (id) => {
  decadeId = id
}
const changeCountry = (id) => {
  countryId = id
}

const submit = async () => {
  await api.putFilm(
    {
      title: title,
      year: year,
      description: description,
      imgURL: imgURL,
      decade: decadeId,
      producer: producerId,
      country: countryId,
      producer: producerId,
    country: countryId,
    },
    filmId,
  )
  document.location.reload()
}

onMounted(async () => {
  producers.value = await api.getProducers()
  decades.value = await api.getDecades()
  countries.value = await api.getCountries()
  films.value = await api.getFilms()
  document.documentElement.scrollTop = 0
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
