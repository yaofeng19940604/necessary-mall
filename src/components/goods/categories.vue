<template>
  <div class="hello">
    <van-sidebar v-model="activeKey">
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
    </van-sidebar>
  </div>
</template>

<script>
export default {
    data:function(){
        return{
            activeKey: 0,
            categories:{},
        }
    },
    props: {

    },
    created:function(){
        
    }
}
</script>

<style lang="scss">
.hello{
  background-color: $color;
  @include hline(5px yellow dashed,20px)
}
</style>