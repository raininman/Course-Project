<template>
  <CategoryBlock :category="currentCountry"/>
  <IndependentFilm/>
</template>

<script setup>
import CategoryBlock from '@/components/CategoryBlock.vue'
import IndependentFilm from '@/components/IndependentFilm.vue'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import api from '@/api.js'
const route = useRoute()
const router = useRouter()
const countryId = ref('')
const currentCountry = ref({})

onMounted(async () => {
  countryId.value = route.params.id
  currentCountry.value = await api.getCountry(countryId.value)
  document.documentElement.scrollTop = 0
})
</script>
