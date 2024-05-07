;require('./../../runtime');require('./../../common');(wx["webpackChunk"] = wx["webpackChunk"] || []).push([[3],{

/***/ 2:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// logs.js
var util = __webpack_require__(1);
Page({
  data: {
    logs: []
  },
  onLoad: function onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        };
      })
    });
  }
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [1], () => (__webpack_exec__(2)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvbG9ncy9sb2dzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQSxJQUFNQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsQ0FBcUIsQ0FBQztBQUUzQ0MsSUFBSSxDQUFDO0VBQ0hDLElBQUksRUFBRTtJQUNKQyxJQUFJLEVBQUU7RUFDUixDQUFDO0VBQ0RDLE1BQU0sV0FBQUEsT0FBQSxFQUFHO0lBQ1AsSUFBSSxDQUFDQyxPQUFPLENBQUM7TUFDWEYsSUFBSSxFQUFFLENBQUNHLEVBQUUsQ0FBQ0MsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRUMsR0FBRyxDQUFDLFVBQUFDLEdBQUcsRUFBSTtRQUNqRCxPQUFPO1VBQ0xDLElBQUksRUFBRVgsSUFBSSxDQUFDWSxVQUFVLENBQUMsSUFBSUMsSUFBSSxDQUFDSCxHQUFHLENBQUMsQ0FBQztVQUNwQ0ksU0FBUyxFQUFFSjtRQUNiLENBQUM7TUFDSCxDQUFDO0lBQ0gsQ0FBQyxDQUFDO0VBQ0o7QUFDRixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dzL2xvZ3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbG9ncy5qc1xuY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWwuanMnKVxuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGxvZ3M6IFtdXG4gIH0sXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgbG9nczogKHd4LmdldFN0b3JhZ2VTeW5jKCdsb2dzJykgfHwgW10pLm1hcChsb2cgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRhdGU6IHV0aWwuZm9ybWF0VGltZShuZXcgRGF0ZShsb2cpKSxcbiAgICAgICAgICB0aW1lU3RhbXA6IGxvZ1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn0pXG4iXSwibmFtZXMiOlsidXRpbCIsInJlcXVpcmUiLCJQYWdlIiwiZGF0YSIsImxvZ3MiLCJvbkxvYWQiLCJzZXREYXRhIiwid3giLCJnZXRTdG9yYWdlU3luYyIsIm1hcCIsImxvZyIsImRhdGUiLCJmb3JtYXRUaW1lIiwiRGF0ZSIsInRpbWVTdGFtcCJdLCJzb3VyY2VSb290IjoiIn0=