<template>
  <div class="hero">
    <div class="hero_info">
      <div class="hero_info_text">
        <h2 class="hero_info__title">«Фильм как сон, фильм как музыка. Никакое искусство не проходит через нашу совесть так, как это делает кино, и проникает прямо в наши чувства, глубоко в темные комнаты наших душ»</h2>
        <span class="hero_info__description">― Ingmar Bergman</span>
      </div>
      <div class="hero_info_link">
        <!-- <uiButton type="link" to="/">
          Github
        </uiButton> -->
        <a href="https://github.com/raininman/Course-Project" class="hero_info_link" target="_blank">Github</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import uiButton from '@/components/UI/Button.vue';

</script>


<style lang="scss" scoped>
.hero{
  background-image: url(/img/hero_background.png);
  height: 704px;
  background-color: darkgray;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 80px;
  &_info{
    background-color: #fff;
    max-width: 630px;
    height: 444px;
    padding: 40px 55px;
    display: flex;
    flex-direction:column ;
    justify-content: space-between;
    &_link{
    background: var(--primary);
    font-family: var(--satoshi);
    font-size: 16px;
    color: #fff;
    padding: 10px 20px;
    width: 130px;
    display: inline-flex;
    align-items: flex-start;
    justify-content: center;
    cursor: pointer;
    border: none;
    text-decoration: none;
      &:hover{
        opacity: 0.8;
      }
    }

    &__title{
      font-family: var(--exo2);
      font-weight: 400;
      font-size: 26px;
      color: #22202E;
      text-align: justify;
    }
    &__description{
      font-family: var(--satoshi);
      font-weight: 400;
      font-size: 18px;
      line-height: 150%;
      color: var(--lightGray);
    }
  }
}
</style>