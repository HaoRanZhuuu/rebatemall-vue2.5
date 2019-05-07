<template>
    <div class="icons">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page, index) of pages" :key="index">
          <div class="icons-set" v-for="item of page" :key="item.id">
            <div class="icon-img">
              <svg class="iconfont icon-img-content icon" aria-hidden="true">
                <use :xlink:href="item.iconCode"></use>
              </svg>
            </div>
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
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
        loop: true
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
        left 0
        right 0
        bottom 0
        height .44rem
        line-height .44rem
        text-align center
        color $darkTextColor
        ellipsis()
    .iconfont
      font-size 64px
    .icon {
      width: 1em; height: 1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
  }
</style>
