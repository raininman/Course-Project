<template>
  <FilmView :film="currentFilm" v-if="currentFilm" />
  <Loader v-if="loading"/>
  <Films  :films="popularFilms" v-else  />
</template>

<script setup>
import FilmView from '../components/FilmView.vue'
import Films from '@/components/Films4Column.vue'
import Loader from '@/components/UI/Loader.vue'
import { ref, onMounted} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import api from '@/api.js'
const route = useRoute()
const router = useRouter()
const filmId = ref('')
const currentFilm = ref({})
const popularFilms = ref([])
const loading = ref(true)

onMounted(async () => {
  popularFilms.value = await api.getPopularFilms()
  loading.value = false
  filmId.value = route.params.id
  currentFilm.value = await api.getFilm(filmId.value)
  document.documentElement.scrollTop = 0
})
</script>
