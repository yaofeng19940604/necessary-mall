<template>
  <div class="Goods-wrap">
    <a class="goods" href="#">
      <img :src="floor.categoryItem.scenePicUrl"/>
      <p class="title">{{floor.categoryItem.simpleDesc}}</p>
      <p class="name">{{floor.categoryItem.name}}</p>
      <p class="price">{{"￥"+floor.categoryItem.retailPrice}}</p>
    </a>
  </div>
</template>

<script>
export default {
    data:function(){
        return{

        }
    },
    components: {

    },
    props: {
      imgUrl
    },
    methods:{
      
    },
}
</script>

<style lang="scss">
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
</style>