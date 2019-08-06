import {
  storage
} from '@/utils'
import {
  TOOGLE_SIDEBAR,
  SET_THEME,
  SET_LAYOUT_MODE,
  SET_THEME_COLOR,
  SET_TAG_VIEW_SHOW,
  SET_FIXED_HEADER,
  SET_FIXED_SIDERBAR,
  SET_CONTENT_WIDTH
} from '../mutation-types'
import {
  appSetting
} from '@/settings'

// 生产环境 固定设置
const state = process.env.NODE_ENV === 'production' ? {
  device: 'desktop',
  sidebar: true,
  ...appSetting
} : {
  device: 'desktop',
  sidebar: true,
  layoutMode: storage.get('layoutMode') || 'sidemenu', //  sidemenu topmenu
  theme: storage.get('theme') || 'dark', // light  dark
  themeColor: storage.get('themeColor') || '#409EFF',
  tagViewShow: !!storage.get('tagViewShow'),
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
  get fixedHeader() {
    if (state.layoutMode === 'mergeHeader') {
      return true
    } else {
      return !!storage.get('fixedHeader')
    }
  },
  set fixedHeader(val) {
    storage.set('fixedHeader', Number(val))
  },
  // fixedHeader: !!storage.get('fixedHeader'),
  get fixedSiderbar() {
    if (state.layoutMode === 'topmenu') {
      return false
    } else if (state.layoutMode === 'mergeHeader') {
      return true
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
  [SET_TAG_VIEW_SHOW](state, isShow) {
    storage.set('tagViewShow', Number(isShow))
    state.tagViewShow = isShow
  },
  [SET_THEME_COLOR](state, themeColor) {
    storage.set('themeColor', themeColor)
    state.themeColor = themeColor
  },
  [SET_FIXED_HEADER](state, type) {

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
  setTagViewsShow: ({
    commit
  }, isShow) => commit(SET_TAG_VIEW_SHOW, isShow),
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
