<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import Header from './components/layouts/Header.vue'
import Hero from './components/Hero.vue'
import Films from './components/Films4Column.vue'


</script>

<template>
  <div class="container">
    <Header/>
    <Hero/>
    <Films 
    
    />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.cdnfonts.com/css/satoshi');
@import url('https://fonts.cdnfonts.com/css/clash-display');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Exo+2&display=swap');

*{
  box-sizing: border-box;
}

img{
  max-width: 100%;
}


body{
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-family: 'Satoshi', sans-serif;
  // font-family: 'Clash Display', sans-serif;
  // font-family: 'Playfair Display', serif;    Кириллица
  // font-family: 'Exo 2', sans-serif;
}

.container{
  max-width: 1440px;
  margin: auto;
}
</style>
