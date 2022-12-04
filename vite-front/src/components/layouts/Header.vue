<template>
  <header class="header">
    <div class="header_top">
      <div class="header_top_left"></div>
      <router-link to="/" class="header_logo">Seb's</router-link>
      <div class="header_top_right">
        <router-link to="/user" class="header_top_right__user" >
          <img src="/svg/user_header.svg" alt="user icon" />
        </router-link>
      </div>
    </div>
    <div class="header_menu">
      <router-link
        class="header_menu__link"
        v-for="category of categories"
        :to="`/category/${category._id}`"
        :key="category._id"
      >
        {{ category.title }}
      </router-link>
    </div>
  </header>
</template>

<script setup>
const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.header {
  height: 132px;
  background-color: #fff;
  &_top {
    display: flex;
    justify-content: space-between;
    height: 70px;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin: 0 28px;
  }
  &_logo {
    font-family: var(--satoshi);
    color: #22202e;
    font-weight: 400;
    font-size: 24px;
    text-decoration: none;
    text-align: center;
    &:hover {
      text-decoration: underline;
    }
  }
  &_menu {
    height: 62px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--exo2);
    &__link {
      margin: 0 22px;
      font-weight: 400;
      font-size: 16px;
      color: var(--gray);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
