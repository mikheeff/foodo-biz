export const state = () => ({
  data: {},
})

export const mutations = {
  /**
   * Clear table data
   * @param state
   */
  clearData(state) {
    state.data = {}
  },

  /**
   * Create new table key
   * @param state
   * @param $key
   */
  addTable(state, $key) {
    state.data[$key] = {}
  },

  /**
   * Set table data
   * @param state
   * @param $key
   * @param $data
   */
  setTableData(state, { $key, $data }) {
    state.data[$key] = $data
  },
}
