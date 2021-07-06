import request from '@/utils/request'

export function login(data) {
  return request({
    method: 'post',
    url: '/user/login/',
    //baseURL: 'http://localhost:8000/FoodSecurity2/',
    data
  })
}

export function getInfo() {
  return request({
    method: 'get',
    url: '/user/info/',
    //baseURL: 'http://localhost:8000/FoodSecurity2/',
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
