<template>
    <div class="back">
      <div class="items" v-for="(item , index) of orderList" :key="index">
        <p class="item-status" v-if="item.orderStatus === 2">
          订单取消
        </p>
        <p class="item-status" v-else-if="item.orderStatus === 1">
          订单完成
        </p>
        <p class="item-status" v-else-if="item.orderStatus === 0 && item.payStatus === 1">
          已支付
        </p>
        <p class="item-status" v-else-if="item.orderStatus === 0 && item.payStatus === 0">
          待支付
        </p>
        <div class="item-goodsList" v-for="(list , indexs) of item.orderDetailVoList" :key="indexs">
          <div class="items-img">
            <img class="items-img-size" :src="'http://192.168.58.103:80' + list.productIcon">
          </div>
          <div class="items-right">
            <p class="item-name">{{list.productName}}</p>
            <div class="item-mq">
              <b class="item-money">￥{{list.productPrice - list.productDiscount}}</b>
              <p class="item-quantity">X{{list.productQuantity}}</p>
            </div>
          </div>
        </div>
        <div class="item-bottom">
          <b>共{{item.quantity}}件商品</b>
          <b>合计￥{{item.orderShouldpay}}</b>
        </div>
        <div class="item-btn">
          <input @click="finishBthClick (item.orderId)" class="it-btn" type="button" v-if="item.orderStatus === 0 && item.payStatus === 1" value="完成订单">
          <router-link tag="input" class="it-btn" type="button" v-if="item.orderStatus === 0 && item.payStatus === 0" value="支付订单" :to="'/pay/' + item.orderId + '/' + item.orderShouldpay"></router-link>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import ipConfig from '../../../../config/global'
export default {
  name: 'OrderBody',
  inject: ['reload'],
  data () {
    return {
      orderList: [],
      config: ipConfig
    }
  },
  methods: {
    getOrderList () {
      axios.get(ipConfig.service_ip_address + '/rebatemall/buyer/order/list', {
        params: {
          userId: this.$store.state.userId
        }
      }).then(this.getOrderInfoSucc)
    },
    getOrderInfoSucc (res) {
      res = res.data
      if (res.code === 0 && res.data) {
        this.orderList = res.data
      }
    },
    finishBthClick (orderId) {
      let param = new URLSearchParams()
      param.append('userId', this.$store.state.userId)
      param.append('orderId', orderId)
      axios.put(ipConfig.service_ip_address + '/rebatemall/buyer/order/finish', param).then(this.finishSucc)
    },
    finishSucc () {
      alert('订单完成')
      this.$router.push('/order')
      this.reload()
    }
  },
  mounted () {
    this.getOrderList()
  }
}
</script>

<style lang="stylus" scoped>
  .back
    background #eee
    .items
      margin .2rem
      background white
      border-radius .2rem .2rem .2rem .2rem
      .item-status
        color #fd7e14
        padding-left 5.3rem
        padding-top .3rem
      .item-goodsList
        background white
        margin-top .1rem
        margin-left .2rem
        width 6.3rem
        height 1.7rem
        .items-img
          width 1.5rem
          height 1.5rem
          float left
          padding-top .1rem
          padding-left .1rem
          .items-img-size
            width 1.5rem
            height 1.5rem
            border-radius .2rem .2rem .2rem .2rem
        .items-right
          float left
          padding-left .2rem
          padding-top .3rem
          .item-mq
            padding-left 3.5rem
            .item-money
              color red
            .item-quantity
              color #cacaca
      .item-bottom
        padding-left 3.8rem
        padding-bottom .2rem
      .item-btn
        padding-left 5rem
        padding-bottom .2rem
        .it-btn
          padding-left .2rem
          padding-right .2rem
          padding-top .1rem
          padding-bottom .1rem
          border-radius .5rem .5rem .5rem .5rem
          color white
          background #fd7e14
</style>
