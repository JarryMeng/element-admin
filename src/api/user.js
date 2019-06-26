import request, { mock } from '@/utils/request'
export function userLogin(){
  return mock.get('/login')
}
export function menuList(){
  return mock.get('/menuList')
}
