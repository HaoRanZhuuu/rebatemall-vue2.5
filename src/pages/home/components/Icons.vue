<template>
    <div class="icons">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page, index) of pages" :key="index">
          <router-link tag="div" class="icons-set" v-for="item of page" :key="item.id" :to="'/searchList/' + userId + '/' + item.desc">
            <div class="icon-img">
              <svg class="iconfont icon-img-content icon" aria-hidden="true">
                <use :xlink:href="item.iconCode"></use>
              </svg>
            </div>
            <p class="icon-desc">{{item.desc}}</p>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    userId: ''
  },
  data: function () {
    return {
      iconList: [{
        id: '0001',
        iconCode: '#iconyifu',
        desc: '服装'
      }, {
        id: '0002',
        iconCode: '#iconlanqiu',
        desc: '运动'
      }, {
        id: '0003',
        iconCode: '#iconjiushui',
        desc: '酒水'
      }, {
        id: '0004',
        iconCode: '#iconnangua',
        desc: '果蔬'
      }, {
        id: '0005',
        iconCode: '#iconyaju',
        desc: '日用品'
      }, {
        id: '0006',
        iconCode: '#iconshushi',
        desc: '食品'
      }, {
        id: '0007',
        iconCode: '#iconxifamuyu',
        desc: '日化用品'
      }, {
        id: '0008',
        iconCode: '#icontangguo',
        desc: '糖果'
      }, {
        id: '0009',
        iconCode: '#iconchuju',
        desc: '厨具'
      }],
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%
  .icons
    margin-top .1rem
    .icons-set
      position relative
      overflow hidden
      float left
      width 25%
      padding-bottom 25%
      .icon-img
        position  absolute
        top 0
        left 0
        right 0
        bottom .44rem
        box-sizing border-box
        padding .1rem
        .icon-img-content
          display block
          margin 0 auto
          height 100%
      .icon-desc
        position  absolute
        top 1.3rem
        left 0
        right 0
        text-align center
        color $darkTextColor
        font-size .3rem
        ellipsis()
    .iconfont
      font-size 64px
    .icon
      width: 1rem; height: 1rem;
      vertical-align: -0.15rem;
      fill: currentColor;
      overflow: hidden;

</style>
