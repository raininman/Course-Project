<template>
  <div class="hero">
    <div class="hero_info">
      <div class="hero_info_text">
        <h2 class="hero_info__title">«Фильм как сон, фильм как музыка. Никакое искусство не проходит через нашу совесть так, как это делает кино, и проникает прямо в наши чувства, глубоко в темные комнаты наших душ»</h2>
        <span class="hero_info__description">― Ingmar Bergman</span>
      </div>
      <div class="hero_info_link">
        <a href="https://github.com/raininman" class="hero_info_link" target="_blank">Github</a>
      </div>
    </div>
  </div>
</template>

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
    &__title{
      font-family: 'Exo 2', sans-serif;
      font-weight: 400;
      font-size: 26px;
      color: #22202E;
      text-align: justify;
    }
    &__description{
      font-family: 'Satoshi';
      font-weight: 400;
      font-size: 18px;
      line-height: 150%;
      color: #5B5676;
    }
    &_link{
      color: #2A254B;
      text-decoration: none;
      background: #F9F9F9;
      padding: 20px;
      width: 130px;
      &:hover{
        text-decoration: underline;
      }
    }
  }
}
</style>