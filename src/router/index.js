import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
// import HomePage from '@/views/HomePage'
// import Essay from '@/views/Essay'
// import Memories from '@/views/Memories'
// import Personal from '@/views/Personal'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect: '/Login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '*',
    component: () => import("@/views/404")
  },
  {
    path: '/403',
    name: '403',
    component: () => import("@/views/403")
  },
  {
    path:'/homepage',
    name:'homepage',
    component: () => import("@/views/HomePage")
  },
  {
    path:'/essay',
    name:'essay',
    component: () => import("@/views/Essay")
  },
  {
    path:'/memories',
    name:'memories',
    component: () => import("@/views/Memories")
  },
  {
    path:'/personal',
    name:'personal',
    component: () => import("@/views/Personal"),
    meta: {role: 'admin'}
  },
]

const router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {
  const role = window.sessionStorage.getItem('TOKEN')
  if (window.sessionStorage.getItem('HAS_LOGIN')) {
    if (to.meta.role === 'admin') {
      if (role === 'admin') {
        next ()
      }
      else {
        next ({
          name: '403'
        })
      }
    }
    if (to.name !== 'login') {
      next()
    }
    else {
      next ({
        name: 'homepage'
      })
    }
  } else {
    if (to.name === 'login') {
      next()  
    }
    else {
      next({
        name: 'login'
      })
    }
  }
})

export default router
