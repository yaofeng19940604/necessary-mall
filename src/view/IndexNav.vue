<template>
  <div id="index-wrap">
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="nav-bot">
      <van-grid clickable :column-num="4">
        <van-grid-item
          class="item ac"
          icon="wap-home"
          text="首页"
          to="/"
        />
        <van-grid-item
          class="item"
          icon="shop-o"
          text="分类"
          to="/ClassifyPage"
        />
        <van-grid-item
          class="item"
          icon="shopping-cart-o"
          text="购物车"
          to="/CartPage"
        />
        <van-grid-item
          class="item"
          icon="manager-o"
          text="我的"
          to="/UserPage"
        />
      </van-grid>
    </div>
  </div>
</template>

<script>
import { Grid, GridItem } from 'vant';
import $ from 'jquery'
export default {
  components: {
    "van-grid":Grid,
    "van-grid-item":GridItem,
  },
  data:function(){
    return{

    }
  },
  methods:{

  },
  mounted() {
    $(".item").click(function(){
        $(this).addClass("ac").siblings().removeClass("ac");
    })
  },
}
</script>

<style lang="scss">
#index-wrap{
  background-color: $main-bc;
  display: flex;
  flex-flow:column nowrap;
  height: 100vh;
  .content{
    flex: 1;
    overflow:hidden;
  }
  .nav-bot{
    border-top:1Px #e4e4e4 solid;
    border-bottom:1Px #e4e4e4 solid;
    flex: 0;
    height: 114px;
    .van-grid-item__content{
      background-color:transparent;
      padding-top: 6px;
      padding-bottom: 6px;
    }
    .van-grid-item__icon{
      font-size: 20px;
    }
    .van-grid-item__text{
      margin-top:4px;
      font-size: 14px;
    }
    .ac{
      .van-grid-item__icon{
        color: #854b98;
      }
      .van-grid-item__text{
        color: #854b98;
      }
    }
  }
}
</style>
