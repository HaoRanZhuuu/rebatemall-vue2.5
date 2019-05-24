<template>
  <div class="footer">
    <div @click="quitBtnClick" class="footer-icon">
      <b class="footer-font">退出登录</b>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserFooter',
  methods: {
    quitBtnClick () {
      this.$store.commit('changeUserLogin', false)
      this.$store.commit('setUserId', '')
      localStorage.removeItem('flag')
      localStorage.removeItem('userId')
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .footer
    position fixed
    left 0
    bottom 0
    width 100%
    height 0.9rem
    background #fd7e14
    color white
    z-index 9999
    text-align center
    box-shadow 0 2px 4px #000
    .footer-icon
      padding-top .3rem
      width 100%
      float left
    .footer-font
      font-size .3rem
</style>
