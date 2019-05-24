<template>
    <div>
      <div class="detail-item">
        <img class="detail-img" :src="'http://192.168.58.103:80' + productInfo.productIcon"/>
        <div class="detail-item-money">
          <div class="detail-money">
            <p class="detail-money-new">
              ￥{{productInfo.productPrice - productInfo.productDiscount}}
            </p>
            <p class="detail-money-old">
              ￥{{productInfo.productPrice}}
            </p>
          </div>
          <div @click="shareBtnClick" class="detail-share">
            <p class="iconfont">&#xe653;</p>
            <b>分享</b>
          </div>
        </div>
        <div class="detail-info">
          <p>
            商品名：{{productInfo.productName}}
          </p>
          <br>
          <p class="detail-text">
            描述：{{productInfo.productDescription}}
          </p>
        </div>
      </div>
      <router-link tag="div" class="item-back" to="/">
        <span class="iconfont">&#xe624;</span>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {

    }
  },
  props: {
    productInfo: null
  },
  methods: {
    shareBtnClick () {
      this.$router.push('/share/' + this.$store.state.userId + '/' + this.productInfo.productId)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .iconfont
    font-size 24px
  .detail-img
    width 7.2rem
    height 6.5rem
    border-radius 0rem 0rem .3rem .3rem
  .detail-item-money
    width 100%
    .detail-money
      float left
      width 5rem
      height 0.8rem
      padding-top .2rem
      padding-left  .2rem
      .detail-money-new
        color red
        font-size .4rem
      .detail-money-old
        color #cacaca
        font-size .3rem
        text-decoration line-through
    .detail-share
      float right
      width 1rem
      height 0.8rem
      padding-top .2rem
  .detail-info
    padding-top 1rem
    padding-left .2rem
  .item-back
    padding .1rem
    position absolute
    top .3rem
    left .3rem
    background #333333
    color white
    border-radius .4rem .4rem .4rem .4rem
  .detail-text
    word-wrap break-word
    word-break break-all
    overflow hidden
    line-height .5rem
</style>
