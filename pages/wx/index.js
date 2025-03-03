var e = require("../../util/utils.js");

Page({
    data: {
        showModel: !1,
        herolist: null,
        heroInfo: null,
        currHero: null,
        swiperList: [ {
            id: 0,
            type: "image",
            url: "https://www.sapi.run/hero/images/ad1.png"
        }, {
            id: 1,
            type: "image",
            url: "https://blog.loverr.xyz/img/wz/11.png"
        }, {
            id: 2,
            type: "image",
            url: "https://blog.loverr.xyz/img/wz/22.png"
        }, {
            id: 3,
            type: "image",
            url: "https://blog.loverr.xyz/img/wz/33.png"
        } ]
    },
    onLoad: function(e) {
        var t = this;
        wx.showLoading({
            title: "加载中..."
        }), wx.request({
            url: "https://www.sapi.run/hero/herolist.json",
            header: {
                "Content-Type": "application/json"
            },
            success: function(e) {
                200 == e.data.code && t.setData({
                    herolist: e.data.data
                });
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    findHero: function(t) {
        var o = this;
        wx.showLoading({
            title: "加载中..."
        });
        var n = t.currentTarget.dataset.hero;
        "" == n ? wx.showToast({
            title: "没有找到相关英雄",
            icon: "info"
        }) : (o.setData({
            currHero: n
        }), wx.request({
            url: "https://www.sapi.run/hero/select.php?hero=" + n + "&type=wx",
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                if (200 == t.data.code) {
                    var n = t.data.data;
                    n.time = e.transTime(n.areaTime), o.showModal(n);
                } else wx.showToast({
                    title: "请求失败",
                    icon: "info"
                });
            },
            complete: function() {
                wx.hideLoading();
            }
        }));
    },
    showModal: function(e) {
        this.setData({
            heroInfo: e,
            showModel: !0
        });
    },
    hideModal: function() {
        this.setData({
            heroInfo: null,
            showModel: !1
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: "免费王者战力查询",
            path: "/pages/qq/index",
            imageUrl: "/images/share.png"
        };
    }
});