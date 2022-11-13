<template>
  <header class="header">
    <div class="header_top">
      <div class="header_top_left"></div>
      <a href="#" class="header_logo">Seb's</a>
      <div class="header_top_right">
        <a href="#" class="header_top_right__user">
          <img src="/svg/user_header.svg" alt="user icon">
        </a>
      </div>
    </div>
    <div class="header_menu">
      <a class="header_menu__link"
      :href="element.path"
      v-for="(element,i) of menu"
      :key="i">
      {{element.name}}
      </a>
    </div>
  </header>
</template>

<script setup>
  import {ref} from 'vue'

  const menu=[
    {
      name:'French New Wave',
      path:'/new_wave'
    },
    {
      name:'Independent',
      path:'/independent'
    },
    {
      name:'New Hollywood',
      path:'/hollywood'
    },
    {
      name:'German Expressionism ',
      path:'/expressionism'
    }
  ]
</script>


<style lang="scss" scoped>
.header{
  height: 132px;
  background-color: #fff;
  &_top{
    display: flex;
    justify-content: space-between;
    height: 70px;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin: 0 28px;
  }
  &_logo{
    font-family: 'Satoshi', sans-serif;
    color: #22202E;
    font-weight: 400;
    font-size: 24px;
    text-decoration: none;
    text-align: center;
      &:hover{
        text-decoration: underline;
      }
  }
  &_menu{
    height: 62px;
    display: flex;
    justify-content: center;
    align-items: center;
    &__link{
      margin:0 22px;
      font-weight: 400;
      font-size: 16px;
      color: #726E8D;
      text-decoration: none;
        &:hover{
          text-decoration: underline;
        }
    }
  }
}
</style>