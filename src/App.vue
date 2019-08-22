<template>
  <div id="app">
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="nav-bot">
      <van-grid clickable :column-num="4">
        <van-grid-item
          @click="onClick(0)"
          :class="{ac:showIndex==0}"
          icon="wap-home"
          text="首页"
          to="/"
        />
        <van-grid-item
          @click="onClick(1)"
          :class="{ac:showIndex==1}"
          icon="shop-o"
          text="分类"
          to="/ClassifyPage"
        />
        <van-grid-item
          @click="onClick(2)"
          :class="{ac:showIndex==2}"
          icon="shopping-cart-o"
          text="购物车"
          to="/CartPage"
        />
        <van-grid-item
          @click="onClick(3)"
          :class="{ac:showIndex==3}"
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
export default {
  name: 'app',
  components: {
    "van-grid":Grid,
    "van-grid-item":GridItem,
  },
  data:function(){
    return{
      showIndex:0,
    }
  },
  methods:{
    onClick(index){
      this.showIndex = index;
    },
  }
}
</script>

<style lang="scss">
#app{
  background-color: #fff;
  display: flex;
  flex-flow:column nowrap;
  height: 100vh;
  .content{
    flex: 1;
    overflow:auto;
  }
  .nav-bot{
    border-top:1Px #e4e4e4 solid;
    border-bottom:1Px #e4e4e4 solid;
    flex: 0;
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
      background-color: pink;
    }
  }
}
</style>
