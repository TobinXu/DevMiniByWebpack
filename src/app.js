// app.js
import { camelCase } from 'lodash';

App({
  onLaunch() {
    console.log('hhhhh-------')
    console.log(camelCase('OnLaunch'));
    console.log(`环境：${process.env.NODE_ENV} 构建类型：${process.env.BUILD_TYPE}`)

    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
