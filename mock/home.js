const Mock = require('mockjs')

const getAdveeristin = (request, response) => {
  //post请求参数通过request.body获取
  //url传递过来的参数通过request.query获取
  const result = {
    "errorCode": 200,
    "message": "success",
    "data": {
      "advertising_list": [{
        "id": "27",
        "title": "特供",
        "link": "",
        "image": "",
        "type": "image"
      }]
    },
    "success": true
  }
  response.json(result)
}

const getMockList = (request, response) => {
  const result = {
    "errorCode": 200,
    "message": "success",
    "data": Mock.mock({
      'list|1-10': [{
        'id|+1': 1,
        'date': Mock.Random.date(),
        'name': Mock.Random.cname()
      }]
    })

  }
  response.json(result)
}

//获取商品列表
const getProductList=(request,response)=>{
  const result={}
  response.json(result)
}

// 注册首页相关路由 
const homeMockApi = app => {
  app.post('/mock/operation/advertising/getAdvertisingList', getAdveeristin)
  app.post('/mock/data/getMockList', getMockList)
}

/**
 * 导出路由
 */
module.exports = homeMockApi