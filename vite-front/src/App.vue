<template>
  <div class="index">
    <Header/>
      <div class="container">
        <router-view/>
      </div>
    <Footer/>
  </div>
</template>

<script setup>
import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer.vue'
</script>


<style lang="scss">
  @import './assets/styles/global.scss';
</style>
