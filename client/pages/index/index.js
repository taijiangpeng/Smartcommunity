// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin : true
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
  async checkLogin(){
    // 检查登录了没有
    const token = wx.getStorageSync('TOKEN');
    if (token) {
      //登录了的话，过期了没有，过期了再执行登录
    await wx.request({
        url: 'http://localhost:3000/api/auth/check_login',
        method: 'GET',
        data: {
          token
        },
        success: ({
          statusCode
        }) => {
          if (statusCode !== 200) {
            //登录过期了
            console.log('登陆过期');
            
          } else {
            //登录没有过期，什么也不用干
            console.log('success');
            getApp().globalData.isLogin = true;

          }
          console.log(getApp().globalData.isLogin);
          if(!getApp().globalData.isLogin){
            console.log('去登陆');
            
            wx.navigateTo({
              url: '/pages/login/login',
            })
          }else{
            console.log('已经登录');
            
          }
        },
        // fail: (error) => {
        //   // this.login();
        //   console.log('请求失败');
        //   wx.navigateTo({
        //     url: '/pages/login/login',
        //   })
        // }
      });
    } else {
      // this.login();
      console.log('没注册过');
        wx.navigateTo({
          url: '/pages/login/login',
        })
    }
},
  /**
   * 生命周期函数--监听页面显示
   */
  onLoad: async function () {

    await this.checkLogin();
  

    
    




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