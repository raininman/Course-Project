import {createRouter, createWebHistory} from 'vue-router'
import Index from '@/views/Index.vue'
import Film from '@/views/Film.vue'
import Category from '@/views/Category.vue'
import Decade from '@/views/Decade.vue'
import Decades from '@/views/Decades.vue'



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
      path:'/decade',
      name:'Decade',
      component: Decade
    },
    {
      path:'/decade/:id',
      name:'Decades',
      component: Decades
    },
  ]
})

export default router