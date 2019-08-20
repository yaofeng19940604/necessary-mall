<template>
  <div class="hello">
    <van-sidebar class="sidebar" v-model="activeKey">
        <van-sidebar-item :title="item.name" v-for="item in categoryList" :key="item.id"/>
    </van-sidebar>
    <div class="categorywrap">
      <div v-for="item in secondCategoryList" :key="item.id">
        <img :src="item.bannerUrl"/>
        <a href="#">{{item.name}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import APIgoods from "../../api/goods.js"
export default {
    data:function(){
        return{
            activeKey: 0,
            categoryList:[],
            secondCategoryList:[],
        }
    },
    props: {

    },
    // methods:{
    //   tabChange(ev){
    //     console.log(ev);
    //     console.log(this.activeKey)
    //   }
    // },
    // 用计算属性比函数节省性能
    watch:{
      activeKey:function(newVal, oldVal){
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
.hello{
  background-color:$color;
  height: 100vh;
  @include hline(5px yellow dashed,20px)
}
.categorywrap{
  position: relative;
  top: 0;
  left: 85px;
  div{
    float: left;
    width:10%;
  }
}
</style>