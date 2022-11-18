<script setup>
import { onMounted, ref } from "vue";
import api from "@/api";
import Hero from '@/components/Hero.vue'
import Films from '@/components/Films4Column.vue'
import Cards from '@/components/Cards.vue'
import Loader from '@/components/UI/Loader.vue'

const popularFilms = ref([]);
const loading = ref(true);

onMounted(async () => {
  popularFilms.value = await api.getPopularFilms();
  loading.value = false;
});



</script>

<template>
  <div class="container">
    <Hero/>
    <Cards/>
    <Loader v-if="loading" />
    <Films :films="popularFilms" v-else />
  </div>
</template>
