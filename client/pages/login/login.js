// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  getUserInfoAction(info) {
    console.log(info);
    this.login()
  },
  login() {
    //登录:第一步，获得code
    wx.login({
      success({
        code
      }) {
        console.log(code);
        // 登录第二步：将code发送给服务器
        wx.request({
          url: 'http://localhost:3000/api/auth/send_code',
          method: 'POST',
          data: {
            code
          },
          // 登录第六步：获得登录态
          success(res) {
            const token = res.data.token;

            // 登录第七步：保存登录态
            wx.setStorageSync('TOKEN', token);
          },
          fail(error) {
            console.log(error);
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})