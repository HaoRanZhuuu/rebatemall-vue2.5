<template>
    <div>
      <detail-product :productInfo = "productDetail"></detail-product>
      <detail-footer :productInfo = "productDetail"></detail-footer>
    </div>
</template>

<script>
import DetailProduct from '../detail/components/Product'
import DetailFooter from '../detail/components/DetailFooter'
import axios from 'axios'
import ipConfig from '../../../config/global'
export default {
  name: 'ShareDetail',
  components: {
    DetailProduct,
    DetailFooter
  },
  data () {
    return {
      productDetail: Object
    }
  },
  methods: {
    getDetailInfo () {
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
        console.log(res.data)
        this.productDetail = res.data
        this.productDetail.sellerId = this.$route.params.sellerId
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style scoped>

</style>
