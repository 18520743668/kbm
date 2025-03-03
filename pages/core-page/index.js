getApp(), Page({
    data: {
        motto: "Hello World",
        userInfo: {},
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        canIUseGetUserProfile: !1,
        canIUseOpenData: wx.canIUse("open-data.type.userAvatarUrl") && wx.canIUse("open-data.type.userNickName")
    },
    bindViewTap: function() {
        wx.navigateTo({
            url: "../logs/logs"
        });
    },
    onLoad: function() {
        wx.getUserProfile && this.setData({
            canIUseGetUserProfile: !0
        });
    },
    getUserProfile: function(e) {
        var s = this;
        wx.getUserProfile({
            desc: "展示用户信息",
            success: function(e) {
                console.log(e), s.setData({
                    userInfo: e.userInfo,
                    hasUserInfo: !0
                });
            }
        });
    },
    getUserInfo: function(e) {
        console.log(e), this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: !0
        });
    }
});