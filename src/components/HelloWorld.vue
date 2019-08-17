<template>
  <div class="hello">
    <van-button type="default">默认按钮</van-button>
    <van-cell-group>
      <van-field
        v-model="username"
        label="用户名"
        placeholder="请输入用户名"
        error
      />
      <van-field
        v-model="phone"
        label="手机号"
        placeholder="请输入手机号"
        error-message="手机号格式错误"
      />
    </van-cell-group>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style lang="scss">
.hello{
  background-color: $color;
  @include hline(5px yellow dashed,20px)
}

</style>
