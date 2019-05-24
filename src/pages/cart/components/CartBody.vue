<template>
    <div class="item">
      <div  class="empty" v-if="GoodsList.length ===0">
        <b class="empty-text">购物车为空</b>
      </div>
      <div v-for="(item,index) of GoodsList" :key="index" class="items">
        <div class="items-left">
          <img class="cart-img" :src="'http://192.168.58.103:80' + item.productIcon"/>
        </div>
        <div class="items-right">
          <p class="productName">{{item.productName}}</p>
          <b class="addBtn iconfont" @click="addButtonClick(item.productId)">&#xe60d;</b>
          <b class="productQuantity">{{item.productQuantity}}</b>
          <b class="subBtn iconfont" @click="subButtonClick(item.productId)">&#xe60a;</b>
          <b class="delBtn iconfont" @click="delButtonClick(item.productId)">&#xe645;</b>
        </div>
      </div>
      <div class="submit">
        <input class="submit-btn" @click="submitButtonClick" type="button" value="结算">
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import ipConfig from '../../../../config/global'
export default {
  name: 'CartBody',
  data () {
    return {
      GoodsList: [],
      itemList: [],
      items: {
        productId: String,
        productQuantity: Number,
        sellerId: String
      }
    }
  },
  methods: {
    getGoodsList () {
      this.GoodsList = this.$store.state.goodsList
    },
    addButtonClick (productId) {
      this.$store.commit('addGoodQuantity', productId)
    },
    subButtonClick (productId) {
      this.$store.commit('subGoodQuantity', productId)
    },
    delButtonClick (productId) {
      this.$store.commit('deleteGoods', productId)
    },
    submitButtonClick () {
      this.getItems(this.GoodsList)
      let itemJson = JSON.stringify(this.itemList)
      let param = new URLSearchParams()
      param.append('userId', this.$store.state.userId)
      param.append('items', itemJson)
      axios.post(ipConfig.service_ip_address + '/rebatemall/buyer/order/create', param).then(this.handlePostDataSucc)
    },
    getItems (GoodsList) {
      GoodsList.forEach(item => {
        let buffer = {
          productId: null,
          productQuantity: null,
          sellerId: null
        }
        buffer.productId = item.productId
        buffer.productQuantity = item.productQuantity
        buffer.sellerId = item.sellerId
        this.itemList.push(buffer)
      })
    },
    handlePostDataSucc (res) {
      res = res.data
      if (res.code === 0 && res.data) {
        alert('订单创建成功' + res.data.OrderId)
        this.$store.commit('cleanGoods', true)
        this.$router.push({
          path: '/order'
        })
      }
    }
  },
  mounted () {
    this.getGoodsList()
  }
}
</script>

<style lang="stylus" scoped>
  .empty
    text-align center
    padding-top 1rem
    .empty-text
      color red
      font-size 0.5rem
  .item
    background #eaeaea
    height 20rem
    .items
      background white
      margin-top  .2rem
      width 100%
      height 2.6rem
      border-radius .2rem .2rem .2rem .2rem
      .items-left
        height 2.6rem
        float left
        .cart-img
          width 2rem
          height 2rem
          margin-top .3rem
          margin-left .3rem
          border-radius .2rem .2rem .2rem .2rem
      .items-right
        height 2.6rem
        margin-left  .2rem
        padding-top  .5rem
        .productName
          padding-left 2.5rem
          padding-bottom .7rem
        .addBtn
          margin-left 2.5rem
          border 1px solid #eaeaea
        .productQuantity
          margin-top .5rem
        .subBtn
          margin-top .5rem
          border 1px solid #eaeaea
        .delBtn
          padding-left .5rem
  .submit
    position fixed
    bottom 1.2rem
    right 0.5rem
    .submit-btn
      padding-top .2rem
      padding-bottom .2rem
      padding-left .8rem
      padding-right .8rem
      background  #fd7e14
      color white
      border-radius .5rem .5rem .5rem .5rem

</style>
