'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

var _axios = _interopRequireDefault(require('axios'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

// 这里我们封装封装一个axios的实例
var instance = _axios.default.create({
  baseURL: 'http://api.w0824.com/api'
}) // 添加请求拦截器

instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
}) // 添加响应拦截器

instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})
var _default = instance
exports.default = _default
