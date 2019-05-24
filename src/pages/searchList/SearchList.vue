<template>
    <div>
      <home-header :userId="userId"></home-header>
      <recommend :list="productList"></recommend>
      <empty v-if="productList.length === 0"></empty>
    </div>
</template>

<script>
import axios from 'axios'
import Recommend from '../home/components/Recommend'
import Empty from './components/ListEmpty'
import HomeHeader from '../home/components/Header'
import ipConfig from '../../../config/global'
export default {
  name: 'SearchList',
  data () {
    return {
      productList: [1],
      userId: this.$store.state.userId
    }
  },
  components: {
    Recommend,
    Empty,
    HomeHeader
  },
  methods: {
    searchGoods () {
      axios.get(ipConfig.service_ip_address + '/rebatemall/buyer/product/search', {
        params: {
          userId: this.$route.params.userId,
          keyWords: this.$route.params.keyWords
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.code === 0 && res.data) {
        console.log(res.data.product)
        this.productList = res.data.product
      }
    }
  },
  mounted () {
    this.searchGoods()
  }
}
</script>

<style lang="stylus" scoped>

</style>
