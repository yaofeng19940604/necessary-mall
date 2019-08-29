<template>
  <div>
    <van-grid :column-num="3">
      <van-grid-item v-for="(item,index) in newData" :key="index" :icon="item.icon" :text="item.text" />
      <van-grid-item />
    </van-grid>
    <van-button class="user-out" type="default" size="large">退出登录</van-button>
  </div>
</template>
<script>
import { Grid, GridItem, Button } from "vant";
export default {
  data() {
    return {
      newData:[
        {icon:"orders-o",text:"我的订单"},
        {icon:"calender-o",text:"周末一起拼"},
        {icon:"after-sale",text:"售后服务"},
        {icon:"points",text:"邀请返利"},
        {icon:"bag-o",text:"优先购"},
        {icon:"gold-coin-o",text:"积分中心"},
        {icon:"gem-o",text:"会员俱乐部"},
        {icon:"location-o",text:"地址管理"},
        {icon:"certificate",text:"账号安全"},
        {icon:"service-o",text:"帮助与客服"},
        {icon:"records",text:"意见反馈"}
      ]
    };
  },
  components: {
    "van-grid": Grid,
    "van-grid-item": GridItem,
    "van-button":Button,
  }
};
</script>
<style lang="scss">
.user-out{
  border-top: 10px #f4f4f4 solid;
}
</style>