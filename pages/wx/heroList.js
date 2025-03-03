getApp();

var e = require("../../utils/request.js");

require("../../utils/util.js"), Page({
    data: {
        type: 2,
        search: "",
        heroType: "",
        heroList: [],
        heroPower: {},
        heroPowerModal: !1,
        indicatorDots: !0
    },
    onLoad: function() {
        var e = this;
        this.getHeroList().then(function(t) {
            e.setData({
                heroList: t
            });
        });
    },
    handleSearchChange: function(e) {
        this.setData({
            search: e.detail.value
        });
    },
    resetSearch: function() {
        var e = this;
        this.setData({
            search: "",
            heroType: ""
        }), this.getHeroList().then(function(t) {
            e.setData({
                heroList: t
            });
        });
    },
    tabBar: function(e) {
        var t = this, r = e.currentTarget.dataset.herotype, a = this.data.search;
        this.setData({
            heroType: r
        }), this.getHeroList().then(function(e) {
            t.setData({
                heroList: e.filter(function(e) {
                    return ("" == r || r == Number(e.job)) && e.name.indexOf(a) > -1;
                })
            });
        });
    },
    searchConfig: function() {
        var e = this;
        this.getHeroList().then(function(t) {
            var r = e.data, a = r.heroType, o = r.search;
            e.setData({
                heroList: t.filter(function(e) {
                    return ("" == a || a == Number(e.job)) && e.name.indexOf(o) > -1;
                })
            });
        });
    },
    heroPower: function(t) {
        var r = this;
        wx.showLoading({
            title: "加载中..."
        }), e.get("https://jf.weiqiok.com/GetData.asp?type=313&heroid=" + t.currentTarget.dataset.heroid + "&area=1", null, {
            success: function(a) {
                r.setData({
                    heroPower: a,
                    "heroPower.updateTime": e.updateTime,
                    "heroPower.cname": t.currentTarget.dataset.cname,
                    "heroPower.title": t.currentTarget.dataset.title,
                    "heroPower.iconUrl": t.currentTarget.dataset.iconurl,
                    "heroPower.heroType": t.currentTarget.dataset.herotype,
                    heroPowerModal: !0
                }), wx.hideLoading();
            }
        });
    },
    heroPowerModalHide: function() {
        this.setData({
            heroPowerModal: !1
        });
    },
    getHeroList: function() {
        return wx.showLoading({
            title: "加载中..."
        }), new Promise(function(e, t) {
            wx.request({
                url: "https://jf.weiqiok.com/GetData.asp?type=209",
                success: function(t) {
                    e(t.data.data);
                },
                fail: function(e) {
                    t(e);
                },
                complete: function() {
                    wx.hideLoading({
                        success: function(e) {}
                    });
                }
            });
        });
    },
    onShareAppMessage: function() {
        return {
            title: "王者荣耀战力查询工具",
            path: "/pages/qq/heroList"
        };
    },
    onShareTimeline: function() {
        return {
            title: "王者荣耀战力查询工具"
        };
    }
});