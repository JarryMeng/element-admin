import {
  ADD_TAGVIEW,
  DEL_TAGVIEW,
  DEL_ALLVIEWS
} from '../mutation-types'
const state = {
  viewsList: []
}

const mutations = {
  [ADD_TAGVIEW](state, view) {
    if (state.viewsList.some(d => d.path === view.path)) return
    state.viewsList.push(view)
  },
  [DEL_TAGVIEW](state, view) {
    for (let i = 0; i < state.viewsList.length; i++) {
      if(state.viewsList[i].path === view.path){
        state.viewsList.splice(i,1)
        break
      }
    }
  },
  [DEL_ALLVIEWS](state) {
    state.viewsList = []
  }
}

const actions = {
  addTagView({
    commit
  }, view) {
    commit(ADD_TAGVIEW, view)
  },
  delTagView({
    commit
  }, view) {
    commit(DEL_TAGVIEW, view)
  },
  async delAllView({
    commit
  }){
    await commit(DEL_ALLVIEWS)
  }
}


export default {
  namespaced: true,
  state,
  mutations,
  actions
}
