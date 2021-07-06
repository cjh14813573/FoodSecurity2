import request from '@/utils/request'

export default {
  searchFactor: function(data) {
    return request({
      url: '/GetRiskFactorsServlet',
      method: 'get',
			params:data
    })
  },
}
