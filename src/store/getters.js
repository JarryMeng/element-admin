const getters = {
  token: state => state.user.token,
  userId: state => state.user.userId,
  userName: state => state.user.userName,
  roleId: state => state.user.roleId,
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
