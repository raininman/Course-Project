<template>
  <footer class="footer">
    <div class="footer_content">
      <div class="footer_top">
        <div class="footer_menu">
          <div class="footer_menu_column">
            <span class="footer_menu_title">Декады</span>
            <router-link
              to="/category/decade/63891b55abb5ba3600b13055"
              class="footer_menu_link"
              >2010-е</router-link
            >
            <router-link
              to="/category/decade/63891b63abb5ba3600b13059"
              class="footer_menu_link"
              >2000-е</router-link
            >
            <router-link
              to="/category/decade/63891ba5c00162a779a5ed9f"
              class="footer_menu_link"
              >1990-е</router-link
            >
            <router-link
              to="/category/decade/63891baec00162a779a5eda1"
              class="footer_menu_link"
              >1980-е</router-link
            >
          </div>
          <div class="footer_menu_column">
            <span class="footer_menu_title">Направления</span>
            <router-link
              to="/category/637757e8dd1acf34b9200f74"
              class="footer_menu_link"
              >Немецкий Экспрессионизм</router-link
            >
            <router-link
              to="/category/637757b1dd1acf34b9200f72"
              class="footer_menu_link"
              >Новый Голливуд</router-link
            >
            <router-link
              to="/category/63775751dd1acf34b9200f70"
              class="footer_menu_link"
              >Французская Новая Волна</router-link
            >
          </div>
          <div class="footer_menu_column">
            <router-link
              to="/category/63775850dd1acf34b9200f76"
              class="footer_menu_title"
              >Назависимое</router-link
            >
            <router-link
              to="/category/independent/638ca4f9b4a25f480c6ba03c"
              class="footer_menu_link"
              >Япония</router-link
            >
            <router-link
              to="/category/independent/638ca89ab4a25f480c6ba05d"
              class="footer_menu_link"
              >Швеция</router-link
            >
            <router-link
              to="/category/independent/638caa0fb4a25f480c6ba098"
              class="footer_menu_link"
              >Италия</router-link
            >
          </div>
        </div>
      </div>
      <div class="footer_bottom">
        <span class="footer_bottom_copyright"> Copyright 2022 Egor Orlov </span>
        <div class="footer_bottom_socials">
          <a href="https://github.com/raininman" class="footer_bottom_link">
            <img
              src="/svg/footer_github.svg"
              alt="github"
              class="footer_bottom_link_img"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: var(--primary);
  color: #fff;
  padding: 58px 82px 25px 82px;
  font-style: var(--exo2);
  &_top {
    border-bottom: 1px solid #4e4d93;
  }
  &_menu {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    &_title {
      display: block;
      font-size: 14px;
      margin-bottom: 12px;
      text-decoration: none;
      color: white;
    }
    &_link {
      display: block;
      color: #fff;
      font-size: 14px;
      text-decoration: none;
      margin-bottom: 12px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  &_bottom {
    display: flex;
    justify-content: space-between;
    padding-top: 22px;
    &_socials {
      display: flex;
      align-items: center;
    }
    &_link {
      margin: 0 12px;
      &_img {
        fill: #fff;
      }
    }
  }
}
</style>
