import axios from 'axios'
// import router from '../router'
import { Toast } from 'vant'

const platform = 'h5'
const userId = '000001'
const timeout = 5000
const baseURL = '/'

const request = axios.create({
    timeout,
    baseURL
})

// 处理Token
const addToken = config => {
    const token = 'token'
    config.headers.Authorization = `Bearer ${token}`
    return config
}


// 根据请求类型，处理请求数据
const appParams = config => {
    const params = {
        platform,
        userId
    }
    const method = config.method.toLowerCase() === 'post' ? 'data' : 'params'
    config[method] = {
        ...params,
        ...config[method]
    }
    return config
}


// 请求拦截器 
request.interceptors.request.use(config => {
    return Promise.resolve(config)
        .then(appParams)
        .then(addToken)
})

const checkNetStatus = response => {
    const { status, message } = response
    const errorCodes = [401, 403, 404, 500]
    if (errorCodes.includes(status)) { Toast({ type: 'fail', message }) }
    return response
}

const checkCode = response => {
    const { code, message } = response.data
    const successCodes = [
        200,
        304
    ]
    if (!successCodes.includes(code)) { Toast({ type: 'fail', message }) }
    return response
}

const initResData = response => {
    const req = /(download|down)/ig
    if (req.test(response.config.url) || response.request.responseType === 'blob') {
        return response
    }
    return response.data
}

// 相应拦截器
request.interceptors.response.use(response => {
    return Promise.resolve(response)
        .then(checkNetStatus)
        .then(checkCode)
        .then(initResData)
})

export default request
