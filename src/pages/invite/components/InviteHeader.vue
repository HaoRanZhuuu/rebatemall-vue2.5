<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon" @click="backHomeClick">&#xe624;</div>
    </div>
    <div class="header-title">
      <b></b>
    </div>
    <div class="header-right user-icon">
    </div>
  </div>
</template>

<script>
export default {
  name: 'InviteHeader',
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
  @import "~styles/varibles.styl"
  .header
    display flex
    line-height .86rem
    background white
    color: black
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
      margin-left 2.2rem
      margin-right .2rem
      padding-left .2rem
      color black
      font-size .3rem
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
