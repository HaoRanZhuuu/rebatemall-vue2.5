import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/Home'
import Detail from '@/pages/detail/Detail'
import SearchList from '@/pages/searchList/SearchList'
import Cart from '@/pages/cart/Cart'
import Login from '@/pages/Login/Login'
import Order from '@/pages/order/Order'
import User from '@/pages/user/User'
import Address from '@/pages/address/Address'
import AddressAdd from '@/pages/address/AddressAdd'
import Wallet from '@/pages/wallet/Wallet'
import Share from '@/pages/share/Share'
import ShareDetail from '@/pages/share/ShareDetail'
import Pay from '@/pages/pay/Pay'
import WalletDetail from '@/pages/wallet/WalletDetail'
import Register from '@/pages/Login/Register'
import Invite from '@/pages/invite/Invite'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        isLogin: true
      }
    }, {
      path: '/detail/:userId/:productId',
      name: 'Detail',
      component: Detail,
      meta: {
        isLogin: true
      }
    }, {
      path: '/detail/:userId/:productId/:sellerId',
      name: 'shareDetail',
      component: ShareDetail,
      meta: {
        isLogin: true
      }
    }, {
      path: '/searchList/:userId/:keyWords',
      name: 'SearchList',
      component: SearchList,
      meta: {
        isLogin: true
      }
    }, {
      path: '/share/:userId/:productId',
      name: 'Share',
      component: Share,
      meta: {
        isLogin: true
      }
    }, {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      meta: {
        isLogin: true
      }
    }, {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        isLogin: false
      }
    }, {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        isLogin: false
      }
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      meta: {
        isLogin: true
      }
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      meta: {
        isLogin: true
      }
    },
    {
      path: '/address',
      name: 'Address',
      component: Address,
      meta: {
        isLogin: true
      }
    },
    {
      path: '/addressAdd',
      name: 'AddressAdd',
      component: AddressAdd,
      meta: {
        isLogin: true
      }
    },
    {
      path: '/wallet',
      name: 'Wallet',
      component: Wallet,
      meta: {
        isLogin: true
      }
    },
    {
      path: '/pay/:orderId/:money',
      name: 'Pay',
      component: Pay,
      meta: {
        isLogin: true
      }
    },
    {
      path: '/wallet/detail',
      name: 'WalletDetail',
      component: WalletDetail,
      meta: {
        isLogin: true
      }
    },
    {
      path: '/invite',
      name: 'invite',
      component: Invite,
      meta: {
        isLogin: true
      }
    }
  ]
})
