<template>
  <div class="app_container">
    <!-- 头部 -->
    <van-sticky :offset-top="0">
      <div class="header">
        <img src="./assets/images/logo.png">
        <Search placeholder="请输入搜索关键词"></Search>
      </div>
    </van-sticky>

    <!-- 中间 -->
    <router-view></router-view>
    <!-- 底部 -->
    <van-tabbar v-model="active">
      <van-tabbar-item to="/home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/mycar" icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-o">我的乐淘</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { Search, Tabbar, TabbarItem, Sticky } from 'vant'
export default {
  data () {
    return {
      active: 0,
      container: null
    }
  },
  components: {
    Search,
    'van-tabbar': Tabbar,
    'van-tabbar-item': TabbarItem,
    'van-sticky': Sticky
  },
  mounted () {
    //  顶部
    this.container = this.$refs.container
  }
}
</script>
<style lang="scss" scoped>
.app_container {
   min-width:320px;     // 最小宽度
   max-width: 750px;    // 最大宽度
   margin: auto;
   padding-bottom: 50px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px;
    background-color: #ffffff;
    img {
      height: 44px;
    }
    .van-search {
      flex: 1;
    }
  }
}
</style>
