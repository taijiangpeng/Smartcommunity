// pages/neighbor/get_more/get_more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text : '',
    imgs : [

    ],
  },

  getmore(){
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        console.log(res);
        that.data.imgs.push(res.tempFilePaths[0]);
        var arr = that.data.imgs
        that.setData({
          imgs: arr
        })
      }
    })
  },

  bdinput(e){

    
    this.setData({
      text : e.detail.value
    })
    
  },
  send(){
    const token = wx.getStorageSync('TOKEN');
    console.log(JSON.stringify(this.data.imgs));
    var aaa = JSON.stringify(this.data.imgs);
    const user_infor = wx.getStorageSync('user_info')
    wx.request({
      url: 'http://localhost:3000/api/app/add_pyq',
      method: 'GET',
      data: {
        token,
        imgs : aaa,
        time : Date.now(),
        name: user_infor.nickName,
        touxiang : user_infor.avatarUrl,
        like : 0,
        text : this.data.text
      },
      success : ()=>{
        wx.navigateTo({
          url: '/pages/neighbor/neighbor',
        })
      }
    })
    
  }

})