import Vue from 'vue'
import App from './App.vue'

// 导入路由对象
import router from './router'

import axios from "axios";
// 把变量可以直接设置Vue的原型上面，后续可以直接在组件中通过this.变量名获取即可
// 自定义的变量名要$符号，为了防止与data中的属性冲突。
Vue.prototype.$aaa = 11111;
Vue.prototype.$api = axios;



import "@/util/filter.js"
// 注册时可以配置额外的选项
import { Lazyload } from "vant";
Vue.use(Lazyload, {
  lazyComponent: true,
});



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
