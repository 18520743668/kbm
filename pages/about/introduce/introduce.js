var a = getApp();

Page({
    data: {
        StatusBar: a.globalData.StatusBar,
        CustomBar: a.globalData.CustomBar
    },
    onLoad: function() {},
    pageBack: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    previewImage: function(a) {
        var e = a.target.dataset.src, t = [ e ];
        wx.previewImage({
            current: e,
            urls: t
        });
    },
    onShareAppMessage: function() {
        return {
            title: "网课答案不用愁，戳我搜索",
            path: "pages/homepage/wangke/wangke",
            imageUrl: "/images/share.png",
            success: function(a) {
                console.log("转发成功", a);
            },
            fail: function(a) {
                console.log("转发失败", a);
            }
        };
    }
});