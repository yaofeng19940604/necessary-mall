<template>
  <div class="home-wrap">
    <HomeHeader></HomeHeader>
    <HomeFloor></HomeFloor>
  </div>
</template>

<script>
import HomeHeader from "../components/home/HomeHeader.vue"
import HomeFloor from "../components/home/HomeFloor.vue"
export default {
  data(){
    return {

    }
  },
  components: {
    HomeHeader,
    HomeFloor,
  }
}
</script>
<style lang="scss">
.home-wrap{
  height: 610px;
  padding: 0 10px;
  overflow: auto;
}
</style>
