import axios from 'axios'
import {
  MessageBox,
  Message
} from 'element-ui'
import store from '@/store'
import {
  getToken,
} from '@/utils/auth'
import router from '@/router'
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['Authorization'] = "Bearer " + getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    console.log('response:')
    console.log(response)

    return response
  },
  error => {
    if (error.response.status === 401) {
      if(error.response.data.detail == "No active account found with the given credentials"){
        //登陆时错误
        Message({
          message: "用户名或密码错误",
          duration: 3 * 1000
        })
      }else{
        //请求时错误
        Message({
          message: "身份验证过期，请重新登录",
          duration: 3 * 1000
        })
      }
      store.dispatch('user/resetToken')
      router.push({
        path: '/login'
      })
    } else {
      Message({
        message: error.message + JSON.stringify(error.response.data),
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(error)
    }
  }
)

export default service
