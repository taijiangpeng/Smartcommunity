//app.js
App({
  globalData : {
    isLogin : false 
  },
  onShow(){
      wx.navigateTo({
        url: '/pages/login/login',
      })
    this.checkLogin();
  },
  checkLogin(){
        // 检查登录了没有
        const token = wx.getStorageSync('TOKEN');
        if (token) {
          //登录了的话，过期了没有，过期了再执行登录
          wx.request({
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
                
              }
            },
            fail: (error) => {
              // this.login();
              console.log('请求失败');
              wx.navigateTo({
                url: '/pages/login/login',
              })
            }
          });
        } else {
          // this.login();
          console.log('没注册过');
            wx.navigateTo({
              url: '/pages/login/login',
            })
        }
  }
})