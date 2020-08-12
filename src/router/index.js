import Vue from 'vue'
import VueRouter from 'vue-router'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'Home'
    },
    component: () => import(/* webpackChunkName: "common" */ '@components/Common.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@pages/home/Home.vue')
      },
      {
        path: '/content',
        name: 'Content',
        component: () => import(/* webpackChunkName: "content" */ '@pages/contentM/ContentM.vue'),
        children: [
          {
            path: '/content/article',
            name: 'ContentArticle',
            component: () => import(/* webpackChunkName: "article" */ '@pages/contentM/components/ContentArticle.vue')
          },
          {
            path: '/content/appeal',
            name: 'ContentAppeal',
            component: () => import(/* webpackChunkName: "appeal" */ '@pages/contentM/components/ContentAppeal.vue')
          },
          {
            path: '/add',
            name: 'Add',
            component: () => import(/* webpackChunkName: "add" */ '@components/Add.vue')
          },
          {
            path: '/edit/:id',
            name: 'Edit',
            component: () => import(/* webpackChunkName: "edit" */ '@components/Edit.vue')
          }
        ]
      },
      {
        path: '/data-center',
        name: 'DataCenter',
        component: () => import(/* webpackChunkName: "data-center" */ '@pages/dataCenter/DataCenter.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@components/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Home') {
    if (!localStorage.getItem('token')) {
      router.replace('/login')
    }
  }
  next()
})

export default router
