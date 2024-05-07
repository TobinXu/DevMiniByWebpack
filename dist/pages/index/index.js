;require('./../../runtime');require('./../../common');(wx["webpackChunk"] = wx["webpackChunk"] || []).push([[2],[
/* 0 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// index.js
var defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0';
var util = __webpack_require__(1);
console.log(util.formatTime(new Date()));
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

/***/ })
],
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [1], () => (__webpack_exec__(0)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXgvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0EsSUFBTUEsZ0JBQWdCLEdBQUcsd0hBQXdIO0FBQ2hKLElBQU1DLElBQUksR0FBR0MsbUJBQU8sQ0FBQyxDQUFxQixDQUFDO0FBQzNDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDSSxVQUFVLENBQUMsSUFBSUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pDQyxJQUFJLENBQUM7RUFDSEMsSUFBSSxFQUFFO0lBQ0pDLEtBQUssRUFBRSxhQUFhO0lBQ3BCQyxRQUFRLEVBQUU7TUFDUkMsU0FBUyxFQUFFWCxnQkFBZ0I7TUFDM0JZLFFBQVEsRUFBRTtJQUNaLENBQUM7SUFDREMsV0FBVyxFQUFFLEtBQUs7SUFDbEJDLHFCQUFxQixFQUFFQyxFQUFFLENBQUNDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztJQUNuREMsbUJBQW1CLEVBQUVGLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDLHFCQUFxQjtFQUN2RCxDQUFDO0VBQ0RFLFdBQVcsV0FBQUEsWUFBQSxFQUFHO0lBQ1pILEVBQUUsQ0FBQ0ksVUFBVSxDQUFDO01BQ1pDLEdBQUcsRUFBRTtJQUNQLENBQUMsQ0FBQztFQUNKLENBQUM7RUFDREMsY0FBYyxXQUFBQSxlQUFDQyxDQUFDLEVBQUU7SUFDaEIsSUFBUVgsU0FBUyxHQUFLVyxDQUFDLENBQUNDLE1BQU0sQ0FBdEJaLFNBQVM7SUFDakIsSUFBUUMsUUFBUSxHQUFLLElBQUksQ0FBQ0osSUFBSSxDQUFDRSxRQUFRLENBQS9CRSxRQUFRO0lBQ2hCLElBQUksQ0FBQ1ksT0FBTyxDQUFDO01BQ1gsb0JBQW9CLEVBQUViLFNBQVM7TUFDL0JFLFdBQVcsRUFBRUQsUUFBUSxJQUFJRCxTQUFTLElBQUlBLFNBQVMsS0FBS1g7SUFDdEQsQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUNEeUIsYUFBYSxXQUFBQSxjQUFDSCxDQUFDLEVBQUU7SUFDZixJQUFNVixRQUFRLEdBQUdVLENBQUMsQ0FBQ0MsTUFBTSxDQUFDRyxLQUFLO0lBQy9CLElBQVFmLFNBQVMsR0FBSyxJQUFJLENBQUNILElBQUksQ0FBQ0UsUUFBUSxDQUFoQ0MsU0FBUztJQUNqQixJQUFJLENBQUNhLE9BQU8sQ0FBQztNQUNYLG1CQUFtQixFQUFFWixRQUFRO01BQzdCQyxXQUFXLEVBQUVELFFBQVEsSUFBSUQsU0FBUyxJQUFJQSxTQUFTLEtBQUtYO0lBQ3RELENBQUMsQ0FBQztFQUNKLENBQUM7RUFDRDJCLGNBQWMsV0FBQUEsZUFBQ0wsQ0FBQyxFQUFFO0lBQUEsSUFBQU0sS0FBQTtJQUNoQjtJQUNBYixFQUFFLENBQUNZLGNBQWMsQ0FBQztNQUNoQkUsSUFBSSxFQUFFLFFBQVE7TUFBRTtNQUNoQkMsT0FBTyxFQUFFLFNBQUFBLFFBQUNDLEdBQUcsRUFBSztRQUNoQjVCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDMkIsR0FBRyxDQUFDO1FBQ2hCSCxLQUFJLENBQUNKLE9BQU8sQ0FBQztVQUNYZCxRQUFRLEVBQUVxQixHQUFHLENBQUNyQixRQUFRO1VBQ3RCRyxXQUFXLEVBQUU7UUFDZixDQUFDLENBQUM7TUFDSjtJQUNGLENBQUMsQ0FBQztFQUNKO0FBQ0YsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5kZXguanNcbmNvbnN0IGRlZmF1bHRBdmF0YXJVcmwgPSAnaHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6L2ljVGRicVdOT3dOUm5hNDJGSTI0MkxjaWEwN2pRb2RkMkZKR0lZUWZHMExBSkdGeE00RmJuUVA2eWZNeEJnSjBGM1lScUpDSjFhUEFLMmRRYWdkdXNCWmcvMCdcbiBjb25zdCB1dGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbC5qcycpO1xuIGNvbnNvbGUubG9nKHV0aWwuZm9ybWF0VGltZShuZXcgRGF0ZSgpKSk7XG5QYWdlKHtcbiAgZGF0YToge1xuICAgIG1vdHRvOiAnSGVsbG8gV29ybGQnLFxuICAgIHVzZXJJbmZvOiB7XG4gICAgICBhdmF0YXJVcmw6IGRlZmF1bHRBdmF0YXJVcmwsXG4gICAgICBuaWNrTmFtZTogJycsXG4gICAgfSxcbiAgICBoYXNVc2VySW5mbzogZmFsc2UsXG4gICAgY2FuSVVzZUdldFVzZXJQcm9maWxlOiB3eC5jYW5JVXNlKCdnZXRVc2VyUHJvZmlsZScpLFxuICAgIGNhbklVc2VOaWNrbmFtZUNvbXA6IHd4LmNhbklVc2UoJ2lucHV0LnR5cGUubmlja25hbWUnKSxcbiAgfSxcbiAgYmluZFZpZXdUYXAoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcuLi9sb2dzL2xvZ3MnXG4gICAgfSlcbiAgfSxcbiAgb25DaG9vc2VBdmF0YXIoZSkge1xuICAgIGNvbnN0IHsgYXZhdGFyVXJsIH0gPSBlLmRldGFpbFxuICAgIGNvbnN0IHsgbmlja05hbWUgfSA9IHRoaXMuZGF0YS51c2VySW5mb1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBcInVzZXJJbmZvLmF2YXRhclVybFwiOiBhdmF0YXJVcmwsXG4gICAgICBoYXNVc2VySW5mbzogbmlja05hbWUgJiYgYXZhdGFyVXJsICYmIGF2YXRhclVybCAhPT0gZGVmYXVsdEF2YXRhclVybCxcbiAgICB9KVxuICB9LFxuICBvbklucHV0Q2hhbmdlKGUpIHtcbiAgICBjb25zdCBuaWNrTmFtZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgY29uc3QgeyBhdmF0YXJVcmwgfSA9IHRoaXMuZGF0YS51c2VySW5mb1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBcInVzZXJJbmZvLm5pY2tOYW1lXCI6IG5pY2tOYW1lLFxuICAgICAgaGFzVXNlckluZm86IG5pY2tOYW1lICYmIGF2YXRhclVybCAmJiBhdmF0YXJVcmwgIT09IGRlZmF1bHRBdmF0YXJVcmwsXG4gICAgfSlcbiAgfSxcbiAgZ2V0VXNlclByb2ZpbGUoZSkge1xuICAgIC8vIOaOqOiNkOS9v+eUqHd4LmdldFVzZXJQcm9maWxl6I635Y+W55So5oi35L+h5oGv77yM5byA5Y+R6ICF5q+P5qyh6YCa6L+H6K+l5o6l5Y+j6I635Y+W55So5oi35Liq5Lq65L+h5oGv5Z2H6ZyA55So5oi356Gu6K6k77yM5byA5Y+R6ICF5aal5ZaE5L+d566h55So5oi35b+r6YCf5aGr5YaZ55qE5aS05YOP5pi156ew77yM6YG/5YWN6YeN5aSN5by556qXXG4gICAgd3guZ2V0VXNlclByb2ZpbGUoe1xuICAgICAgZGVzYzogJ+WxleekuueUqOaIt+S/oeaBrycsIC8vIOWjsOaYjuiOt+WPlueUqOaIt+S4quS6uuS/oeaBr+WQjueahOeUqOmAlO+8jOWQjue7reS8muWxleekuuWcqOW8ueeql+S4re+8jOivt+iwqOaFjuWhq+WGmVxuICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgdXNlckluZm86IHJlcy51c2VySW5mbyxcbiAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG59KVxuIl0sIm5hbWVzIjpbImRlZmF1bHRBdmF0YXJVcmwiLCJ1dGlsIiwicmVxdWlyZSIsImNvbnNvbGUiLCJsb2ciLCJmb3JtYXRUaW1lIiwiRGF0ZSIsIlBhZ2UiLCJkYXRhIiwibW90dG8iLCJ1c2VySW5mbyIsImF2YXRhclVybCIsIm5pY2tOYW1lIiwiaGFzVXNlckluZm8iLCJjYW5JVXNlR2V0VXNlclByb2ZpbGUiLCJ3eCIsImNhbklVc2UiLCJjYW5JVXNlTmlja25hbWVDb21wIiwiYmluZFZpZXdUYXAiLCJuYXZpZ2F0ZVRvIiwidXJsIiwib25DaG9vc2VBdmF0YXIiLCJlIiwiZGV0YWlsIiwic2V0RGF0YSIsIm9uSW5wdXRDaGFuZ2UiLCJ2YWx1ZSIsImdldFVzZXJQcm9maWxlIiwiX3RoaXMiLCJkZXNjIiwic3VjY2VzcyIsInJlcyJdLCJzb3VyY2VSb290IjoiIn0=