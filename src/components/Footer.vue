<template>
    <div class="footer">
          <router-link tag="div" class="footer-icon" to="/" exact>
            <p class="iconfont">&#xe62e;</p>
            <b class="footer-font">首页</b>
          </router-link>
          <router-link tag="div" class="footer-icon" to="order">
            <p class="iconfont">&#xe647;</p>
            <b class="footer-font">订单</b>
          </router-link>
          <router-link tag="div" class="footer-icon" to="cart">
            <p class="iconfont">&#xe63b;</p>
            <b class="footer-font">购物车</b>
          </router-link>
          <router-link tag="div" class="footer-icon" to="user">
            <p class="iconfont">&#xe62f;</p>
            <b class="footer-font">我的</b>
          </router-link>
    </div>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style lang="stylus" scoped>
  .iconfont
    font-size .5rem
  .footer
    position fixed
    left 0
    bottom 0
    width 100%
    height 0.9rem
    background white
    z-index 9999
    text-align center
    box-shadow 0 2px 4px #000
    .footer-icon
      padding-top .05rem
      width 25%
      float left
    .footer-font
      font-size .1rem
</style>
