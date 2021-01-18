export const state = () => ({
  data: [],
})

export const mutations = {
  add(state, data) {
    state.data = data
  },
  remove(state, { data }) {
    state.list.splice(state.list.indexOf(data), 1)
  },
}
