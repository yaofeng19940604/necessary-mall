import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './view/HomePage.vue'
import IndexNav from './view/IndexNav.vue'
import ClassifyPage from './view/ClassifyPage.vue'
import CartPage from './view/CartPage.vue'
import UserPage from './view/UserPage.vue'
import SubClassifyPage from "./view/SubClassifyPage.vue"
import GoodsDetails from "./view/GoodsDetails.vue"
Vue.use(Router)
export default new Router({
  routes: [
    {path: "/", component: IndexNav,children:[
      {path: "", component: HomePage},//将HomePage设置为默认页面
      {path: "HomePage", component: HomePage},
      {path: "ClassifyPage", component: ClassifyPage},
      {path: "CartPage", component: CartPage},
      {path: "UserPage", component: UserPage},
    ]},
    {path: "/SubClassifyPage/:id1/:id2", component: SubClassifyPage},
    {path: "/GoodsDetails/:id", component: GoodsDetails},
  ]
})
