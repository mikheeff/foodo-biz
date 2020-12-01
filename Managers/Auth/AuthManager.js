export const AuthManager = {
  methods: {
    getUser($user) {
      this.$auth.getUser()
    },

    setUser($user) {
      this.$auth.setUser($user)
    },
  },
}
