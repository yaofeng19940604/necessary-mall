<template>
  <div class="user-wrap">
    <UserHeader></UserHeader>
    <UserMain></UserMain>
  </div>
</template>

<script>
import UserHeader from "../components/user/UserHeader.vue"
import UserMain from "../components/user/UserMain.vue"
export default {
  data(){
    return {

    }
  },
  components: {
    UserHeader,
    UserMain,
  }
}
</script>
<style lang="scss">
.user-wrap{
  height: 100%;
  overflow:auto;
}
  
</style>
