<template>
    <div>
      <address-add-header></address-add-header>
      <address-add-body></address-add-body>
    </div>
</template>

<script>
import AddressAddHeader from './components/AddressAddHeader'
import AddressAddBody from './components/AddressAddBody'
export default {
  name: 'AddressAdd',
  components: {
    AddressAddHeader,
    AddressAddBody
  }
}
</script>

<style lang="stylus" scoped>

</style>
