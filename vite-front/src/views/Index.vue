<script setup>
import { onMounted, ref } from 'vue'
import api from '@/api'
import Hero from '@/components/Hero.vue'
import Films from '@/components/Films4Column.vue'
import Cards from '@/components/Cards.vue'
import Loader from '@/components/UI/Loader.vue'

const categories = ref([])
const popularFilms = ref([])
const loading = ref(true)

onMounted(async () => {
  categories.value = await api.getCategories()
  popularFilms.value = await api.getPopularFilms()
  loading.value = false

})
</script>

<template>
  <div class="container">
    <Hero />
    <Cards :categories="categories"/>
    <Loader v-if="loading" />
    <Films :films="popularFilms" v-else />
  </div>
</template>
