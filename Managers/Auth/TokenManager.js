const tokenKey = 'token'

export const TokenManager = {
  methods: {
    getTokenInStorages() {
      return this.$auth.$storage.getUniversal(tokenKey)
    },

    setToken($token) {
      // Set vuex, localStorage и файлах cookie
      this.$auth.$storage.setUniversal(tokenKey, $token)
    },
  },
}
