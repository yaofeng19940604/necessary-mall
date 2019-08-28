<template>
  <div class="homefloor-wrap">
    <div class="goods-wrap" v-for="(floor,index) in homefloor" :key="index">
      <div v-if="floor.categoryItem">
        <Goods :goodsVal="floor.categoryItem"></Goods>
      </div>
    </div>
  </div>
</template>

<script>
import APIhome from "../../api/home.js"
import Goods from "../goods/Goods.vue"
export default {
    data:function(){
        return{
          homefloor:[],
        }
    },
    components: {
      Goods,
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
}
</style>