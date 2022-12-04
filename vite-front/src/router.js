import {createRouter, createWebHistory} from 'vue-router'
import Index from '@/views/Index.vue'
import Film from '@/views/Film.vue'
import Category from '@/views/Category.vue'
import Producer from '@/views/Producer.vue'
import Decades from '@/views/Decades.vue'
import Independent from '@/views/Independent.vue'
import User from '@/views/User.vue'
import Admin from '@/views/Admin.vue'
import ChangeFilm from '@/views/ChangeFilm.vue'
import ChangeProducer from '@/views/ChangeProducer.vue'

const router = createRouter({
  history:createWebHistory(),
  routes:[
    {
      path:'/',
      name:'Index',
      component: Index
    },
    {
      path: "/film/:id",
      name: "Film",
      component: Film,
    },
    {
      path: "/category/:id",
      name: "Category",
      component: Category,
    },
    {
      path:'/category/decade/:id',
      name:'Decades',
      component: Decades
    },
    {
      path: "/producer/:id",
      name: "Producer",
      component: Producer,
    },
    {
      path: "/category/independent/:id",
      name: "Independent",
      component: Independent,
    },
    {
      path: "/user",
      name: "User",
      component: User,
    },
    {
      path: "/admin",
      name: "Admin",
      component: Admin,
    },
    {
      path: "/changeFilm",
      name: "ChangeFilm",
      component: ChangeFilm,
    },
    {
      path: "/changeProducer",
      name: "ChangeProducer",
      component: ChangeProducer,
    },
  ]
})

export default router