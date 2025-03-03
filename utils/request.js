function a(a) {
    var d = t.enc.Utf8.parse("7393b9888548421ca96fc0cd1fab8cab"), n = t.AES.decrypt(a, d, {
        mode: t.mode.ECB,
        padding: t.pad.Pkcs7
    });
    return t.enc.Utf8.stringify(n).toString();
}

var t = require("crypto-js.js");

module.exports = {
    get: function(t, d, n) {
        wx.request({
            url: t,
            data: d,
            success: function(t) {
                200 == t.statusCode ? (t.data.data && "" != t.data.data && null != t.data.data && (t.data.data = a(t.data.data)), 
                n.success(t.data)) : (
                  wx.hideLoading()
                );
            },
            fail: function(a) {
                n.fail(a), wx.showToast({
                    icon: "none",
                    title: "请求失败，请稍候重试"
                });
            }
        });
    },
    post: function(t, d, n) {
        wx.request({
            url: t,
            data: d,
            method: "POST",
            success: function(t) {
                200 == t.statusCode ? (t.data.data && "" != t.data.data && null != t.data.data && (t.data.data = a(t.data.data)), 
                n.success(t.data)) : ( wx.hideLoading());
            },
            fail: function(a) {
                n.fail(a), wx.showToast({
                    icon: "none",
                    title: "请求失败，请稍候重试"
                });
            }
        });
    }
};