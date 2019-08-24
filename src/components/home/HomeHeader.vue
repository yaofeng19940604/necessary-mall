<template>
  <div class="home-header">
    <div class="banner">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(img,index) in images" :key="index">
          <img :src="img"/>
        </van-swipe-item>
      </van-swipe>
      <div class="banner-bottom">
        <div class="item fl"><van-icon name="shop-o"/>自营品牌</div>
        <div class="item center fl"><van-icon name="certificate"/>30天无忧退换货</div>
        <div class="item fr"><van-icon name="after-sale"/>48小时快速退款</div>
      </div>
    </div>
    <div class="home-category-wrap">
      <div class="item" v-for="(item,index) in homecategory" :key="index">
        <img :src="item.picUrls[0]">
        <p>{{item.title}}</p>
      </div>
    </div>
    <div class="home-brand-wrap">
      <div class="top">
        <div class="title fl">品牌制造商直供</div>
        <a class="more fr" href="#">更多></a>
      </div>
      <div class="brand-wrap">
        <a href="#" class="item" v-for="(item,index) in homebrand" :key="index" :style="'backgroundImage:url('+item.picUrls[0]+')'">
          <h5>{{item.title}}</h5>
          <span></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import APIhome from "../../api/home.js"
import { Swipe, SwipeItem, Icon } from 'vant';
export default {
    data:function(){
        return{
          images:[],
          homecategory:[],
          homebrand:[],
        }
    },
    components: {
      "van-swipe":Swipe,
      "van-swipe-item":SwipeItem,
      "van-icon":Icon,
    },
    props: {

    },
    methods:{
      
    },
    created(){
        APIhome.getHomeHeader().then(res=>{
          let focus = res.data.focus;
          let imglist = [];
          for(let item of focus){
            imglist.push(item.img);
          }
          this.images = imglist;
          this.homecategory = res.data.kingKongAreaV4;
          this.homebrand = res.data.manufactureItems.manufactureItems.slice(0,4);
        });
    }
}
</script>

<style lang="scss">
.home-header{
  .banner{
    img{
      width: 355px;
    }
    .banner-bottom{
      height: 35px;
      font-size: 13px;
      line-height: 35px;
      color: $main-cl;
      .center{
        margin-left: 42px;
      }
    }
  }
  .home-category-wrap{
    padding: 0 5px;
    width: 345px;
    height: 159px;
    .item{
      width: 46px;
      margin:0 0 6px 28px;
      float: left;
      text-align: center;
      img{
        width: 46px;
      }
      p{
        font-size: 22Px;
        color: #000;
        line-height: 50Px;
      }
    }
    .item:nth-child(1){
      margin:0;
    }
    .item:nth-child(6){
      margin:0;
    }
    .item:nth-child(11){
      display: none;
    }
    .item:nth-child(12){
      display: none;
    }
  }
  .home-brand-wrap{
    width:327px;
    height: 294px;
    padding: 0 14px 14px;
    background-color: #fff;
    .top{
      height: 44px;
      width: 327px;
      line-height: 44px;
      .title{
        font-size: 17px;
        font-weight: 500;
      }
      .more{
        font-size: 14px;
      }
    }
    .brand-wrap{
      width:327px;
      .item{
        background-size:cover;
        background-position: 0 20px;
        background-repeat:no-repeat;
        display: block;
        float: left;
        width: 162px;
        height: 124px;
        text-align: center;
        h5{
          font-size: 26Px;
          line-height: 36Px;
          margin-bottom: 3px;
        }
        span{
          font-size: 24Px;
          line-height: 30Px;
          color: #999;
        }
      }
      .item:nth-child(2){
        margin-left: 2px;
      }
      .item:nth-child(4){
        margin-left: 2px;
      }
    }
  }
}
</style>