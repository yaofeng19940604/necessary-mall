<template>
    <div class="app-wrap">
        <div class="subclassify-wrap">
            <div v-for="goods in goodslist" :key="goods.id">
                <Goods :goodsVal="goods"></Goods>
            </div>
        </div>
    </div>
</template>

<script>
import Goods from "../components/goods/Goods.vue"
import ApiGoods from "../api/goods.js"
export default {
  data(){
    return {
        goodslist:[],
    }
  },
  components: {
    Goods,
  },
  created(){
    let  params = this.$route.params;
    ApiGoods.getSubCategoryGoods(params.id1,params.id2).then(res=>this.goodslist = res.data.itemList)
  }
}
</script>
<style lang="scss">
.app-wrap{
padding: 0 10px;
    .subclassify-wrap{
        width: 355px;
        display: flex;
        flex-wrap: wrap;
        justify-content:space-between;
    }
}
</style>
