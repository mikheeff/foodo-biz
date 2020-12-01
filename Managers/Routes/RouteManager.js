export const RouteManager = {
  methods: {
    returnRoute($route) {
      this.$nuxt.$router.replace({ path: $route })
    },
  },
}
