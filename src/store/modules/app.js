import {
  storage
} from '@/utils'
import {
  TOOGLE_SIDEBAR,
  SET_THEME,
  SET_LAYOUT_MODE,
  SET_THEME_COLOR,
  SET_FIXED_HEADER,
  SET_FIXED_SIDERBAR,
  SET_CONTENT_WIDTH
} from '../mutation-types'
const state = {
  device: 'desktop',
  sidebar: true,
  layoutMode: storage.get('layoutMode') || 'sidemenu', //  sidemenu topmenu
  theme: storage.get('theme') || 'dark', // light  dark
  themeColor: storage.get('themeColor') || '#409EFF',
  fixedHeader: !!storage.get('fixedHeader'),
  get contentWidth() { // fixed  fluid
    if (state.layoutMode === 'sidemenu') {
      return 'fluid'
    } else {
      return (storage.get('contentWidth') || 'fixed')
    }
  },
  set contentWidth(widthType) {
    storage.set('contentWidth', widthType)
  },
  get fixedSiderbar() {
    if (state.layoutMode === 'topmenu') {
      return false
    } else {
      return !!storage.get('fixedSiderbar')
    }
  },
  set fixedSiderbar(val) {
    storage.set('fixedSiderbar', Number(val))
  }
}
const mutations = {
  [TOOGLE_SIDEBAR](state, type) {
    state.sidebar = !state.sidebar
  },
  [SET_LAYOUT_MODE](state, mode) {
    storage.set('layoutMode', mode)
    state.layoutMode = mode
  },
  [SET_THEME](state, theme) {
    storage.set('theme', theme)
    state.theme = theme
  },
  [SET_THEME_COLOR](state, themeColor) {
    storage.set('themeColor', themeColor)
    state.themeColor = themeColor
  },
  [SET_FIXED_HEADER](state, type) {
    storage.set('fixedHeader', Number(type))
    state.fixedHeader = type
  },
  [SET_CONTENT_WIDTH](state, widthType) {
    state.contentWidth = widthType
  },
  [SET_FIXED_SIDERBAR](state, type) {
    state.fixedSiderbar = type
  },
}
const actions = {
  setLayoutMode: ({
    commit
  }, mode) => commit(SET_LAYOUT_MODE, mode),
  toogleSidebar: ({
    commit
  }, type) => commit(TOOGLE_SIDEBAR, type),
  setTheme: ({
    commit
  }, theme) => commit(SET_THEME, theme),
  setThemeColor: ({
    commit
  }, themeColor) => commit(SET_THEME_COLOR, themeColor),
  setFixedHeader: ({
    commit
  }, type) => commit(SET_FIXED_HEADER, type),
  setContentWidth: ({
    commit
  }, widthType) => commit(SET_CONTENT_WIDTH, widthType),
  setFixedSiderbar: ({
    commit
  }, type) => commit(SET_FIXED_SIDERBAR, type),
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
