import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './view/HomePage.vue'
import ClassifyPage from './view/ClassifyPage.vue'
import CartPage from './view/CartPage.vue'
import UserPage from './view/UserPage.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {path: "/", component: HomePage},
    {path: "/ClassifyPage", component: ClassifyPage},
    {path: "/CartPage", component: CartPage},
    {path: "/UserPage", component: UserPage},
  ]
})
