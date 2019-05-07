<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <div class="item border-bottom" v-for="(item , index) of recommendList" v-if="index%2==0" :key="index">
        <div class="item-lr" v-if="index < recommendList.length" :key="index">
          <img class="item-img" :src="recommendList[index].iconUrl"/>
          <div class="item-info">
            <p class="item-title">{{recommendList[index].productName}}</p>
          </div>
          <div class="item-info">
            <div class="item-money">
              <p class="item-money-old">￥{{recommendList[index].oldMoney}}</p>
              <b class="item-money-new">￥{{recommendList[index].newMoney}}</b>
            </div>
            <div class="item-iconfont">
              <span class="iconfont">&#xe63b;</span>
            </div>
          </div>
        </div>
        <div class="item-lr" v-if="index < recommendList.length - 1" :key="index+1">
          <img class="item-img" :src="recommendList[index + 1].iconUrl"/>
          <div class="item-info">
            <p class="item-title">{{recommendList[index + 1].productName}}</p>
          </div>
          <div class="item-info">
            <div class="item-money">
              <p class="item-money-old">￥{{recommendList[index + 1].oldMoney}}</p>
              <b class="item-money-new">￥{{recommendList[index + 1].newMoney}}</b>
            </div>
            <div class="item-iconfont">
              <span class="iconfont">&#xe63b;</span>
            </div>
          </div>
        </div>

      </div>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        iconUrl: 'http://img.alicdn.com/imgextra/i2/13933024215842254/T171dgFnNeXXXXXXXX_!!0-item_pic.jpg_760x760Q50s50.jpg',
        productName: '金卧ins可爱少女1.5m1.8m米床蚊帐儿童房公主吊',
        oldMoney: '2999',
        newMoney: '1999'
      }, {
        id: '0002',
        iconUrl: 'http://img.alicdn.com/imgextra/i2/13933024215842254/T171dgFnNeXXXXXXXX_!!0-item_pic.jpg_760x760Q50s50.jpg',
        productName: '金卧ins可爱少女1.5m1.8m米床蚊帐儿童房公主吊',
        oldMoney: '2999',
        newMoney: '599'
      }, {
        id: '0003',
        iconUrl: 'http://img.alicdn.com/imgextra/i2/13933024215842254/T171dgFnNeXXXXXXXX_!!0-item_pic.jpg_760x760Q50s50.jpg',
        productName: '金卧ins可爱少女1.5m1.8m米床蚊帐儿童房公主吊',
        oldMoney: '2999',
        newMoney: '999'
      }, {
        id: '0004',
        iconUrl: 'http://img.alicdn.com/imgextra/i2/13933024215842254/T171dgFnNeXXXXXXXX_!!0-item_pic.jpg_760x760Q50s50.jpg',
        productName: '金卧ins可爱少女1.5m1.8m米床蚊帐儿童房公主吊',
        oldMoney: '2999',
        newMoney: '999'
      }, {
        id: '0005',
        iconUrl: 'http://img.alicdn.com/imgextra/i2/13933024215842254/T171dgFnNeXXXXXXXX_!!0-item_pic.jpg_760x760Q50s50.jpg',
        productName: '金卧ins可爱少女1.5m1.8m米床蚊帐儿童房公主吊',
        oldMoney: '2999',
        newMoney: '999'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .iconfont
    font-size 20px
  .recommend-title
    margin-top .2rem
    line-height .8rem
    background #eee
    color red
    font-size large
    text-align center
  .item
    overflow hidden
    display flex
    height 5rem
    background #eee
    .item-lr
      background white
      width 3rem
      height 4.8rem
      margin .1rem
      border-radius .2rem
      .item-img
        width 3rem
        height 3rem
        border-radius .2rem .2rem 0rem 0rem
      .item-info
        padding-left .15rem
        padding-right .15rem
        .item-title
          padding-top .2rem
          word-wrap break-word
          word-break break-all
          overflow hidden
          font-size smaller
          line-height .3rem
        .item-money
          float left
          font-size small
          color #ccc
          .item-money-old
            font-size small
            color #ccc
            text-decoration line-through
          .item-money-new
            color red
            font-size large
            line-height .7rem
        .item-iconfont
          padding-top .4rem
          padding-right .2rem
          float right
</style>
