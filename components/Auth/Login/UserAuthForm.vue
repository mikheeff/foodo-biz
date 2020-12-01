<template>
  <div class="user-auth-form">
    <form @submit.prevent="authorization(auth)">
      <label>
        <input v-model="auth.email" type="text" name="email" />
      </label>
      <label>
        <input v-model="auth.password" type="password" name="password" />
      </label>
      <button type="submit">{{ $t('enter') }}</button>
    </form>
  </div>
</template>

<script>
import { AuthManager } from '@/Managers/Auth/AuthManager'
import { TokenManager } from '@/Managers/Auth/TokenManager'

export default {
  name: 'UserAuthForm',
  mixins: [AuthManager, TokenManager],
  data() {
    return {
      auth: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async authorization(auth) {
      try {
        const response = await this.$auth.loginWith('local', { data: auth })
        this.setToken(response.data.access_token)
        this.setUser(response.data.user)
      } catch (err) {}
    },
  },
}
</script>
