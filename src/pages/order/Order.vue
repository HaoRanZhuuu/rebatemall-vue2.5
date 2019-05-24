<template>
  <div>
    <order-header></order-header>
    <order-body></order-body>
    <order-footer></order-footer>
  </div>
</template>

<script>
import OrderHeader from './components/OrderHeader'
import OrderFooter from '../../components/Footer'
import OrderBody from './components/OrderBody'
export default {
  name: 'Order',
  components: {
    OrderHeader,
    OrderFooter,
    OrderBody
  }
}
</script>

<style scoped>

</style>
