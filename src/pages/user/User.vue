<template>
    <div>
      <user-header></user-header>
      <user-body></user-body>
      <user-footer></user-footer>
    </div>
</template>

<script>
import UserHeader from './components/UserHeader'
import UserBody from './components/UserBody'
import UserFooter from './components/UserFooter'
export default {
  name: 'User',
  components: {
    UserHeader,
    UserBody,
    UserFooter
  }
}
</script>

<style lang="stylus" scoped>

</style>
