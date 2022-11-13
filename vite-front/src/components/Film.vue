<template>
  <div class="film">
    <a href="">
      <img :src="img" :alt="title" class="film_img">
    </a>
    <a href="" class="film_title">{{title}}</a>
    <span class="film_year">{{year}}</span>
  </div>
</template>

<script setup>
const  props = defineProps({
  img:{
    type:String,
    required:true
  },
  title:{
    type:String,
    required:true
  },
  year:{
    type:Number,
    required:true
  },
})
</script>

<style lang="scss" scoped>
.film{
  font-family: 'Exo 2', sans-serif;
  &_img{
    display: block;
    height: 450px;
    width: 300px;
    margin-bottom: 24px;
  }
  &_title{
    display: block;
    font-weight: 400;
    font-size: 20px;
    color: #2A254B;
    text-decoration: none;
    line-height: 140%;
    &:hover{
      text-decoration: underline;
    }
    &_year{
      display: block;
      font-weight: 400;
      font-size: 18px;
      line-height: 150%;
      color: #2A254B;
    }
  }
}
</style>