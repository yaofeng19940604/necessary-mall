<template>
  <div class="wrap">
    <div class="sidebar">
      <van-sidebar v-model="activeKey">
          <van-sidebar-item :title="item.name" v-for="item in categoryList" :key="item.id"/>
      </van-sidebar>
    </div>
    <van-grid class="right-category" :border="false" :column-num="3">
      <van-grid-item class="item" v-for="item in secondCategoryList" :key="item.id">
        <img :src="item.bannerUrl"/>
        <p>{{item.name}}</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import APIgoods from "../../api/goods.js"
import { Grid, GridItem } from 'vant';
export default {
    data:function(){
        return{
            activeKey: 0,
            categoryList:[],
            secondCategoryList:[],
        }
    },
    components: {
      "van-grid":Grid,
      "van-grid-item":GridItem,
    },
    props: {

    },
    methods:{
      
    },
    // 用计算属性比函数节省性能
    watch:{
      activeKey:function(newVal){
        let id = this.categoryList[newVal].id;
        APIgoods.getSecondCategories(id).then(res=>{
          this.secondCategoryList = res.data.category.subCategoryList
        });
      }
    },
    created(){
        APIgoods.getCategories().then(res=>{
          this.categoryList = res.data.categoryList
        });
        APIgoods.getSecondCategories(11).then(res=>{
          this.secondCategoryList = res.data.category.subCategoryList
        });
    }
}
</script>

<style lang="scss">
.wrap{
  display: flex;
  height: 610px;
  overflow: hidden;
  .sidebar{
    width: 85px;
    overflow: auto;
    flex-shrink: 0;
  }
  .right-category{
    flex-grow: 1;
    overflow: auto;
    .item{
      .van-grid-item__content--square{
        top:30px;
      }
      img{
        width: 70px;
      }
      p{
        text-align: center;
        font-size:14px;
        line-height: 20px;
      }
    }
  }
}
</style>