import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodsList: [],
    userLogin: false,
    userId: String
  },
  actions: {
  },
  mutations: {
    addToCart (state, data) {
      let flag = false
      let index = 0
      state.goodsList.forEach(item => {
        if (item.productId === data.productId) {
          flag = true
          state.goodsList[index].productQuantity = state.goodsList[index].productQuantity + data.productQuantity
        }
        index++
      })

      if (!flag) {
        state.goodsList.push(data)
      }
    },
    addGoodQuantity (state, productId) {
      let index = 0
      console.log(state.goodsList)
      state.goodsList.forEach(item => {
        if (item.productId === productId) {
          state.goodsList[index].productQuantity++
        }
        index++
      })
    },
    subGoodQuantity (state, productId) {
      let index = 0
      state.goodsList.forEach(item => {
        if (item.productId === productId) {
          state.goodsList[index].productQuantity--
          if (state.goodsList[index].productQuantity === 0) {
            state.goodsList.splice(index, 1)
          }
        }
        index++
      })
    },
    deleteGoods (state, productId) {
      let index = 0
      state.goodsList.forEach(item => {
        if (item.productId === productId) {
          state.goodsList.splice(index, 1)
        }
        index++
      })
    },
    cleanGoods (state, flag) {
      if (flag) {
        state.goodsList.splice(0, state.goodsList.length)
      }
    },
    changeUserLogin (state, flag) {
      state.userLogin = flag
    },
    setUserId (state, userId) {
      state.userId = userId
    }
  }
})
