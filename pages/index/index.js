//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    cur:0,
    title:[
      {'name':'足球现场',curinx:0},
      { 'name': '足球生活', curinx: 1 },
      {'name': '足球美女', curinx: 2 }
    ],
   
      item1: [{ 'url':'/imgs/xwz.jpg', 'introduce':"小丸子啊小丸子"},
        { 'url': '/imgs/xwz.jpg', 'introduce': "小丸子啊小丸子" },
        { 'url': '/imgs/xwz.jpg', 'introduce': "小丸子啊小丸子" },
        { 'url': '/imgs/xwz.jpg', 'introduce': "小丸子啊小丸子" },
        { 'url': '/imgs/xwz.jpg', 'introduce': "小丸子啊小丸子" }         
      ],
      item2: [],
      item3: []
  },onShow(){
      
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    console.log(options)
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    // for(cur in adorable){
    //   that.setData({
    //      arr:arr.push(cur)
    //   })
    // }
    // console.log(arr)
  },
  change(e){
      this.setData({
        cur: e.target.dataset.currtab
      }); 
  },
  go(e){
    this.setData({
      cur: e.detail.current
    })
  }
})
