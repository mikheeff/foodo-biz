<template>
  <button type="button" @click="userLogout()">{{ $t('logout') }}</button>
</template>

<script>
import { RouteManager } from '~/Managers/Routes/RouteManager'

export default {
  name: 'LogoutButton',
  mixins: [RouteManager],
  methods: {
    async userLogout() {
      await this.$auth.logout('local')
      await this.returnRoute(process.env.logoutUrl)
    },
  },
}
</script>
