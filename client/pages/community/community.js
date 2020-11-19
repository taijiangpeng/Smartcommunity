// pages/community/community.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contentlist:[
      { imgpath:'../../images/community/u1402.svg', text:'缴费'},
      { imgpath:'../../images/community/u1406.svg', text:'车位'},
      { imgpath:'../../images/community/u1410.svg', text:'物业公告'},
      { imgpath:'../../images/community/u558.svg', text:'联系物管'},
      { imgpath:'../../images/community/u1418.svg', text:'报修'},
      { imgpath:'../../images/community/u565.svg', text:'投诉建议'},
      { imgpath:'../../images/community/1.png', text:'其他'},
      { imgpath:'../../images/community/2.png', text:''},
    ]
  },
  changeaction(ev){
    if(ev.currentTarget.dataset.index === 0){
      wx.navigateTo({
        url: '../community/pay/pay',
      })
    };
    if(ev.currentTarget.dataset.index === 4){
      wx.navigateTo({
        url: '../community/repair/repair',
      })
    }
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