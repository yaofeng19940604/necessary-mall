<template>
  <div>
    <div class="header">
      <div class="userPortrait"></div>
      <div class="userName">
        <p>我爱中国</p>
      </div>
    </div>
    <div class="myasset">
      <div class="text">
        <h3>我的资产</h3>
      </div>
      <div class="mayasset-ico">
        <div class="quantity">
          <ul class="quantity-public">
            <li v-for="(item,index) in quantity" :key="index">{{item.num}}</li>
          </ul>
        </div>
        <div class="quantity-name">
          <ul class="quantity-public">
            <li v-for="(item,index) in quantity" :key="index">{{item.title}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      quantity: [
        { title: "回馈金", num: "￥" + 0 },
        { title: "红包", num: 0 },
        { title: "优惠券", num: 0 },
        { title: "津贴", num: "￥" + 0 },
        { title: "礼品卡", num: 0 }
      ]
    };
  }
};
</script>
<style lang="scss">
.header {
  display: flex;
  flex-direction: row;
  height: 135px;
  background-color: rgb(200, 174, 120);
  align-items: center;
  .userPortrait {
    width: 71px;
    height: 71px;
    background-color: white;
    border-radius: 50%;
    margin: 0 15px;
    background: url(//yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png);
    background-size: 100% 100%;
  }
  .userName {
    color: white;
    font-size: 14px;
  }
}
.myasset {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-bottom: 10px #f4f4f4 solid;
  .text {
    line-height: 50px;
    border-bottom: 1px #ccc solid;
    margin-left: 15px;
  }
  .mayasset-ico {
    height: 80px;
    background-color: white;
    display: flex;
    flex-direction: column;
    .quantity {
      font-size: 50px;
      font-weight: 600;
      padding-top: 5px;
    }
    .quantity-name {
    }
    .quantity-public {
      display: flex;
      flex-direction: row;
      
      li {
        width: 120px;
        line-height: 30px;
        font-size: 13px;
        text-align: center;
      }
    }
  }
}
</style>