<template>
    <div>
      <wallet-header></wallet-header>
      <wallet-body></wallet-body>
    </div>
</template>

<script>
import WalletBody from './components/WalletBody'
import WalletHeader from './components/WalletHeader'
export default {
  name: 'Wallet',
  components: {
    WalletBody,
    WalletHeader
  }
}
</script>

<style lang="stylus" scoped>

</style>
