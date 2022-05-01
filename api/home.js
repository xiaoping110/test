import request from '../src/utils/request'
const pre = '/mock'
// const pre = '/api'

export const getAdveeristing = (item) => request.post(`${pre}/operation/advertising/getAdvertisingList`)


export const getMockList = () => request.post(`${pre}/data/getMockList`)