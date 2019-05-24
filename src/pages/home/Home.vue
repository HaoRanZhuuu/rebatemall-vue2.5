<template>
  <div>
    <home-header :userId="userId"></home-header>
    <home-swiper></home-swiper>
    <home-icons :userId="userId"></home-icons>
    <home-hot></home-hot>
    <home-recommend :list="recommendList" :userId="userId"></home-recommend>
    <home-footer></home-footer>
  </div>

</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeHot from './components/Hot'
import HomeFooter from '../../components/Footer'
import axios from 'axios'
import ipConfig from '../../../config/global'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeHot,
    HomeFooter
  },
  data () {
    return {
      recommendList: [],
      userId: ''
    }
  },
  methods: {
    getHomeInfo () {
      axios.get(ipConfig.service_ip_address + '/rebatemall/buyer/product/list', {
        params: {
          userId: this.$store.state.userId
        }
      }).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.code === 0 && res.data) {
        const data = res.data
        this.recommendList = data.product
      }
    },
    getUserId () {
      this.userId = this.$store.state.userId
    }
  },
  mounted () {
    this.getHomeInfo()
    this.getUserId()
  }
}
</script>

<style>
</style>
