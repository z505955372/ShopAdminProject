import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
// 懒加载引入
const Login = () => import('@/views/Login.vue')
const routes = [{
    path: '/login',
    name: 'Login',
    component: Login
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router