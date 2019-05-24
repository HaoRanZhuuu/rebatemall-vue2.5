<template>
    <div>
      <div class="item-img">
        <img class="item-img-size" :src="productDetail.productIcon">
      </div>
      <div class="item-name">
        <p class="item-name-size">{{productDetail.productName}}</p>
      </div>
      <div class="item-share">
        <p class="item-key">复制框内文字搜索-获得优惠信息-{{shareWord}}</p>
      </div>
      <div class="item-button">
        <input @click="shareBtnClick" type="button" class="item-button-size tag-read" :data-clipboard-text="shareWord" value="点击一键复制口令">
      </div>
    </div>
</template>

<script>
import Clipboard from 'clipboard'
export default {
  name: 'ShareBody',
  props: {
    shareWord: '',
    productDetail: null
  },
  methods: {
    shareBtnClick () {
      let clipboard = new Clipboard('.tag-read')
      clipboard.on('success', e => {
        alert('复制成功')
        clipboard.destroy()
      })
      clipboard.on('error', e => {
        alert('浏览器不支持复制，请手动复制')
        clipboard.destroy()
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .item-img
    width 100%
    height 2rem
    margin-left 2.35rem
    margin-top 0.5rem
    .item-img-size
      width 2.5rem
      height 2.5rem
  .item-name
    margin-top 0.8rem
    text-align center
    .item-name-size
      font-size .35rem
  .item-share
    margin-left 0.8rem
    margin-right 0.8rem
    margin-top .3rem
    border 1.2px dashed red
    background #f8d7da
    .item-key
      padding .2rem
      line-height .35rem
      word-wrap break-word
      word-break break-all
      overflow hidden
      color red
  .item-button
    padding-top 1.5rem
    text-align center
    .item-button-size
      padding-left 1.7rem
      padding-right 1.7rem
      padding-top .15rem
      padding-bottom .15rem
      border-radius .5rem .5rem .5rem .5rem
      background red
      color white
</style>
