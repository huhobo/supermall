import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push          //解决双击err的问题
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    component:()=>import('../views/home')
  },
  {
    path: '/category',
    component:()=>import('../views/category')
  },
  {
    path: '/cart',
    component:()=>import('../views/cart')
  },
  {
    path: '/profile',
    component:()=>import('../views/profile')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
