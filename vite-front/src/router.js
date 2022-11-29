import {createRouter, createWebHistory} from 'vue-router'
import Index from '@/views/Index.vue'
import Film from '@/views/Film.vue'

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
  ]
})

export default router