let Mock = require('mockjs')
let Random = Mock.Random

const authUserList = [
  {
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
  name: '首页',
  icon: 'home',
  path: 'home',
  lv: '1',
  auth: ['1'],
  children: []
}, {
  name: 'Mapbox',
  icon: 'home',
  path: 'mapbox',
  lv: '1',
  auth: ['1'],
  children: [{
      name: 'Mapbox',
      icon: '',
      lv:'2',
      auth: ['1','2'],
      path: 'mapbox',
      children: []
    },{
        name: 'MineData',
        icon: '',
        lv:'2',
        auth: ['1','2'],
        path: 'mineData',
        children: []
      },]
},{
  name: '列表页',
  icon: 'list',
  lv: '1',
  auth: ['1','2'],
  path: 'list',
  children: [{
      name: '列表1',
      icon: '',
      lv:'2',
      auth: ['1','2'],
      path: 'list1',
      children: []
    },
    {
      name: '列表2',
      icon: '',
      lv:'2',
      auth: ['1','2'],
      path: 'list2',
      children: []
    },
    {
      name: '列表3',
      icon: '',
      lv:'2',
      auth: ['1','2'],
      path: 'list3',
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

const menuListFormat = (()=>{
  const searchMenuList = (menuList,userid)=>{
    return menuList.map(menu=>{
      if(menu.auth.indexOf(userid) != -1){
        if(menu.children){
          menu.children = searchMenuList(menu.children,userid)
          return menu
        }
        return menu
      }
    }).filter(d=>d)
  }
  // 根据用户id匹配用户菜单
  return authUserList.map(user=>{
    const menuList = searchMenuList(authMenuList,user.userid)
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
