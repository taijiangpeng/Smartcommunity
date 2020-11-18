// pages/neighbor/get_more/get_more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs : [
      '/images/neighbor/back.png',
      '/images/neighbor/back.png',
    ],
  },

  getmore(){
    this.data.imgs.push('/images/neighbor/back.png');
    var arr = this.data.imgs
    this.setData({
      imgs: arr
    })
    
  }

})