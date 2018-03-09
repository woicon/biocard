//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        creatingBookName: "ssss书名nullsss",
        viewStat:true,
        card: {
            address: "Beijing",
            company: "北京市腾讯计算机有限公司",
            website: "http://baidu.com",
            landline: ["23232323"],
            weibo: "string",
            wechatid: "string",
            email: "vicunart@gmail.com",
            phone: ['139091923123'],
            name: "Jobs Wang",
            position: "CEO",
            openid: "98983213123",
        },
        currForm: 0,
        form: [
            {
                name: {
                    txt: "输入您的姓名",
                    must: true,
                    focus: false,
                    error: "姓名必须要填写哟",
                },
                phone: {
                    numbers: true,
                    txt: "手机号码",
                    error: "手机号也必须要填写哟",
                    max: 11
                },
            }, {
                company: {
                    txt: "公司名称"
                },
                position: {
                    txt: "职务"
                },
                address: {
                    txt: "公司地址"
                },
                website: {
                    txt: "公司网址"
                },
                landline: {
                    numbers: true,
                    txt: "座机号",
                    max: 11
                },
                email: {
                    txt: "电子邮件",
                }
            }, {
                weibo: {
                    txt: "微博昵称"
                },
                // wechatid: {
                //     txt: "微信号"
                // },
                qq: {
                    txt: "QQ号"
                }
            },
            {
                imgshow: {
                    txt: "是否显示头像",
                    type: 1
                }
            }
        ]
    },
    toggleView:function(){
        let stat = !this.data.viewStat
        this.setData({
            viewStat:stat
        })
    },
    bindKeyInput: function (e) {
        console.log(e)
        let that = this
        let card = this.data.card
        card[e.target.id] = e.detail.value
        if (e.detail.value != ''){
            that.setStat(['errorstat'], e,false)
        }else{
            that.setStat(['errorstat'], e,true)
        }

        this.setData({
            card: card
        })
    },

    setStat:function(arr,e,s) {
        let that = this
        let form = that.data.form,
        formItem = form[that.data.currForm][e.target.id]
        console.log(typeof arr)
        if(typeof arr === 'string'){
            formItem[arr] = s
        } else if (typeof arr === 'object'){
            console.log(arr)
            arr.map((item) => {
                formItem[item] = s
            })
        }
        that.setData({
            form: form
        })
    },
    setFormStat:function(){

    },
    inputFocus: function (e) {
        let that = this
        console.log("inputFocus",e)
       that.setStat(['focus',"clear"],e,true)
        if (e.detail.value == '') {
            that.setStat('errorstat', e,true)
        }
     },
    inputBlur:function(e){  
        let that = this
        that.setStat('focus', e,false)
        if (e.detail.value == '') {
            that.setStat('errorstat', e,true)
        }
    },
    // clearInput:function(e){
    //     let that = this
    //     let card = this.data.card
    //     card[e.target.id] = ''
    //     console.log("clearInput",e)
    //     this.setData({
    //         card: card
    //     })
    //     that.setStat("focus", e, true)
    //    // that.setStat("clear", e, false)
    // },
    nextStep: function (e) {
        this.setpNum(+1)
    },
    backStep: function () {
        this.setpNum(-1)
    },
    setpNum: function (ns) {
        let num = this.data.currForm + ns
        this.setData({
            currForm: num
        })
    },
    onLoad: function () {
        if (app.globalData.userInfo) {
            console.log(app.globalData.userInfo)
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else {
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        }
    },
    onShareAppMessage: function (res) {
        if (res.from === 'button') {
            // 来自页面内转发按钮
            console.log(res.target)
        }
        return {
            title: '',
            path: '/page/user?id=123',
            success: function (res) {
                // 转发成功
            },
            fail: function (res) {
                // 转发失败
            }
        }
    },
    getUserInfo: function (e) {
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },
    creatCard: function (e) {
        console.log(e)
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
