"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLunBoData = getLunBoData;
exports.getRecommendData = getRecommendData;
exports.getNewsListData = getNewsListData;

var _config = _interopRequireDefault(require("./config.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 封装一个模块，用于定义各种请求的方法
// 获取轮播图数据
function getLunBoData() {
  return regeneratorRuntime.async(function getLunBoData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_config["default"].get('/getlunbo'));

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
} // 获取首页推荐商品数据


function getRecommendData() {
  var limit,
      _args2 = arguments;
  return regeneratorRuntime.async(function getRecommendData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          limit = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 10;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_config["default"].get("/recommend?limit=".concat(limit)));

        case 3:
          return _context2.abrupt("return", _context2.sent);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
} // 获取新闻资讯列表数据


function getNewsListData() {
  var page,
      pagesize,
      _args3 = arguments;
  return regeneratorRuntime.async(function getNewsListData$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          page = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : 1;
          pagesize = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : 5;
          _context3.next = 4;
          return regeneratorRuntime.awrap(_config["default"].get("/getnewslist?page=".concat(page, "&pagesize=").concat(pagesize)));

        case 4:
          return _context3.abrupt("return", _context3.sent);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
}