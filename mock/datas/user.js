let Mock = require('mockjs')
let Random = Mock.Random

const authUserList = [{
    username: "admin",
    userid: '1',
    token: Mock.mock('@guid'),
    roleid: '1',
  },
  {
    username: "user",
    userid: '2',
    token: Mock.mock('@guid'),
    roleid: '2',
  }
]
const authMenuList = [{
  name: 'Home',
  text: '首页',
  auth: ['1'],
}, {
  name: 'MapBox',
  text: 'MapBox',
  auth: ['1'],
  children: [{
    name: 'MapBoxDefault',
    text: '默认',
    auth: ['1', '2'],
    children: []
  }, {
    name: 'MapBoxMineData',
    text: 'MineData',
    auth: ['1', '2'],
    children: []
  }, {
    name: 'MapBoxCustomMap',
    text: '自定义',
    auth: ['1', '2'],
    children: []
  }]
}, {
  name: 'List',
  text: '列表页',
  auth: ['1', '2'],
  children: [{
      name: 'ListList1',
      text: '列表页1',
      auth: ['1', '2'],
      children: [{
          name: 'ListList1List11',
          text: '列表页1-1',
          auth: ['1', '2'],
        },
        {
          name: 'ListList1List12',
          text: '列表页1-2',
          auth: ['1', '2'],
        }
      ]
    },
    {
      name: 'ListList2',
      text: '列表页2',
      auth: ['1', '2'],
      children: []
    },
    {
      name: 'ListList3',
      text: '列表页3',
      auth: ['1', '2'],
      children: []
    }
  ]
}, {
  name: 'Echarts',
  text: 'Echarts',
  auth: ['1', '2'],
  children: [{
      name: 'EchartsLine',
      text: '折线图',
      auth: ['1', '2'],
      children: []
    },
    {
      name: 'EchartsBar',
      text: '柱状图',
      auth: ['1', '2'],
      children: []
    }
  ]
}, {
  name: 'Links',
  text: '链接',
  auth: ['1'],
  children: [{
      name: 'LinksExternalLinks',
      text: '外链',
      auth: ['1', '2'],
      children: []
    },
    {
      name: 'LinksLargeScreen',
      text: '大屏',
      auth: ['1', '2'],
      children: []
    }
  ]
}]


const login = {
  username: "admin",
  userid: '1',
  token: "token",
  roleid: '1',
}

const menuListFormat = (() => {
  const searchMenuList = (menuList, userid) => {
    return menuList.map(menu => {
      if (menu.auth.indexOf(userid) != -1) {
        if (menu.children) {
          menu.children = searchMenuList(menu.children, userid)
          return menu
        }
        return menu
      }
    }).filter(d => d)
  }
  // 根据用户id匹配用户菜单
  return authUserList.map(user => {
    const menuList = searchMenuList(authMenuList, user.userid)
    // console.log(menuList)
    return {
      userid: user.userid,
      menu: menuList
    }
  })

})()
module.exports = {
  login: authUserList,
  menuList: menuListFormat
}
