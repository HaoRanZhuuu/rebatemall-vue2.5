<template>
  <div class="item">
    <div class="input">
      <input v-model="deliveryName" placeholder="收货人姓名" type="text">
    </div>
    <div class="input">
      <input v-model="deliveryPhone" placeholder="手机号码" type="text">
    </div>
    <div class="input">
      <input v-model="deliveryAddress" placeholder="收货地址（详细到门牌号）" type="text">
    </div>
    <div>
      <input type="button" @click="saveBtnClick" value="保存">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ipConfig from '../../../../config/global'
export default {
  name: 'AddressAddBody',
  data () {
    return {
      userId: '',
      deliveryName: '',
      deliveryPhone: '',
      deliveryAddress: ''
    }
  },
  methods: {
    getUserId () {
      this.userId = this.$store.state.userId
    },
    saveBtnClick () {
      let params = new URLSearchParams()
      params.append('userId', this.userId)
      params.append('deliveryName', this.deliveryName)
      params.append('deliveryPhone', this.deliveryPhone)
      params.append('deliveryAddress', this.deliveryAddress)
      axios.post(ipConfig.service_ip_address + '/rebatemall/buyer/address/add', params).then(this.addAddressSucc)
    },
    addAddressSucc (res) {
      res = res.data
      if (res.code === 0 && res.data) {
        alert('收货地址添加成功' + res.data.addressId)
        this.$router.push({
          path: '/address'
        })
      }
    }
  },
  mounted () {
    this.getUserId()
  }
}
</script>

<style lang="stylus" scoped>
  .item
    .input
      flex: 1
      height 1rem
      line-height 1rem
      margin-top .1rem
      padding-left .1rem
      box-shadow 0 .5px 1px  #000
      background #fffff
      color #ccc
</style>
