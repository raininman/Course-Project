<template>
  <CategoryBlock :category="currentCategory"/>
  <Decade :decades="decades"/>
</template>

<script setup>
import CategoryBlock from '@/components/CategoryBlock.vue'
import Decade from '@/components/Decade.vue'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import api from '@/api.js'
const route = useRoute()
const router = useRouter()
const decades = ref([])
const currentCategory = ref({})

onMounted(async () => {
  decades.value = await api.getDecades()
  currentCategory.value = await api.getCategory('637758e4dd1acf34b9200f78')
  document.documentElement.scrollTop = 0
})
</script>
