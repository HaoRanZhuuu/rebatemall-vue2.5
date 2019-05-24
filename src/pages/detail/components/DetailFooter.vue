<template>
    <div class="detail-footer">
      <input class="detail-footer-button" type="button" @click="addToCart" value="添加到购物车">
    </div>
</template>

<script>
export default {
  name: 'DetailFooter',
  props: {
    productInfo: null
  },
  methods: {
    addToCart () {
      const goodsInfo = {
        productId: this.productInfo.productId,
        productName: this.productInfo.productName,
        productIcon: this.productInfo.productIcon,
        productQuantity: 1,
        sellerId: this.productInfo.sellerId
      }
      this.$store.commit('addToCart', goodsInfo)
      alert('添加购物车成功')
      console.log(this.productInfo)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .detail-footer
    position fixed
    right 0
    bottom 0
    .detail-footer-button
      padding-top .2rem
      padding-bottom .2rem
      padding-left .3rem
      padding-right .3rem
      margin-bottom .2rem
      margin-right .2rem
      background #fd7e14
      color white
      border-radius .5rem .5rem .5rem .5rem
</style>
