<template>
  <div>
    <cart-header></cart-header>
    <cart-body></cart-body>
    <home-footer></home-footer>
  </div>
</template>

<script>
import CartBody from './components/CartBody'
import HomeFooter from '../../components/Footer'
import CartHeader from './components/CartHeader'
export default {
  name: 'Cart',
  components: {
    CartBody,
    HomeFooter,
    CartHeader
  }
}
</script>

<style scoped>

</style>
