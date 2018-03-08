//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    creatingBookName:"ssss书名nullsss",
    card:{
        address:"Beijing",
        company:"北京市腾讯计算机有限公司",
        website:"http://baidu.com",
        landline: ["23232323"],
        weibo:"string",
        wechatid:"string",
        email:"vicunart@gmail.com",
        phone:['139091923123'],
        name:"string",
        position:"CEO",
        openid:"98983213123",
    },
    currForm:0,
    form:[
        {
            name:"输入您的姓名",
            phone:{
                numbers: true,
                txt: "手机号码",
                max: 11
            },
        },{
            company: "公司名称",
            address: "公司地址",
            
            website: "请输入公司网址",
            landline:{
                numbers:true,
                txt:"请输入座机号",
                max:11
            },
            email:"电子邮件地址"
        },{
            weibo:"string",
            wechatid:"string",
            qq:"QQ号"
        },
        {
            logo: "选择个人头像或者公司logo",
        }
    ]
  },
  bindKeyInput: function (e) {
      console.log(e)
      let card = this.data.card
      card[e.target.id] = e.detail.value
      this.setData({
          card:card
      })
  },
  nextSetp:function(e){
    console.log(e)
      let num = this.data.currForm +1
      this.setData({
          currForm:num
      })
  },
  creatCard:function(e){
    console.log("跳过",e)
  },
  onLoad: function () {
      this.creatCard()
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  creatCard:function(e){
      let card = this.data.card // 缓存在 data 对象中的输入框输入的书名
      let tableID = '27001' // 从知晓云后台的数据表中获取到的对应数据表的 ID
      let Books = new wx.BaaS.TableObject(tableID) //实例化对应 tableID 的数据表对象
      let book = Books.create() // 创建一条记录

    //   book.set(card )
    //       .save()
    //       .then((res) => {
    //           //...
    //           console.log(res)
    //       })
  }
  
})
