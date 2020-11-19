// pages/neighbor/neighbor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article : [
      {
        url : "/images/neighbor/back.png",
        name : "五五开",
        text : "的骄傲就是打架就打架收到就掉建设单位",
        imgs : [
          '/images/neighbor/back.png',
          '/images/neighbor/back.png',
          '/images/neighbor/back.png',
          '/images/neighbor/back.png',
        ],
        time : '2020/08/09 20:03',
        like : 8,

      },
      {
        url : "/images/neighbor/back.png",
        name : "五五开",
        text : "的骄傲就是打架就打架收到就掉建设单位",
        imgs : [
          '/images/neighbor/back.png',
          '/images/neighbor/back.png',
          '/images/neighbor/back.png',
          '/images/neighbor/back.png',
        ],
        time : '2020/08/09 20:03',
        like : 8,

      },
      {
        url : "/images/neighbor/back.png",
        name : "五五开",
        text : "的骄傲就是打架就打架收到就掉建设单位",
        imgs : [
          '/images/neighbor/back.png',
          '/images/neighbor/back.png',
          '/images/neighbor/back.png',
          '/images/neighbor/back.png',
        ],
        time : '2020/08/09 20:03',
        like : 8,

      },
    ]
  },
  onShow(){
    //进入页面时，加载所有朋友圈内容
    const token = wx.getStorageSync('TOKEN');
    console.log(token);
    var that = this;
    wx.request({
      url: 'http://localhost:3000/api/app/pyq_infor',
      method: 'GET',
      data: {
        token
      },
      success : (result)=>{
        console.log(result);
        result.data.infors.map((item)=>{
          item.imgs = JSON.parse(item.imgs);
          item.time = "" + (new Date(Number(item.time)).getMonth() + 1) + '月' + new Date(Number(item.time)).getDate() + "日" + new Date(Number(item.time)).getHours() + ":" + new Date(Number(item.time)).getMinutes();
        })
        that.setData({
          article : result.data.infors
        })
        console.log(this.data.article);
        
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