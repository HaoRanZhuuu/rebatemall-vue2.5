<template>
    <div>
      <div class="item">
        <p class="wait">待支付</p>
        <p class="money">￥{{money}}</p>
        <input class="input" v-model="password" type="password" placeholder="请输入支付密码">
        <br>
        <input class="btn" type="button" @click="payBthClick" value="确认支付">
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import ipConfig from '../../../config/global'
export default {
  name: 'Pay',
  data () {
    return {
      userId: '',
      password: '',
      orderId: '',
      money: ''
    }
  },
  methods: {
    payBthClick () {
      let param = new URLSearchParams()
      param.append('userId', this.$store.state.userId)
      param.append('password', this.password)
      param.append('orderId', this.$route.params.orderId)
      axios.put(ipConfig.service_ip_address + '/rebatemall/wallet/pay', param).then(this.paySucc)
    },
    getMoney () {
      this.money = this.$route.params.money
    },
    paySucc (res) {
      alert('支付成功')
      this.$router.push('/order')
    }
  },
  mounted () {
    this.getMoney()
  }
}
</script>

<style lang="stylus" scoped>
  .item
    text-align center
    .wait
      font-size .4rem
      padding-top 3rem
    .money
      padding-top .5rem
      font-size .6rem
    .input
      text-align center
      padding-top .5rem
      width 2rem
      border-bottom 1px solid black
    .btn
      background #fd7e14
      color white
      margin-top .5rem
      padding-left 1rem
      padding-right 1rem
      padding-top .2rem
      padding-bottom .2rem
      border-radius .5rem
</style>
