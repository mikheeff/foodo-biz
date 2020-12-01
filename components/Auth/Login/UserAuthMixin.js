import * as axios from 'axios'
import { TokenManager } from '~/Managers/Auth/AuthManager'

export const UserAuthMixin = {
  mixins: [TokenManager],
  data() {
    return {
      token: this.getTokenInStorages(),
    }
  },
  methods: {
    getUser() {
      axios
        .get(process.env.baseUrl + '/auth/user', {
          headers: {
            Authorization: 'Bearer ' + this.token,
          },
        })
        .then((response) => {
          this.setStatic(response.data)
        })
        // eslint-disable-next-line handle-callback-err
        .catch((error) => {
          // console.log(error)
          // console.log(error)
        })
    },
    setUser($user) {
      this.$auth.setUser($user)
    },
    async userLogout() {
      await this.$auth.logout('local')
      await this.$auth.$storage.removeUniversal('token', this.token)
    },
  },
}
