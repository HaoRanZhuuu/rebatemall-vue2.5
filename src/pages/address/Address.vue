<template>
    <div>
      <address-header></address-header>
      <address-body></address-body>
    </div>
</template>

<script>
import AddressHeader from './components/AddressHeader'
import AddressBody from './components/AddressBody'
export default {
  name: 'Address',
  components: {
    AddressHeader,
    AddressBody
  }
}
</script>

<style scoped>

</style>
