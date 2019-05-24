<template>
    <div>
      <share-header :productDetail="productDetail"></share-header>
      <ShareBody :shareWord = 'shareWord' :productDetail="productDetail"></ShareBody>
    </div>
</template>

<script>
import ShareBody from './components/ShareBody'
import ShareHeader from './components/ShareHeader'
import axios from 'axios'
import ipConfig from '../../../config/global'
export default {
  name: 'Share',
  components: {
    ShareBody,
    ShareHeader
  },
  data () {
    return {
      shareWord: '',
      productDetail: ''
    }
  },
  methods: {
    getShareInfo () {
      axios.get(ipConfig.service_ip_address + '/rebatemall/buyer/product/share', {
        params: {
          userId: this.$route.params.userId,
          productId: this.$route.params.productId
        }
      }).then(this.getKeySucc)
    },
    getKeySucc (res) {
      res = res.data
      if (res.code === 0 && res.data) {
        this.shareWord = res.data.shareWord
      }
    },
    getProductInfo () {
      axios.get(ipConfig.service_ip_address + '/rebatemall/buyer/product/detail', {
        params: {
          userId: this.$route.params.userId,
          productId: this.$route.params.productId
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.code === 0 && res.data) {
        this.productDetail = res.data
      }
    }
  },
  mounted () {
    this.getShareInfo()
    this.getProductInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
