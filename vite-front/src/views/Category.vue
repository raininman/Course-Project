<template>
  <CategoryBlock :category="currentCategory"/>
  <CategoryFilm/>
</template>

<script setup>
import CategoryBlock from '@/components/CategoryBlock.vue'
import CategoryFilm from '@/components/CategoryFilm.vue'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import api from '@/api.js'
const route = useRoute()
const router = useRouter()
const categoryId = ref('')
const currentCategory = ref({})

onMounted(async () => {
  categoryId.value = route.params.id
  currentCategory.value = await api.getCategory(categoryId.value)
  document.documentElement.scrollTop = 0
})
</script>
