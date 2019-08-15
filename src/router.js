import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Playlist from './views/Playlist.vue'
import Recommend from './views/Recommend.vue'
import Hot from './views/Hot.vue'
import Search from './views/Search.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: "/", component: Home, children: [
      {path: "recommend", component: Recommend},
      {path: "hot", component: Hot},
      {path: "search", component: Search},
    ]},
    {path: "/playlist/:id", component: Playlist},
  ]
})
