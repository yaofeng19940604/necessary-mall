<template>
  <div class="homefloor-wrap">
    <div class="goods-wrap" v-for="(floor,index) in homefloor" :key="index">
      <div v-if="floor.categoryItem">
        <a class="goods" href="#">
          <img :src="floor.categoryItem.scenePicUrl"/>
          <p class="title">{{floor.categoryItem.simpleDesc}}</p>
          <p class="name">{{floor.categoryItem.name}}</p>
          <p class="price">{{"￥"+floor.categoryItem.retailPrice}}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import APIhome from "../../api/home.js"
export default {
    data:function(){
        return{
          homefloor:[],
        }
    },
    components: {

    },
    props: {

    },
    methods:{
      
    },
    created(){
        APIhome.getRecommend().then(res=>{
          this.homefloor = res.data.rcmdItemList;
        });
    }
}
</script>

<style lang="scss">
.homefloor-wrap{
  width: 355px;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
  .goods{
    display: block;
    width: 170px;
    img{
      width: 170px;
    }
    .title{
      width: 170px;
      background-color: #f1ece2;
      font-size: 24PX;
      line-height: 50Px;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
      margin-bottom: 8px;
    }
    .name{
      line-height: 40PX;
      font-size: 30PX;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
    }
    .price{
      line-height: 40PX;
      font-size: 26PX;
      color: #f22a2a;
      margin-bottom: 30px;
    }
  }
}
</style>