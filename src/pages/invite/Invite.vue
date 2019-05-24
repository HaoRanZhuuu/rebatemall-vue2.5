<template>
    <div>
      <invite-header></invite-header>
      <invite-body></invite-body>
    </div>
</template>

<script>
import InviteHeader from './components/InviteHeader'
import InviteBody from './components/InviteBody'
export default {
  name: 'Invite',
  components: {
    InviteHeader,
    InviteBody
  }
}
</script>

<style lang="stylus" scoped>

</style>
