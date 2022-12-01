<template>
  <footer class="footer">
    <div class="footer_content">
      <div class="footer_top">
        <div class="footer_menu">
          <div class="footer_menu_column">
            <span class="footer_menu_title">Decades</span>
            <router-link to="/" class="footer_menu_link">2010s</router-link>
            <router-link to="/" class="footer_menu_link">2000s</router-link>
            <router-link to="/" class="footer_menu_link">1990s</router-link>
            <router-link to="/" class="footer_menu_link">1980s</router-link>
            <router-link to="/" class="footer_menu_link">1970s</router-link>
          </div>
          <div class="footer_menu_column">
            <span class="footer_menu_title">Categories</span>
            <router-link to="/" class="footer_menu_link"
              >German Expressionism</router-link
            >
            <router-link to="/" class="footer_menu_link">New Hollywood</router-link>
            <router-link to="/" class="footer_menu_link">French New Wave</router-link>
            <router-link to="/" class="footer_menu_link">Independent</router-link>
          </div>
          <div class="footer_menu_column">
            <span class="footer_menu_title">Independent</span>
            <router-link to="/" class="footer_menu_link">Japan</router-link>
            <router-link to="/" class="footer_menu_link">Sweden</router-link>
            <router-link to="/" class="footer_menu_link">South Korea</router-link>
            <router-link to="/" class="footer_menu_link">Italy</router-link>
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
          <a href="https://instagram.com" class="footer_bottom_link">
            <img
              src="/svg/footer_instagram.svg"
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
