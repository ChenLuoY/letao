// 封装一个模块，用于定义各种请求的方法
import instance from './config.js'

// 获取轮播图数据
export async function getLunBoData () {
  return await instance.get('/getlunbo')
}

// 获取首页推荐商品数据
export async function getRecommendData (limit = 10) {
  return await instance.get(`/recommend?limit=${limit}`)
}

// 获取新闻资讯列表数据
export async function getNewsListData (page=1,pagesize=5) {
  return  await instance.get(`/getnewslist?page=${page}&pagesize=${pagesize}`);
}
