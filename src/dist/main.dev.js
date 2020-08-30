"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _axios = _interopRequireDefault(require("axios"));

require("@/util/filter.js");

var _vant = require("vant");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 导入路由对象
// 把变量可以直接设置Vue的原型上面，后续可以直接在组件中通过this.变量名获取即可
// 自定义的变量名要$符号，为了防止与data中的属性冲突。
_vue["default"].prototype.$aaa = 11111;
_vue["default"].prototype.$api = _axios["default"];

_vue["default"].use(_vant.Lazyload, {
  lazyComponent: true
});

_vue["default"].config.productionTip = false;
new _vue["default"]({
  router: _router["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');