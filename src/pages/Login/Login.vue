<template>
    <div class="item">
      <div class="icon">
        <span class="iconfont">&#xe625;</span>
      </div>
      <div class="info">
        <input class="user" type="text" placeholder="请输入用户名" v-model="username">
        <br>
        <input class="pass" type="password" placeholder="请输入密码" v-model="password">
      </div>
      <div class="btn">
        <input class="login" type="button" @click="loginBtnClick" value="登录">
        <br>
        <router-link tag="input" class="reg" type="button" value="注册" to="/register"></router-link>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import ipConfig from '../../../config/global'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    loginBtnClick () {
      let username = this.username
      let password = this.password
      if (username === '' || username === undefined || username === null) {
        alert('请输入同户名')
      }
      if (password === '' || password === undefined || password === null) {
        alert('请输入密码')
      }
      this.postLogin()
    },
    postLogin () {
      let param = new URLSearchParams()
      param.append('username', this.username)
      param.append('password', this.password)
      axios.post(ipConfig.service_ip_address + '/rebatemall/user/login', param).then(this.handlePostDataSucc)
    },
    handlePostDataSucc (res) {
      res = res.data
      if (res.code === 0 && res.data) {
        this.$store.commit('changeUserLogin', true)
        this.$store.commit('setUserId', res.data.userId)
        localStorage.setItem('flag', 'isLogin')
        localStorage.setItem('userId', res.data.userId)
        this.$router.push({
          path: '/'
        })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .item
    position fixed
    background #f5f5f5
    height 100%
    width 100%
    .icon
      margin-top 1rem
      margin-left 3.1rem
      .iconfont
        font-size 1rem
    .info
      margin-top .5rem
      text-align center
      line-height 1.2rem
      .user
        text-align center
        padding .2rem
        background white
        border-radius .5rem
      .pass
        text-align center
        padding .2rem
        background white
        border-radius .5rem
    .btn
      margin-top .2rem
      text-align center
      .login
        background #fd7e14
        color white
        padding .2rem
        padding-left 1.6rem
        padding-right 1.6rem
        border-radius .5rem
      .reg
        background #f5f5f5
        padding-left 2.5rem
        padding-top .2rem
        font-size .22rem
</style>
