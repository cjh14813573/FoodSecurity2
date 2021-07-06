import request from '@/utils/request'

export default {
  getTopList: function() {
    return request({
      url: '/FoodCategory/top/',
      method: 'get',
      //baseURL: 'http://localhost:8000/FoodSecurity2',
    })
  },
  getTop: function(id) {
    return request({
      url: '/FoodCategory/top/' + id + "/",
      method: 'get',
      //baseURL: 'http://localhost:8000/FoodSecurity2',
    })
  },
  newTop: function(data) {
    return request({
      url: '/FoodCategory/top/',
      method: 'post',
      //baseURL: 'http://localhost:8000/FoodSecurity2',
      data
    })
  },
  editTop: function(data) {
    return request({
      url: '/FoodCategory/top/' + data.id + "/",
      method: 'put',
      //baseURL: 'http://localhost:8000/FoodSecurity2',
      data
    })
  },
  deleteTop: function(data) {
    return request({
      url: '/FoodCategory/top/' + data.id + "/",
      method: 'delete',
      //baseURL: 'http://localhost:8000/FoodSecurity2',
      data
    })
  },
  getSecondList: function(parentId) {
    return request({
      url: '/FoodCategory/second/',
      method: 'get',
      //baseURL: 'http://localhost:8000/FoodSecurity2',
      params:{
        top: parentId
      }
    })
  },
  getSecond: function(id) {
    return request({
      url: '/FoodCategory/second/' + id + "/",
      method: 'get',
      //baseURL: 'http://localhost:8000/FoodSecurity2',
    })
  },
  newSecond: function(data) {
    return request({
      url: '/FoodCategory/second/',
      method: 'post',
      //baseURL: 'http://localhost:8000/FoodSecurity2',
      data
    })
  },
  editSecond: function(data) {
    return request({
      url: '/FoodCategory/second/' + data.id + "/",
      method: 'put',
      //baseURL: 'http://localhost:8000/FoodSecurity2',
      data
    })
  },
  deleteSecond: function(data) {
    return request({
      url: '/FoodCategory/second/' + data.id + "/",
      method: 'delete',
      //baseURL: 'http://localhost:8000/FoodSecurity2',
      data
    })
  },
  getThirdList: function(parentId) {
    //alert("request parentId:" + parentId)
    return request({
      url: '/FoodCategory/third/',
      method: 'get',
      //baseURL: 'http://localhost:8000/FoodSecurity2',
      params:{
        second: parentId
      }
    })
  },
  getThird: function(id) {
    return request({
      url: '/FoodCategory/third/' + id + "/",
      method: 'get',
      //baseURL: 'http://localhost:8000/FoodSecurity2',
    })
  },
  newThird: function(data) {
    return request({
      url: '/FoodCategory/third/',
      method: 'post',
      //baseURL: 'http://localhost:8000/FoodSecurity2',
      data
    })
  },
  editThird: function(data) {
    return request({
      url: '/FoodCategory/third/' + data.id + "/",
      method: 'put',
      //baseURL: 'http://localhost:8000/FoodSecurity2',
      data
    })
  },
  deleteThird: function(data) {
    return request({
      url: '/FoodCategory/third/' + data.id + "/",
      method: 'delete',
      //baseURL: 'http://localhost:8000/FoodSecurity2',
      data
    })
  },
  getFourthList: function(parentId) {
    //alert("request parentId:" + parentId)
    return request({
      url: '/FoodCategory/fourth/',
      method: 'get',
      //baseURL: 'http://localhost:8000/FoodSecurity2',
      params:{
        third: parentId
      }
    })
  },
  getFourthListAll: function(){
    return request({
      url: '/FoodCategory/fourth/',
      method: 'get',
    })
  },
  getFourth: function(id) {
    return request({
      url: '/FoodCategory/fourth/' + id + "/",
      method: 'get',
      //baseURL: 'http://localhost:8000/FoodSecurity2',
    })
  },
  newFourth: function(data) {
    return request({
      url: '/FoodCategory/fourth/',
      method: 'post',
      //baseURL: 'http://localhost:8000/FoodSecurity2',
      data
    })
  },
  editFourth: function(data) {
    return request({
      url: '/FoodCategory/fourth/' + data.id + "/",
      method: 'put',
      //baseURL: 'http://localhost:8000/FoodSecurity2',
      data
    })
  },
  deleteFourth: function(data) {
    return request({
      url: '/FoodCategory/fourth/' + data.id + "/",
      method: 'delete',
      //baseURL: 'http://localhost:8000/FoodSecurity2',
      data
    })
  },
  getTree: function() {
    return request({
      url: '/FoodCategory/tree/',
      method: 'get',
      //baseURL: 'http://localhost:8000/FoodSecurity2'
    })
  }
}
