<template>
    <div class="home_container">
        <!-- 轮播图 -->
        <van-swipe class="my-swipe" :autoplay="3000" :indicator-color="color">
            <van-swipe-item v-for="item in lunboData" :key="item.img">
                <img :src="item.img" />
            </van-swipe-item>
        </van-swipe>
        <!-- 8宫图 -->
        <van-grid :column-num="4" :border="false">
            <van-grid-item icon="photo-o" @click="goodsList" text="文字">
                <img src="../../assets/images/menu10.png">
                <div>数码电器</div>
            </van-grid-item>
            <van-grid-item icon="photo-o" to="/newslist/2" text="文字">
                <img src="../../assets/images/menu19.png">
                <div>乐淘头条</div>
            </van-grid-item>
            <van-grid-item icon="photo-o" text="文字">
                <img src="../../assets/images/menu18.png">
                <div>美图欣赏</div>
            </van-grid-item>
            <van-grid-item icon="photo-o" text="文字">
                <img src="../../assets/images/menu15.png">
                <div>乐淘服饰</div>
            </van-grid-item>
            <van-grid-item icon="photo-o" text="文字">
                <img src="../../assets/images/menu12.png">
                <div>9.9元拼单</div>
            </van-grid-item>
            <van-grid-item icon="photo-o" text="文字">
                <img src="../../assets/images/menu15.png">
                <div>乐淘服饰</div>
            </van-grid-item>
            <van-grid-item icon="photo-o" text="文字">
                <img src="../../assets/images/menu16.png">
                <div>物流查询</div>
            </van-grid-item>
            <van-grid-item icon="photo-o" text="文字">
                <img src="../../assets/images/menu17.png">
                <div>全部</div>
            </van-grid-item>
        </van-grid>

        <!-- 为你推荐 -->
        <van-divider :style="{ color: '#333', borderColor: '#545e6c', padding: '0 16px' }">
            为你推荐
        </van-divider>
        <!-- 商品展示 -->
        <div class="goodslist">
            <div class="item" v-for="item in recommendData" :key="item.id">
                <img :src="item.img_url">
                <div class="text">
                    <div class="title">{{ item.title }}</div>
                    <div class="footer">
                        <span class="price">{{ item.sell_price }}</span>
                        <span class="buy">{{ item.buy }}购买</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Swipe, SwipeItem, Grid, GridItem, Divider } from 'vant'
import { getLunBoData, getRecommendData } from '@/api/index.js'
export default {
  data () {
    return {
      lunboData: [],
      recommendData: [],
      color: '#ccc'
    }
  },
  components: {
    'van-swipe': Swipe,
    'van-swipe-item': SwipeItem,
    'van-grid': Grid,
    'van-grid-item': GridItem,
    'van-divider': Divider
  },
  methods: {
    // 获取轮播图数据
    async getLunbo () {
      var res = await getLunBoData()
      this.lunboData = res.message
    },
    async getRecommend () {
      var { message } = await getRecommendData()
      this.recommendData = message
    },
    goodsList () {
      this.$router.push('/goodslist')
    }
  },
  created () {
    //   重新显示头部
    this.$parent.hideNavBar();
    this.$parent.showHeader();

    
    this.getLunbo()
    this.getRecommend()
  }
}
</script>

<style lang="scss" scoped>
    .home_container{
        background: rgb(240, 237, 237);
        .my-swipe{
            height: 200px;
            .van-swipe-item{
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }

        .van-grid{
            background: #fff;
            .van-grid-item{
                box-sizing: border-box;
                padding: 8px 2px;
                img{
                    width: 50%;
                }
                .text{
                    color: #524949;
                }
            }
        }

        .goodslist{
            display: flex;
            flex-wrap: wrap;            // 换行
            justify-content: center;    // 两端居中
            padding: 2px;
            .item{
                display: flex;
                flex-direction: column;             // 纵向排列,即从上往下
                justify-content: space-between;     // 两端分开
                width: 46%;
                margin: 4px;
                border-radius: 6px;         // 圆度
                background: #fff;
                overflow: hidden;           // 超出隐藏
                img{
                    width: 100%;
                }
                .text{
                    padding: 2px;
                    display: flex;
                    flex-direction: column;
                    .title{
                        color: #333;
                        font-size: 12px;
                    }
                    .footer{
                        display: flex;
                        
                        ;
                        align-items: center;   // 侧轴(纵轴)上居中         // 纵轴     上居中
                        padding: 4px;
                        .price {
                            font-size: 14px;
                            color: #f50;
                            padding: 10px 0;
                        }

                        .buy {
                            font-size: 12px;
                            color: #999;
                        }
                    }
                }
            }
        }
    }
</style>
