<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon" @click="backHomeClick">&#xe624;</div>
    </div>
    <div class="header-title">
      <router-link tag="b" class="header-title-text" to="/wallet/detail">明细</router-link>
    </div>
    <div class="header-right user-icon">
    </div>
  </div>
</template>

<script>
export default {
  name: 'WalletHeader',
  methods: {
    backHomeClick () {
      this.$router.push({
        path: '/user'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header
    display flex
    line-height .86rem
    background #fd7e14
    color: #fff
    .header-left
      width .64rem
      float left
      .back-icon
        text-align center
        font-size .4rem
    .header-title
      flex: 1
      height .64rem
      line-height .64rem
      margin-top .12rem
      margin-left 5.3rem
      padding-left .2rem
      font-size .3rem
      .header-title-text
        color white
    .header-right
      margin-left .1rem
      margin-right .2rem
      width .1.24rem
      float left
      text-align left
      .user-icon
        text-align left
        font-size .4rem
</style>
