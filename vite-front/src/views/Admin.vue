<template>
  <div class="admin_container">
    <div class="admin_container_top">
      <button class="admin_container_top_add" @click="router.push('changeFilm')">
        Добавить Фильм
      </button>
      <button class="admin_container_top_add" @click="router.push('changeRating')">
        Добавить Рейтинг Фильма
      </button>
      <button class="admin_container_top_add" @click="router.push('changeProducer')">
        Добавить Режиссера
      </button>
      <button class="admin_container_top_add" @click="router.push('putFilm')">
        Изменить Фильм
      </button>
      <button class="admin_container_top_add" @click="router.push('putRating')">
        Изменить Рейтинг Фильма
      </button>
      <button class="admin_container_top_add" @click="router.push('putProducer')">
        Изменить Режиссера
      </button>
      <button class="admin_container_top_add" @click="router.push('deleteFilm')">
        Удалить Фильм
      </button>
      <button class="admin_container_top_add" @click="router.push('deleteRating')">
        Удалить Рейтинг Фильма
      </button>
      <button class="admin_container_top_add" @click="router.push('deleteProducer')">
        Удалить Режиссера
      </button>
    </div>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style lang="scss" scoped>
.admin_container {
  &_top {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    &_add {
      margin: 20px auto;
      padding: 10px 20px;
      width: 200px;
      border-radius: 35px;
      font-size: 24px;
      color: white;
      border: none;
      background-color: var(--primary);
      border: 3px solid var(--primary);
      &:hover {
        color: var(--primary);
        border: 3px solid var(--primary);
        background-color: white;
      }
    }
  }
}
</style>
