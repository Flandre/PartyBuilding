//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    controls: [{
      id: 1,
      iconPath: './images/marker.png',
      position: {
        left: 0,
        top: 0,
        width: 23,
        height: 35
      },
      clickable: true
    }]
  },
  onLoad: function () {

  },
})
