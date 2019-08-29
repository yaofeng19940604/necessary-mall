<template>
  <div>
      <goodsSwipe :goodsApiId ="goodsId"/>
  </div>
</template>
<script>
import goodsSwipe from "../components/goodsDetails/details";
export default {
  data: function() {
    return {
      goodsId:null,
    };
  },
  components: {
    goodsSwipe
  },
  props: {},
  methods: {},
  created() {
    this.goodsId = this.$route.params.id;
  },
};
</script>

<style lang="scss">

</style>