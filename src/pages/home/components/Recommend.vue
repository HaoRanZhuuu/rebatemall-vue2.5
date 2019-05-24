<template>
  <div>
    <ul>
      <div class="item border-bottom" v-for="(item , index) of list" v-if="index%2==0" :key="index" >
        <router-link tag="div"
                     class="item-lr"
                     v-if="index < list.length"
                     :key="index"
                     :to="'/detail/'+ userId + '/' + list[index].productId"
        >
          <img class="item-img" :src="'http://192.168.58.103:80' + list[index].productIcon"/>
          <div class="item-info">
            <p class="item-title">{{list[index].productName}}</p>
          </div>
          <div class="item-info">
            <div class="item-money">
              <p class="item-money-old">￥{{list[index].productPrice}}</p>
              <b class="item-money-new">￥{{list[index].productPrice - list[index].productDiscount}}</b>
            </div>
            <div class="item-iconfont">
              <span class="iconfont">&#xe63b;</span>
            </div>
          </div>
        </router-link>
        <router-link tag="div"
                     class="item-lr"
                     v-if="index < list.length - 1"
                     :key="index+1"
                     :to="'/detail/'+ userId + '/' + list[index + 1].productId"
        >
          <img class="item-img" :src="list[index + 1].productIcon"/>
          <div class="item-info">
            <p class="item-title">{{list[index + 1].productName}}</p>
          </div>
          <div class="item-info">
            <div class="item-money">
              <p class="item-money-old">￥{{list[index + 1].productPrice}}</p>
              <b class="item-money-new">￥{{list[index + 1].productPrice - list[index + 1].productDiscount}}</b>
            </div>
            <div class="item-iconfont">
              <span class="iconfont">&#xe63b;</span>
            </div>
          </div>
        </router-link>
      </div>
    </ul>
  </div>

</template>

<script>
import ipConfig from '../../../../config/global'
export default {
  name: 'HomeRecommend',
  props: {
    list: Array,
    userId: String
  },
  data () {
    return {
      config: ipConfig
    }
  }
}
</script>

<style lang="stylus" scoped>
  .iconfont
    font-size 20px
  .item
    overflow hidden
    display flex
    height 5.5rem
    background #eee
    .item-lr
      background white
      width 3.4rem
      height 5.3rem
      margin .1rem
      border-radius .2rem
      .item-img
        width 3.4rem
        height 3.4rem
        border-radius .2rem .2rem 0rem 0rem
      .item-info
        padding-left .15rem
        padding-right .15rem
        .item-title
          padding-top .2rem
          word-wrap break-word
          word-break break-all
          overflow hidden
          font-size .3rem
          line-height .3rem
        .item-money
          float left
          font-size .3rem
          color #ccc
          .item-money-old
            position absolute
            top 4.4rem
            font-size .3rem
            color #ccc
            text-decoration line-through
          .item-money-new
            position absolute
            top 4.7rem
            color red
            font-size .4rem
            line-height .7rem
        .item-iconfont
          padding-top .7rem
          padding-left 2.5rem
</style>
