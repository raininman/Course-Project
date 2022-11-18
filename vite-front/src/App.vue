<template>
  <div class="index">
    <Header :categories="categories"/>
      <div class="container">
        <router-view/>
      </div>
    <Footer/>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import api from "@/api";
import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer.vue'


const categories = ref([]);

onMounted(async () => {
  categories.value = await api.getCategories();
});
</script>


<style lang="scss">
  @import './assets/styles/global.scss';
</style>
