let Mock = require('mockjs')
let Random = Mock.Random
const login = {
  username: "admin",
  userid: '1',
  token: "token",
  roleid: '1',
}
const menuList = [{
  name: '首页',
  icon: 'home',
  path: 'home',
  lv: '1',
  children: []
}, {
  name: '列表页',
  icon: 'list',
  lv: '1',
  path: 'list',
  childrenren: [{
      name: '列表1',
      icon: '',
      lv:'2',
      path: 'list1',
      childrenren: []
    },
    {
      name: '列表2',
      icon: '',
      lv:'2',
      path: 'list2',
      children: []
    },
    {
      name: '列表3',
      icon: '',
      lv:'2',
      path: 'list3',
      children: []
    }
  ]
}]

module.exports = {
  login,
  menuList
}
