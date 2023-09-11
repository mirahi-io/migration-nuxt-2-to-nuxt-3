export const state = () => ({
  _id: 0,
  name: '',
})

export const actions = {

  load ({ commit }) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit('update', { _id: 1, name: 'Ben' })
        resolve()
      }, 1000)
    })
  }

}

export const mutations = {
  update (state, user) {
    Object.assign(state, user)
  }
}
