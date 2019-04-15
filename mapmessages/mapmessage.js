var bmap = require("../..//libs/bmap-wx/bmap-wx.min.js");
var bmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    bmapsdk = new bmap({
      key: "pxBMU8GzuWG09ILHTlGlhSYLP0GhIDmo"
    })

  },
  onShow: function() {
    var that = this;
    // 获取位置信息
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        bmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: function(result) {
            var province = result.result.address_component.province;
            var city = result.result.address_component.city;
            that.setData({
              region: [province, city]
            })
          }
        });
      },
    })
  }
})