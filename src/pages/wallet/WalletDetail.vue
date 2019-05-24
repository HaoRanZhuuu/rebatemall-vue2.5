<template>
    <div>
      <div>
        <wallet-detail-header></wallet-detail-header>
        <div>
          <div v-for="(item,index) of logList" :key="index" class="items">
            <div class="left">
              <ul>
                <li class="title">{{item.logInfo}}</li>
                <li class="time">{{item.createTime}}</li>
              </ul>
            </div>
            <div class="right">
              <b v-if="item.money >= 0" class="add">{{item.money}}</b>
              <b v-if="item.money < 0" class="sub">{{item.money}}</b>
            </div>
          </div>
        </div>
        <!--
            "logInfo": "商品1等商品",
            "createTime": "2019-04-28T11:34:00.000+0000",
            "money": "-1170.00"-->
      </div>
    </div>
</template>

<script>
import WalletDetailHeader from './components/WalletDetailHeader'
import axios from 'axios'
import ipConfig from '../../../config/global'
export default {
  name: 'WalletDetail',
  components: {
    WalletDetailHeader
  },
  data () {
    return {
      logList: []
    }
  },
  methods: {
    getLogList () {
      axios.get(ipConfig.service_ip_address + '/rebatemall/wallet/list', {
        params: {
          userId: this.$store.state.userId
        }
      }).then(this.getLogListSucc)
    },
    getLogListSucc (res) {
      res = res.data
      if (res.code === 0 && res.data) {
        this.logList = res.data
      }
    }
  },
  mounted () {
    this.getLogList()
  }
}
</script>

<style lang="stylus" scoped>
  .items
    padding-top .25rem
    padding-bottom .5rem
    margin-bottom .6rem
    border-top 1px solid #cacaca
    .left
      float left
      padding-left .2rem
      line-height .5rem
      .title
        width 5rem
        font-size .35rem
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
      .time
        width 1.95rem
        color #cacaca
        white-space:nowrap;
        overflow:hidden;
        font-size .2rem
    .right
      padding-right .2rem
      padding-top .2rem
      float right
      .add
        color #fd7e14
        font-size .4rem
      .sub
        color black
        font-size .4rem
</style>
