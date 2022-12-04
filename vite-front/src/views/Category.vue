<template>
  <CategoryBlock :category="currentCategory" :key="currentCategory._id" />
  <IndependentBlock :countries="country" v-if="country" />
  <Decade :decades="decades" v-if="decades" />
  <ProducersBlock />
</template>

<script setup>
import CategoryBlock from '@/components/CategoryBlock.vue'
import ProducersBlock from '@/components/ProducersBlock.vue'
import IndependentBlock from '@/components/IndependentBlock.vue'
import Decade from '@/components/Decade.vue'

import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import api from '@/api.js'

const route = useRoute()
const router = useRouter()

const categoryId = ref('')
const currentCategory = ref({})
const country = ref([])
const decades = ref([])

onMounted(async () => {
  categoryId.value = route.params.id
  currentCategory.value = await api.getCategory(categoryId.value)
  if (categoryId.value == '63775850dd1acf34b9200f76'){
    country.value = await api.getCountries()
  }
  if(categoryId.value == '637758e4dd1acf34b9200f78'){
    decades.value = await api.getDecades()
  }
  document.documentElement.scrollTop = 0
})
</script>
