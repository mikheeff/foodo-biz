export const state = () => ({
  data: false,
})

export const mutations = {
  add(state, status) {
    state.data = status
  },
}
