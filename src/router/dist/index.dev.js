'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

var _vue = _interopRequireDefault(require('vue'))

var _vueRouter = _interopRequireDefault(require('vue-router'))

var _home = _interopRequireDefault(require('@/components/tabbar/home.vue'))

var _mycar = _interopRequireDefault(require('@/components/tabbar/mycar.vue'))

var _user = _interopRequireDefault(require('@/components/tabbar/user.vue'))

var _newslist = _interopRequireDefault(require('@/components/news/newslist.vue'))

var _goodslist = _interopRequireDefault(require('@/components/news/goodslist.vue'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

_vue.default.use(_vueRouter.default)

// 实例化路由对象
var router = new _vueRouter.default({
  routes: [{
    path: '/',
    redirect: 'home'
  }, {
    path: '/home',
    component: _home.default
  }, {
    path: '/mycar',
    component: _mycar.default
  }, {
    path: '/user',
    component: _user.default
  }, {
    path: '/newslist/:id',
    component: _newslist.default
  }, {
    path: '/goodslist',
    component: _goodslist.default
  }]
})
var _default = router
exports.default = _default
