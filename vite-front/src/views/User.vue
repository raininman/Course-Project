<template>
  <div class="user_container">
    <span class="user_container_head">Авторизация</span>
    <label class="user_container_label">
      <input class="user_container_input" placeholder="Email" v-model="email" />
    </label>
    <label class="user_container_label">
      <input class="user_container_input" placeholder="Логин" v-model="login" />
    </label>
    <label class="user_container_label">
      <input
        class="user_container_input"
        placeholder="Пароль"
        v-model="password"
      />
    </label>
    <button class="user_container_submit" @click="submit">Авторизация</button>
  </div>
</template>

<script setup>
import api from '@/api.js'
import { useRouter } from 'vue-router'

let email = ''
let login = ''
let password = ''

const router = useRouter()

const submit = async () => {
  if (email == 'admin' && password == 'admin' && login == 'adm') {
    router.push('admin')
  } else {
    await api.postUser({ email: email, username: login, password: password })
    router.push('/')
  }
}
</script>

<style lang="scss" scoped>
.user_container {
  margin: 50px auto;
  display: grid;
  font-family: var(--exo2);
  text-align: center;
  &_head {
    margin-bottom: 40px;
    font-weight: 700;
    font-size: 40px;
  }
  &_label {
    font-size: 24px;
    margin-bottom: 30px;
  }
  &_input {
    border: 2px solid var(--primary);
    padding: 10px 50px;
    border-radius: 35px;
    background-color: white;
    font-size: 24px;
    &:focus {
      border: 3px solid var(--primary);
    }
  }
  &_submit {
    margin: 20px auto;
    border: none;
    background: var(--primary);
    width: 230px;
    padding: 20px 50px;
    border-radius: 35px;
    color: white;
    font-size: 24px;
  }
}
</style>
