//app.js
App({
    onLaunch: function () {
        require('./sdk/sdk-v1.1.6')
        // 初始化 SDK
        let clientID = '9e84f7a677053b9ea305'
        wx.BaaS.init(clientID)
        // 登录
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            }
        })
        wx.getUserInfo({
            lang: "zh_CN",
            success: res => {
                this.globalData.userInfo = res.userInfo
                if (this.userInfoReadyCallback) {
                    this.userInfoReadyCallback(res)
                }
            }
        }) 
    },
    globalData: {
        userInfo: null
    }
})