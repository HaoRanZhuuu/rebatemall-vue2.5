<template>
    <div>
      <div class="item" v-for="(item , index) of addressList" :key="index">
        <p>{{item.deliveryName}}</p>
        <p>{{item.deliveryPhone}}</p>
        <b v-if="item.isDefault === 1" class="isDefault">默认</b>
        <b>{{item.deliveryAddress}}</b>
        <p>********************************</p>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import ipConfig from '../../../../config/global'
export default {
  name: 'AddressBody',
  data () {
    return {
      addressList: []
    }
  },
  methods: {
    getAddressList () {
      axios.get(ipConfig.service_ip_address + '/rebatemall/buyer/address/list', {
        params: {
          userId: this.$store.state.userId
        }
      }).then(this.getAddressListSucc)
    },
    getAddressListSucc (res) {
      res = res.data
      if (res.code === 0 && res.data) {
        this.addressList = res.data
      }
    }
  },
  mounted () {
    this.getAddressList()
  }
}
</script>

<style lang="stylus" scoped>
  .isDefault
    color red
</style>
