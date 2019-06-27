import request, { mock } from '@/utils/request'
export function userLogin(params){
  return mock.get('/login?username='+params.userName).then(res=>res.data[0])
}
export function menuList(userid){
  return mock.get('/menuList?userid='+userid).then(res=>res.data[0])
}
