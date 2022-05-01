const mockApi = require('./mock')
const express = require('express')
const autoprefixer=require('autoprefixer')
const pxtorem=require('postcss-pxtorem')

module.exports = {
    devServer: {
        before (app) {
            // 配置解析参数
            app.use(express.urlencoded({ extended: true }))
            app.use(express.json())
            // 注册mock服务
            mockApi(app)
        },
        port: 8090
    },
    css:{
      loaderOptions:{
        postcss:{
          plugins:[
            autoprefixer(),
            pxtorem({
              rootValue:75,
              propList:["*"],
              "selectorBlackList":["van-"]
            })
          ]
        }
      }
    }
}
