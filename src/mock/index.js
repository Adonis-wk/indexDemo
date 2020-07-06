import Mock from 'mockjs'
import * as d from './data'
import URL from '@/request/urlConstants'

const domain = process.env.VUE_APP_BASE_URL
// 获取公共接口资源
// 获取用户信息
Mock.mock(`${domain}` + URL.COMMON.USER_INFO, d.getUserInfo)

export default Mock
