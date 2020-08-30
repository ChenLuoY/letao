<template>
    <div class="newslist_container">
      <!-- 加载  刷新时显示 -->
      <van-loading v-if="isShow" :vertical="true" type="spinner" color="#ccc" size="30px">加载中...</van-loading>
      <!-- 下拉刷新 -->
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="newslist">
          <div class="item" v-for="item in newslist" :key="item.id">
            <div class="img_container">
              <img :src="item.img_url">
            </div>
            <div class="text">
              <div class="title">{{ item.title }}</div>
              <div class="info">
                <span>发布时间：{{ item.add_time | dateFormat('YYYY-MM-DD') }}</span>
                <span>点击次数：{{ item.click }}</span>
              </div>
            </div>
          </div>
        </div>
      </van-pull-refresh>



      <!-- 加载更多 -->
      <!-- 只有loading才显示loading-text的内容 -->
      <van-button
        :loading="isMore"
        v-if="hasButton"
        type="info"
        @click="loadMore"
        block
        loading-text="loading"
      >加载
      </van-button>
    </div>
</template>

<script>
import { getNewsListData } from "@/api/index.js"
import { PullRefresh, Toast, Button, Loading } from "vant";
export default {
  data () {
    return {
      newslist:[],
      page:1,
      pagesize:10,
      isLoading:false,    // 下拉刷新
      hasData:true,
      isShow:true,        // 加载数据
      hasButton: true
    }
  },
  methods:{
    // 获取数据
    async getNewsList() {
      this.hasButton = true;  // 显示下面的加载更多按钮
      if (this.hasData == false) {
        Toast("亲，已经没数据了");
        this.isMore = false;
        return;
      }


      var { message } = await getNewsListData(this.page, this.pagesize);
      // 下拉刷新
      this.isMore = false;
      // 加载数据
      this.isShow = false;
      // 判断数据是否加载完毕
      if (message.length == 0) {
        Toast("没有更多数据");
        this.hasData = false; // 说明没有数据
        return;
      }
       // 新数据需要拼接旧数据
      this.newslist = this.newslist.concat(message);
    },
    // 下拉刷新
    onRefresh(){
      // 下拉页面重置为1
      this.page = 1;
      this.newslist = [];
      this.hasData = true;
      this.isShow = true;       // 刷新加载
      this.isMore = false;      // 加载数据
      this.hasButton = false;
      // 延迟器
      setTimeout(() => {
        this.isLoading = false;
        //下拉刷新即重新加载当前页面中的数据即可
        this.getNewsList();
        Toast("加载成功");
      }, 500);
    },
    loadMore(){
      // 加载更多
      this.page++;
      this.isMore = true;
      this.getNewsList();
    }
  },
  created() {
    // 显示头部
    this.$parent.showNavBar({title:"新闻联播"})
    this.$parent.hideHeader()
    this.getNewsList();
  },
  // 给标签取别名
  components:{
    "van-pull-refresh" : PullRefresh,
    "van-loading":Loading,
    "van-button":Button
  }
}
</script>

<style lang="scss" scoped>
  // 整个页面
  .newslist_container{
    // 单个div数据
    .newslist{
      padding: 4px;
      background-color: rgb(241, 235, 235);
      // div数据
      .item{
        display: flex;
        border-bottom: 1px solid #ccc;
        margin-top: 8px;
        // 图片
        .img_container{
          display: flex;
          justify-content: center;  // 两端居中
          align-items: center;      // 侧轴(纵轴)上居中
          padding: 2px;
          width: 100px;
          height: 100px;

          img {
            width: 100px;
            height: 100%;
          }
        }
        // 数据
        .text{
          display: flex;
          flex-direction: column;            // 纵向排列,即从上往下
          justify-content: space-between;   // 两端分开
          padding: 2px;
          // 标题
          .title{
            color: #000;
            font-size: 14px;
            margin-top: 10px;
            font-weight: 700;
            // 限制两行文本，超出显示省略号
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
          // 时间 点击次数
          .info{
            display: flex;
            justify-content: space-between;
            color: #888;
            font-size: 12px;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
</style>
