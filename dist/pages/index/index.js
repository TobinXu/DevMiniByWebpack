/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// index.js
var defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0';
Page({
  data: {
    motto: 'Hello World',
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: ''
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname')
  },
  bindViewTap: function bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    });
  },
  onChooseAvatar: function onChooseAvatar(e) {
    var avatarUrl = e.detail.avatarUrl;
    var nickName = this.data.userInfo.nickName;
    this.setData({
      "userInfo.avatarUrl": avatarUrl,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl
    });
  },
  onInputChange: function onInputChange(e) {
    var nickName = e.detail.value;
    var avatarUrl = this.data.userInfo.avatarUrl;
    this.setData({
      "userInfo.nickName": nickName,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl
    });
  },
  getUserProfile: function getUserProfile(e) {
    var _this = this;
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息',
      // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: function success(res) {
        console.log(res);
        _this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
      }
    });
  }
});
/******/ })()
;