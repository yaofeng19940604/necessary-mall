<template>
  <div>
    <van-cell-group v-for="item in evalist" :key="item.createTime">
      <van-cell title="商品评价" is-link value="好评度" />
      <div class="evaluate">
        <div class="userpic">
          <img :src="item.frontUserAvatar" />
        </div>
        <div class="usereva">
          <ul>
            <li class="username">{{item.frontUserName}}</li>
            <li></li>
            <li>{{item.content}}</li>
            <li>
              <img v-for="picItem in item.picList" :key="picItem.id" :src="picItem" />
            </li>
          </ul>
        </div>
      </div>
    </van-cell-group>
  </div>
</template>


<script>
import APIgoods from "../../api/goods.js";
import { Cell, CellGroup } from "vant";

export default {
  components: {
    "van-cell-group": CellGroup,
    "van-cell": Cell
  },
  data() {
    return {
      evalist: []
    };
  },
  created() {
    APIgoods.getGoodsDetails(3439006).then(res => {
      this.evalist = res.data.comments;
        // console.log(this.evalist, res.data);
    });
  }
};
</script>

<style lang="scss" scoped>
.evaluate {
  display: flex;
  margin-top: 20px;
  padding-bottom: 20px;
}
.userpic {
  width: 20%;
  text-align: center;
}
.userpic img {
  width: 50px;
  height: 50px;
}
.usereva {
  width: 70%;
  line-height: 0.5rem;
}
.usereva .username {
  margin-bottom: 5px;
  font-size: 14px;
}
.usereva img {
  width: 70px;
  height: 70px;
  margin: 4px;
}
</style>