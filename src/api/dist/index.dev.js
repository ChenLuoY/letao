'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.getLunBoData = getLunBoData
exports.getRecommendData = getRecommendData

var _config = _interopRequireDefault(require('./config.js'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

// 封装一个模块，用于定义各种请求的方法
// 获取轮播图数据
function getLunBoData () {
  return regeneratorRuntime.async(function getLunBoData$ (_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2
          return regeneratorRuntime.awrap(_config.default.get('/getlunbo'))

        case 2:
          return _context.abrupt('return', _context.sent)

        case 3:
        case 'end':
          return _context.stop()
      }
    }
  })
} // 获取首页推荐商品数据

function getRecommendData () {
  var limit
  var _args2 = arguments
  return regeneratorRuntime.async(function getRecommendData$ (_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          limit = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 10
          _context2.next = 3
          return regeneratorRuntime.awrap(_config.default.get('/recommend?limit='.concat(limit)))

        case 3:
          return _context2.abrupt('return', _context2.sent)

        case 4:
        case 'end':
          return _context2.stop()
      }
    }
  })
}
