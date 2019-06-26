const getters = {
  sidebar: state => state.app.sidebar,
  layoutMode: state => state.app.layoutMode,
  theme: state => state.app.theme,
  themeColor: state => state.app.themeColor,
  fixedHeader: state => state.app.fixedHeader,
  contentWidth: state => state.app.contentWidth,
  fixedSiderbar: state => state.app.fixedSiderbar,
  routes: state => state.permission.routes,
  authRoutes: state => state.permission.authRoutes,
}
export default getters
