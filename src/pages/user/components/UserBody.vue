<template>
    <div>
      <router-link tag="div" class="item" to="/address">
        <div class="items">
          <b class="user-item">我的收货地址</b>
        </div>
      </router-link>
      <router-link tag="div" class="item" to="/wallet">
        <div class="items">
          <b class="user-item">我的钱包</b>
        </div>
      </router-link>
      <router-link tag="div" class="item" to="/invite">
        <div class="items">
          <b class="user-item">我的邀请码</b>
        </div>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'UserBody'
}
</script>

<style lang="stylus" scoped>
  .item
    width 100%
    height 100%
    background #eaeaea
    .items
      width 100%
      border-bottom  1px solid black
      padding-top .4rem
      float left
      .user-item
        padding-left .2rem
      .user-icon
        padding-left  1rem

</style>
