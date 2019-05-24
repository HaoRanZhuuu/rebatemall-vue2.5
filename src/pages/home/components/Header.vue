<template>
    <div class="header">
      <div class="header-left">
        <div class="iconfont back-icon" @click="backHomeClick">&#xe624;</div>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        <input @keypress="serachGoods" class="inputSearch" type="search" placeholder="输入商品信息搜索">
      </div>
      <div class="header-right user-icon">
        <span class="iconfont">&#xe625;</span>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import ipConfig from '../../../../config/global'
export default {
  name: 'HomeHeader',
  data () {
    return {
      productId: '',
      sellerId: ''
    }
  },
  props: {
    userId: String
  },
  methods: {
    serachGoods (event) {
      if (event.keyCode === 13) {
        event.preventDefault()
        let keyWord = event.target.value
        let productKeyReg = new RegExp(/￥.{10}￥￥/)
        let inviteKeyReg = new RegExp(/￥￥.{10}￥/)
        let str = keyWord.replace(/(^\s*)|(\s*$)/g, '')
        if (str === '' || str === undefined || str === null) {
          alert('关键词为空')
        } else if (productKeyReg.test(keyWord)) {
          console.log('搜索优惠商品')
          this.getProductDetailByKey(keyWord)
        } else if (inviteKeyReg.test(keyWord)) {
          this.invite(keyWord)
          console.log('搜索邀请信息')
        } else {
          this.$router.push({
            path: '/searchList/' + this.userId + '/' + keyWord
          })
        }
      }
    },
    backHomeClick () {
      this.$router.push({
        path: '/'
      })
    },
    getProductDetailByKey (keyWord) {
      axios.get(ipConfig.service_ip_address + '/rebatemall/buyer/product/searchKey', {
        params: {
          userId: this.$store.state.userId,
          key: keyWord
        }
      }).then(this.getProductSucc)
    },
    getProductSucc (res) {
      res = res.data
      if (res.code === 0 && res.data) {
        this.$router.push({
          path: '/detail/' + this.$store.state.userId + '/' + res.data.productDetail.productId + '/' + res.data.productDetail.sellerId
        })
      }
    },
    invite (keyWord) {
      axios.get(ipConfig.service_ip_address + '/rebatemall/buyer/product/searchKey', {
        params: {
          userId: this.$store.state.userId,
          key: keyWord
        }
      }).then(this.inviteSucc)
    },
    inviteSucc (res) {
      alert('认证成功')
    }
  }
}
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>
  .inputSearch
    width 4.8rem
    font-size .3rem
  .header
    display flex
    line-height .86rem
    background #fd7e14
    color: #fff
    .header-left
      width .64rem
      float left
      .back-icon
        text-align center
        font-size .4rem
    .header-input
      flex: 1
      height .64rem
      line-height .64rem
      margin-top .12rem
      margin-left .2rem
      margin-right .2rem
      padding-left .2rem
      background #ffffff
      border-radius .1rem
      color #ccc
    .header-right
      margin-left .1rem
      margin-right .2rem
      width .1.24rem
      float left
      text-align left
      .user-icon
        text-align left
        font-size .4rem
</style>
