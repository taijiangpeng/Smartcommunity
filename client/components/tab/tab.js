// components/tab/tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    getUserInfoAction(info){

    }
  },
  lifetimes:{
    attached:function(){
      console.log(getApp().globalData.isLogin);
      
      
    }
  }
})
