'use strict'

var _vue = _interopRequireDefault(require('vue'))

var _App = _interopRequireDefault(require('./App.vue'))

var _router = _interopRequireDefault(require('./router'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

// 导入路由对象
_vue.default.config.productionTip = false
new _vue.default({
  router: _router.default,
  render: function render (h) {
    return h(_App.default)
  }
}).$mount('#app')
