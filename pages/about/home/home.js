var t = getApp();

Component({
    options: {
        addGlobalClass: !0
    },
    data: {
        starCount: 0,
        forksCount: 0,
        visitTotal: 0,
        StatusBar: t.globalData.StatusBar,
        CustomBar: t.globalData.CustomBar,
        modalName: null,
        userInfo: {},
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo")
    },
    attached: function() {
        var t = this;
        wx.showLoading({
            title: "数据加载中",
            mask: !0
        });
        var a = 0;
        (function o() {
            a < 20 ? setTimeout(function() {
                t.setData({
                    starCount: a,
                    forksCount: a,
                    visitTotal: a
                }), a++, o();
            }, 20) : t.setData({
                starCount: t.coutNum(3e3),
                forksCount: t.coutNum(484),
                visitTotal: t.coutNum(35700)
            });
        })(), wx.hideLoading();
    },
    methods: {
        coutNum: function(t) {
            return t > 1e3 && t < 1e4 && (t = (t / 1e3).toFixed(1) + "k"), t > 1e4 && (t = (t / 1e4).toFixed(1) + "W"), 
            t;
        },
        CopyLink: function(t) {
            wx.setClipboardData({
                data: t.currentTarget.dataset.link,
                success: function(t) {
                    wx.showToast({
                        title: "已复制",
                        duration: 1e3
                    });
                }
            });
        },
        showModal: function(t) {
            this.setData({
                modalName: t.currentTarget.dataset.target
            });
        },
        hideModal: function(t) {
            this.setData({
                modalName: null
            });
        },
        showQrcode: function() {
            wx.previewImage({
                urls: [ "https://image.weilanwl.com/color2.0/zanCode.jpg" ],
                current: "https://image.weilanwl.com/color2.0/zanCode.jpg"
            });
        },
        getUserInfo: function(a) {
            a.detail.userInfo && (t.globalData.userInfo = a.detail.userInfo, this.setData({
                userInfo: a.detail.userInfo,
                hasUserInfo: !0
            }));
        }
    }
});