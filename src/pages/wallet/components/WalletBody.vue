<template>
    <div>
      <div class="item-img">
        <img class="img" :src="config.img_ip_address + '/img/money.png'">
      </div>
      <div class="item-text">
        <p class="text-title">我的零钱</p>
        <div class="item-text-money">
          <p class="text-money">￥{{money}}</p>
        </div>
      </div>
    </div>
</template>

<script>
import ipConfig from '../../../../config/global'
import axios from 'axios'
export default {
  name: 'WalletBody',
  data () {
    return {
      config: ipConfig,
      money: ''
    }
  },
  methods: {
    getMoney () {
      axios.get(ipConfig.service_ip_address + '/rebatemall/wallet/get', {
        params: {
          userId: this.$store.state.userId
        }
      }).then(this.getMoneySucc)
    },
    getMoneySucc (res) {
      res = res.data
      if (res.code === 0 && res.data) {
        this.money = res.data.walletBalance
      }
    }
  },
  mounted () {
    this.getMoney()
  }
}
</script>

<style lang="stylus" scoped>
  .item-img
    width 1rem
    height 1rem
    padding-left 3.1rem
    padding-top 1.5rem
    .img
      width 1rem
      height 1rem
  .item-text
    text-align center
    padding-top 1rem
    .item-text-money
      padding-top 0.5rem
      .text-money
        font-size 0.8rem

</style>
