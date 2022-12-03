<template>
  <div class="index">
    <Header :categories="newCategories"  />
    <div class="container">
      <router-view :key="$route.path" />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import api from '@/api'
import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer.vue'

const categories = ref([])
const newCategories = ref([])


onMounted(async () => {
  categories.value = await api.getCategories()
  categories.value.forEach(el=>{
    if(el._id != '637758e4dd1acf34b9200f78'){
      newCategories.value.push(el)
    }
  })
})
</script>

<style lang="scss">
@import './assets/styles/global.scss';
</style>
