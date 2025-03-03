var s = require("/utils/config.js"),
    e = require("utils/request.js");

App({
    urls: s.urls,
    onLaunch: function () {
        wx.login({
            success: function (r) {
                r.code ? e.post(s.USER_LOGIN, {
                    code: r.code
                }, {
                    success: function (s) {}
                }) : console.error("登录失败！" + r.errMsg);
            }
        });
      
        wx.cloud.init();
    },
    globalData: {
        url: s,
        blankChars: [
            '\u2000', // EN QUAD
            '\u2001', // EM QUAD
            '\u2002', // EN SPACE
            '\u2003', // EM SPACE
            '\u2004', // THREE-PER-EM SPACE
            '\u2005', // FOUR-PER-EM SPACE
            '\u2006', // SIX-PER-EM SPACE
            '\u2007', // FIGURE SPACE
            '\u2008', // PUNCTUATION SPACE
            '\u2009', // THIN SPACE
            '\u200A', // HAIR SPACE
            '\u200B', // ZERO WIDTH SPACE
            '\u202F', // NARROW NO-BREAK SPACE
            '\u205F', // MEDIUM MATHEMATICAL SPACE
            '\u3000', // IDEOGRAPHIC SPACE
            '\uFEFF', // ZERO WIDTH NO-BREAK SPACE
        ]
    }
});