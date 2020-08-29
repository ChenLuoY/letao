import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '@/components/tabbar/home.vue'
import mycar from '@/components/tabbar/mycar.vue'
import user from '@/components/tabbar/user.vue'
import newslist from '@/components/news/newslist.vue'
import goodslist from '@/components/news/goodslist.vue'

Vue.use(VueRouter)

// 实例化路由对象
const router = new VueRouter({
  routes: [
    { path: '/', redirect: 'home' },
    { path: '/home', component: home },
    { path: '/mycar', component: mycar },
    { path: '/user', component: user },
    { path: '/newslist/:id', component: newslist },
    { path: '/goodslist', component: goodslist }
  ]
})

export default router
