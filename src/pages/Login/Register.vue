<template>
  <div class="item">
    <div class="icon">
      <span class="iconfont">&#xe625;</span>
    </div>
    <div class="info">
      <input class="user" type="text" placeholder="请输入用户名" v-model="username">
      <br>
      <input class="pass" type="password" placeholder="请输入密码" v-model="password1">
      <br>
      <input class="pass" type="password" placeholder="请再次输入密码" v-model="password2">
    </div>
    <div class="btn">
      <input class="login" type="button" @click="loginBtnClick" value="登录">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ipConfig from '../../../config/global'
export default {
  name: 'Register',
  data () {
    return {
      username: '',
      password1: '',
      password2: ''
    }
  },
  methods: {
    loginBtnClick () {
      let username = this.username
      let password1 = this.password1
      let password2 = this.password2
      if (username === '' || username === undefined || username === null) {
        alert('请输入同户名')
      } else if (password1 === '' || password1 === undefined || password1 === null) {
        alert('请输入密码')
      } else if (password2 === '' || password2 === undefined || password2 === null) {
        alert('请输入密码')
      } else if (password1 !== password2) {
        alert('密码不相同')
      } else {
        this.postReg()
      }
    },
    postReg () {
      let param = new URLSearchParams()
      param.append('username', this.username)
      param.append('password', this.password1)
      axios.post(ipConfig.service_ip_address + '/rebatemall/user/register', param).then(this.handlePostDataSucc)
    },
    handlePostDataSucc (res) {
      res = res.data
      if (res.code === 0 && res.data) {
        let paraml = new URLSearchParams()
        paraml.append('username', this.username)
        paraml.append('password', this.password1)
        axios.post(ipConfig.service_ip_address + '/rebatemall/user/login', paraml).then(this.create)
      }
    },
    create (res) {
      res = res.data
      if (res.code === 0 && res.data) {
        let param = new URLSearchParams()
        param.append('userId', res.data.userId)
        param.append('password', this.password1)
        axios.post(ipConfig.service_ip_address + '/rebatemall/wallet/create', param)
        let params = new URLSearchParams()
        params.append('userId', res.data.userId)
        params.append('password', this.password1)
        params.append('money', '10000')
        axios.post(ipConfig.service_ip_address + '/rebatemall/wallet/add', params)
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
