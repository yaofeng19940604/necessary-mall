<template>
  <div class="goods-details-wrap">
    <van-swipe class="van-swipe" @change="onchange">
      <van-swipe-item class="van-swipe-item" v-for="item in goodsSwipe" :key="item">
        <img :src="item" />
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator">{{ current+1 }}/4</div>
    </van-swipe>
    <div class="goodsText">
      <div class="goodsText-top">
        <div class="text-top-price">￥ {{goodsPrice}}</div>
        <div class="text-top-collection">
          <van-icon class="collection-like" :name="like||'like-o'" color="red" @click="iconClick" />收藏
          <van-icon class="collection" name="share" />分享
        </div>
      </div>
      <h5 class="production">
        生产周期： 5天
        <van-icon name="question-o" />
      </h5>
      <div class="goods-introduce">
        <h3 class="introduce-title">{{goodsName}}</h3>
        <p class="detailed-introduction">{{simpleDesc}}</p>
      </div>
    </div>
    <div class="goods-ensure">
      <ul class="goods-ensure-ul">
        <li>
          <van-icon name="passed" />不支持七天退货
        </li>
        <li>
          <van-icon name="passed" />顺风包邮
        </li>
        <li>
          <van-icon name="passed" />售后赔付
        </li>
        <li>
          <van-icon name="passed" />理财时效
        </li>
        <li>...</li>
      </ul>
    </div>
    <div class="goods-quality">
      <div class="goods-title">
        <div class="goods-qualit-name">
          <p>品名</p>
          <p>特点</p>
        </div>
        <div class="goods-qualit-title">
          {{goodsName}}
          <hr />
          <div v-for="(item,index) in featureList" :key="index">{{item.text1}},{{item.text2}}</div>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Icon } from "vant";
import GoodsAPI from "../../api/goods";
export default {
  data: function() {
    return {
      goodsSwipe: [],
      current: 0,
      goodsName: 0,
      goodsPrice: 0,
      simpleDesc: 0,
      like: false,
      goodsId: "",
      featureList: []
    };
  },
  components: {
    "van-swipe": Swipe,
    "van-swipe-item": SwipeItem,
    "van-icon": Icon
  },
  props: {
    goodsApiId: String
  },
  methods: {
    onchange(index) {
      this.current = index;
    },
    //收藏  点击事件
    iconClick() {
      this.like = !this.like ? "like" : false;
    }
  },
  created() {
    GoodsAPI.getGoodsDetails(this.goodsApiId).then(res => {
      let obj = res.data.itemDetail;
      for (const key in obj) {
        this.goodsSwipe.push(obj[key]);
      }
      this.goodsSwipe.splice(0, 1);
      this.goodsName = res.data.name;
      this.goodsPrice = res.data.retailPrice;
      this.simpleDesc = res.data.simpleDesc;
      this.featureList = res.data.featureList;
    });
  }
};
</script>

<style lang="scss">
.goods-details-wrap {
  .van-swipe {
    position: relative;
    .van-swipe-item {
      width: 100%;
      img {
        width: 100vw;
        height: 375px;
      }
    }
    .custom-indicator {
      position: absolute;
      bottom: 10px;
      right: 10px;
      display: block;
      width: 30px;
      height: 15px;
      color: white;
      background-color: #c0bec1;
      text-align: center;
      line-height: 15px;
      border-radius: 4px;
    }
  }
  .goodsText {
    padding: 12px;
    .goodsText-top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .text-top-price {
        color: red;
        line-height: 30px;
        font-size: 16px;
        font-weight: 600;
      }
      .text-top-collection {
        .collection {
          margin-left: 13px;
        }
        line-height: 30px;
        font-size: 10px;
        .collection-like {
          transition: all 1s;
        }
      }
    }
    .production {
      line-height: 30px;
      color: #c2c0c1;
      font-size: 10px;
      text-align: right;
    }
    .goods-introduce {
      .introduce-title {
        font-size: 15px;
        line-height: 30px;
        font-weight: 600;
      }
      .detailed-introduction {
        color: #a0a0a0;
        line-height: 17px;
        font-size: 10px;
      }
    }
  }
  .goods-ensure {
    .goods-ensure-ul {
      display: flex;
      justify-content: space-around;
      margin-top: 15px;
      background-color: rgba(206, 207, 136, 0.144);
      box-shadow: 0px -10px 10px 3px rgba(206, 207, 136, 0.103),
        0px 10px 10px 3px rgba(206, 207, 136, 0.103);
      color: #aa9277;
      line-height: 30px;
      font-size: 10px;
    }
  }
  .goods-quality {
    padding: 24px;
    background-color: #efeff1;
    line-height: 27px;
    font-size: 13px;
    .goods-title {
      display: flex;
      justify-content: space-between;
      .goods-qualit-name {
        width: 50vw;
      }
      .goods-qualit-title {
        width: 50vw;
      }
    }
  }
}
</style>