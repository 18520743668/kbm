var n = null;

// var cloud = new wx.cloud.Cloud({
//   // 资源方 AppID
//   resourceAppid: 'wx32774ecd8f75b804',
//   // 资源方环境 ID
//   resourceEnv: 'nrjc-0gkd710dde412184',
// });
wx.cloud.init();
Page({
  data: {
    loading: !1,
    number: 3,
    nameType: ["空白名", "重复名", "符号名"],
    kongBaiData: ["⁠", "⁡", "⁢", "⁣", "​", "　", " "],
    shuruNu: "",
    cfm: ["⁠", "⁡", "⁢", "⁣", "​"],
    upFhRandom: "",
    platform: "",
    fhRandom: ["༺爱༒情༻❦", "✿大白莎҉", "太白 ζั͡~", "奶我 ღ ҉҉҉҉҉҉҉҉҉҉", "✾͡安啦oೄ೨", "挽留 گق", "七爷ღ", "呆猪้๊้๊", "Ꮙ·朝暮", "﹏﹌浪子", "〆乀追风〆乀", "╰☆秋水oO", "ღ҉ 萌哭", "别̶闹̶", "≮错過≯", "﹏๓₯゛妖尾", "ﻬق、ゞ勿忘", "木兰ړ₊", "こ春郎こ", "ৡ蔠嚸 ೄ೨", "演้็员ۣ", "༺思ゝ爷༻", "ℳ_子龙丶℘", "阡陌ั͡✿", "BooM☆*:.｡.", "❀＂怪叔 ღ", "✾͡千夏ೄ೨", "✿͡小雪怪", "❀﹏๓₯毒药", "๓҉ 北风寒", "萱萱✿ۣว", "❀ൢ柠萌ൢ❀", "ᖬིཊ风ཊᖪྀ", "༺―花痴―༻", "橙̶妹̶م", "小̸师̸妹̸", "冬ོ雨ོ", "南辞ꦿ゜এ", "এ᭄燕ོꦿృ༊", "ღ龙儿᭄ꦿ࿐", "梦ꦿ` ", "六道仙ོ人ꦿ", "枫叶⸙", "¸₋ 尐〣 ҉", "红้็颜ۣۖ", "IPhone8s☃☃", "ℳÇ҉丶樱桃", "国服路人王℡", "ζ❀汤圆圆ى", "ೄ冷೨胤๓", ":*☆言溪☆*:", "ζั͡✾情缘҉", "گق  鹿十", "三้็年ۣۖ", "依赖ღ҉", "❢星星点灯❣", "兔子 ҉", "✿•ᴥ•✿", "Ꮙ·思绪", "╰⋛默然⋚╯", "❦花璃༺", "ღ҉ ୨花秀୧❀", "玩ۚ味ۣۖ", "〆灬小妖精ゝ", "༽༾M神༿༼", "҈Ͽ风流倜傥 ೃ", "戰メ六月✿", "*☻宇哥☻*", "贝塔✿", "買酔℡浅唱", "⊱終極喫貨⊰", "☂ღ҉ 17歲", "凉城  ةم", "隼龙سً", "ღ゛5 殺 ❀", "༂芬༒奇༂℡", "、Mi❅小白ヅ", "你瞅啥✪", "ご啻耀★龙涎ぃ", "♚陪她终老❦", "҉   苏沐", "༺ༀ清风ༀ༻", "❀ 临风", "触手寂风ღ", ".ت‿逸ツ", "₰ ゝ老酒﷼", "￡死神的メ镰刀ぃ", "꧁༺强༻꧂ღ", "❀҉风走了", "๛๓㎖°乱神", "ζ͡✾帝❦岚", "₯ღ゛提笔⁶", "︻安▅▆▇◤", "ζั͡✿鴻ى", "♚_乔巴.ღ", "ゝ狂三ゞ", "❦酒༒客❦꧂", "╬魍魉็้๘", "༺棒༒锤༻", "༺☜千羽☞༻", "ご狂刀☞先生", "瓶装水ღ҉", "༺冷江月༻", "♪以梦为马☂", "*☻奈何☻*", "ず夜空下的流星ゞ", "Ꮙ·大宝剑", "✿..魂淡°", "ぴ懒癌晚期〆", "誓☪༺宝er༻", "D̶i̶e̶", "༺梦境缠绕༻", "₯๑  达浪و", "✿森屿༻ℳ", "๘苏妲己໑", "Ꮙ·朝暮", "웃 ღ 유", "夏目君がۣۖ", "肉肉  ړ₊"],
    arrayFuhao: ["枫叶⸙", "学妹²⁰¹⁹", "ζ❀梦ى", "红้็颜ۣۖ", "╰☆秋风oO", "南辞ꦿ゜এ", "℡渣男ヾ", "瞅啥✪", "✿大叔ღ", "依赖ღ҉", "ღ叶❧秋", "এ᭄燕ོꦿృ༊", "六道仙ོ人ꦿ", "︻安▅▆▇◤", "梦ꦿ`", "じ☆ve", "﹋", "﹌", "꧔ꦿ", "☂", "༺࿈༻", "❀༒❀", "༺༽༾ཊ࿈ཏ༿༼༻", "☄", "༊", "情ོོꦿ℘", "☯", "࿊", "ℳ", "✎", "✏", "✐", "ᨐ", "˙⚇˙", "☃", "囍", "♪", "♩", "♫", "♬", "⚢", "⚣", "✘", "㊣", "࿆", "♞", "♡", "♤", "☾", "☽", "☼", "✭", "✬", "✫", "✰", "✧", "✦", "⋆", "❀", "❋", "❃", "❁", "✿", "✾", "✽", "♜", "♛", "♚", "♕", "♔", "ʚɞ ", "ʚΐɞ ", "▒", "̈́͒", "₯", "҉", "ღ ", "ฬ ", "ะ ", "๏", "๛", "๗", "๓", "๑", "ჲ ", "ჯ ", "ტ ", "ლ ", "დ ", " ر ", "ε ", "з ", "﹅", "﹆", "★", "㍊", "㍍", "㍑", "㌫", "㌍", "㌫", "㌶", "❤", "♥", "删除线→", "̶", "上排数字： º¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼ ", "下排数字：₀₁₂₃₄₅₆₇₈₉₊₋₌ ", "上排： ᵃ ᵇ ᶜ ᵈ ᵉ ᶠ ᵍ ʰ ⁱ ʲ ᵏ ˡ ᵐ ⁿ ᵒ ᵖ ʳ ˢ ᵗ ᵘ ᵛ ʷ ˣ ʸ ᶻ ", "上排： ᴬ ᴮ ᒼ ᴰ ᴱ ᴳ ᴴ ᴵ ᴶ ᴷ ᴸ ᴹ ᴺ ᴼ ᴾ ᴼ̴ ᴿ ˢ ᵀ ᵁ ᵂ ˣ ᵞ ᙆ "],
    examplePic: [{
      pic_1: "../../images/kbpic_1.jpg",
      pic_2: "../../images/kbpic_2.jpg"
    }, {
      pic_1: "../../images/cfpic_1.jpg",
      pic_2: "../../images/cfpic_2.jpg"
    }, {
      pic_1: "../../images/fhpic_1.jpg",
      pic_2: "../../images/fhpic_2.jpg"

    }, {
      pic_1: "cloud://gaimingzi-k5hv8.6761-gaimingzi-k5hv8-1303067593/fhpic_1.jpg",
      pic_2: "cloud://gaimingzi-k5hv8.6761-gaimingzi-k5hv8-1303067593/fhpic_2.jpg"
    }],
    qas: ["1、提示“内容已复制”即代表生成成功，可前往游戏内粘贴","2、进入游戏粘贴‘提示重复’，说明被前人使用了，请重新生成", "3、空白名、重复名每次随机生成，都是不一样的", "4、安卓苹果均完美显示", "5、空白名数量是有限的，且改且珍惜", "6、太火的重复名可能改不了，如“梦之泪伤”。如果你有耐心，不断去尝试生成，可以捡漏！"],
    TabCur: 0,
    vipUser: false
  },
  onLoad: function () {
    let isNewUser = wx.getStorageSync('isNewUser');
    this.getSystemInfo();
    setTimeout(() => {
      this.isVip()
    }, 500)
    if (!isNewUser) {
      this.setData({
        number: 3
      })
      wx.setStorageSync('number', 3)
      wx.setStorageSync('isNewUser', true)
    }
    var t = this;
    wx.createRewardedVideoAd && ((n = wx.createRewardedVideoAd({
      // 激励视频广告
      adUnitId: "adunit-f6398e3118d9d6d7"
    })).onLoad(function () {
      console.log("激励视频 广告加载成功");
    }), n.onError(function (n) {
      wx.showToast({
        title: "暂无视频广告，稍候再试",
        icon: "none",
        duration: 2e3
      });
    }), n.onClose(function (n) {
      n && n.isEnded ? (wx.setStorageSync('number', t.data.number + 3), t.setData({
        number: t.data.number + 3
      }), wx.showToast({
        title: "次数+3",
        icon: "none",
        duration: 2e3
      })) : wx.showToast({
        title: "需要看完才能获取",
        icon: "none",
        duration: 2e3
      });
    }));

  },
  getSystemInfo() {
    wx.getSystemInfo({
      success: res => {
        console.log('platform:' + res.platform)
        this.setData({
          platform: res.platform
        });
      }
    })
  },
  payment: function () {
    let that = this;
    wx.showModal({
      title: "温馨提示",
      content: "您支付3.99元后在接下来的24小时中可以无限制使用本小程序。",
      success: res => {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.cloud.callFunction({
            name: 'payment',
            data: {},
            success: res => {
              console.log(res)
              const payment = res.result.payment;
              wx.requestPayment({
                ...payment,
                success(res) {
                  console.log('pay success', res)
                  let payTime = new Date().valueOf();
                  wx.setStorageSync('payTime', payTime)
                  that.isVip()
                },
                fail(err) {
                  console.error('pay fail', err)
                }
              })
            },
            fail: console.error,
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }

    })


  },
  isVip: function () {
    wx.showLoading({
      title: '加载中',
    })
    let payTime = wx.getStorageSync('payTime');
    console.log('payTime:' + payTime)
    if (payTime) {
      let nowTime = new Date().valueOf();
      let oldTime = payTime + 86400000;
      console.log('nowTime:' + nowTime)
      console.log('oldTime:' + oldTime)
      wx.hideLoading()
      if (nowTime < oldTime) {
        this.setData({
          vipUser: true
        })
        console.log(this.data.vipUser)
      } else {
        this.setData({
          vipUser: false
        })
      }
    } else {
      wx.cloud.callFunction({
        name: "getPayTime"
      }).then(res => {
        console.log(res)
        let code = res.result.code;
        wx.hideLoading()
        if (code == 1) {
          wx.setStorageSync('payTime', res.result.payTime);
          this.isVip()
        } else {
          wx.hideLoading()
        }
      }).catch(err => {
        wx.hideLoading()
      })
    }
  },

  tabSelect: function (n) {
    this.setData({
      TabCur: n.currentTarget.dataset.id
    });
  },
  konbaibut: function () {
    if (this.data.number > 0) {
      for (var n = this.data.kongBaiData, t = "", a = 0; a < 6; a++) t += n[Math.floor(Math.random() * n.length)];
      wx.setClipboardData({
        data: t,
        fail: function () {
          wx.showToast({
            title: "请求失败，网络异常",
            icon: "none",
            duration: 2e3
          });
        }
      }), wx.setStorageSync('number', this.data.number - 1), this.setData({
        number: this.data.number - 1
      });
    } else wx.showModal({
      title: "次数不足",
      content: "请获取次数",
      showCancel: !1,
      confirmText: "知道了"
    });
  },
  vipKonbaibut: function () {
    console.log(wx.getStorageSync('number'))
    for (var n = this.data.kongBaiData, t = "", a = 0; a < 6; a++) t += n[Math.floor(Math.random() * n.length)];
    wx.setClipboardData({
      data: t,
      fail: function () {
        wx.showToast({
          title: "请求失败，网络异常",
          icon: "none",
          duration: 2e3
        });
      }
    })
  },
  chongfuInput: function (n) {
    this.setData({
      shuruNu: n.detail.value
    });
  },
  vipChongfubut: async function () {
    var n = this.data.shuruNu,
      t = this.data.cfm;
    if ("" == n) wx.showModal({
      content: "请输入昵称",
      showCancel: !1
    });
    else if (n.length > 5) wx.showModal({
      content: "输入昵称最长长度不能大于5",
      showCancel: !1
    });
    else {
      let msg = await this.msgSecCheck(this.data.shuruNu)
      console.log(msg)
      if (msg) {
        return wx.showModal({
          title: "温馨提示",
          content: "您的输入存在违规行为",
          showCancel: false,
          success: res => {
            this.setData({
              shuruNu: ''
            })
          }
        })
      }
      var a = "";
      if (1 == n.length)
        for (var o = 0; o < 5; o++) a = t[Math.round(Math.random() * (t.length - 1))] + a;
      else if (2 == n.length)
        for (var e = 0; e < 4; e++) a = t[Math.round(Math.random() * (t.length - 1))] + a;
      else if (3 == n.length)
        for (var i = 0; i < 3; i++) a = t[Math.round(Math.random() * (t.length - 1))] + a;
      else if (4 == n.length)
        for (var h = 0; h < 2; h++) a = t[Math.round(Math.random() * (t.length - 1))] + a;
      else a = t[Math.round(Math.random() * (t.length - 1))];
      for (var r = "", u = this.data.shuruNu.split(""), c = Math.round(Math.random() * (u.length - 1)), s = 0; s < u.length; s++) c == s ? r = r + u[s] + a : r += u[s];
      wx.setClipboardData({
        data: r,
        fail: function () {
          wx.showToast({
            title: "请求失败，网络异常",
            icon: "none",
            duration: 2e3
          });
        }
      })
    }

  },
  chongfubut: async function () {
    if (this.data.number > 0) {
      var n = this.data.shuruNu,
        t = this.data.cfm;
      if ("" == n) wx.showModal({
        content: "请输入昵称",
        showCancel: !1
      });
      else if (n.length > 5) wx.showModal({
        content: "输入昵称最长长度不能大于5",
        showCancel: !1
      });
      else {
        let msg = await this.msgSecCheck(this.data.shuruNu)
        console.log(msg)
        if (msg) {
          return wx.showModal({
            title: "温馨提示",
            content: "您的输入存在违规行为",
            showCancel: false,
            success: res => {
              this.setData({
                shuruNu: ''
              })
            }
          })
        }
        var a = "";
        if (1 == n.length)
          for (var o = 0; o < 5; o++) a = t[Math.round(Math.random() * (t.length - 1))] + a;
        else if (2 == n.length)
          for (var e = 0; e < 4; e++) a = t[Math.round(Math.random() * (t.length - 1))] + a;
        else if (3 == n.length)
          for (var i = 0; i < 3; i++) a = t[Math.round(Math.random() * (t.length - 1))] + a;
        else if (4 == n.length)
          for (var h = 0; h < 2; h++) a = t[Math.round(Math.random() * (t.length - 1))] + a;
        else a = t[Math.round(Math.random() * (t.length - 1))];
        for (var r = "", u = this.data.shuruNu.split(""), c = Math.round(Math.random() * (u.length - 1)), s = 0; s < u.length; s++) c == s ? r = r + u[s] + a : r += u[s];
        wx.setClipboardData({
          data: r,
          fail: function () {
            wx.showToast({
              title: "请求失败，网络异常",
              icon: "none",
              duration: 2e3
            });
          }
        }), wx.setStorageSync('number', this.data.number - 1), this.setData({
          number: this.data.number - 1
        });
      }
    } else wx.showModal({
      title: "次数不足",
      content: "请获取次数",
      showCancel: !1,
      confirmText: "知道了"
    });
  },
  bindFhRandom: function () {
    var n = Math.round(Math.random() * (this.data.fhRandom.length - 1));
    this.setData({
      upFhRandom: this.data.fhRandom[n]
    });
  },
  longFhRandom: function (n) {
    this.data.upFhRandom ? wx.setClipboardData({
      data: this.data.upFhRandom,
      success: function (n) {
        wx.showToast({
          title: "内容已复制",
          duration: 2e3
        });
      }
    }) : wx.showModal({
      content: "请先随机生成",
      showCancel: !1
    });
  },
  longHotText: function (n) {
    wx.setClipboardData({
      data: n.currentTarget.dataset.text,
      success: function (n) {
        wx.showToast({
          title: "内容已复制",
          duration: 2e3
        });
      }
    });
  },

  getNumber: function () {
    n && n.show().catch(function () {
      n.load().then(function () {
        return n.show();
      }).catch(function (n) {
        console.log("激励视频 广告显示失败");
      });
    });
  },

  eleme: function () {
    wx.navigateToMiniProgram({
      appId: "wx0da130fc7d7125c1",
      path: "pages/index/index.html",
      success: function (n) {
        console.log("跳转成功");
      },
      fail: function (n) {}
    });
  },
  msgSecCheck: function (text) {
    return new Promise(resolve => {
      setTimeout(() => {
        wx.cloud.callFunction({
          name: 'msgSecCheck',
          data: {
            content: text
          }
        }).then(res => {
          if (res.result.errCode == 0) {
            console.log('文本正常')
            resolve(0)
          } else {
            resolve(1)
            console.log('文本违规')
          }
        })
      }, 10)
    })


  },
  onReady: function () {},
  onShow: async function () {
    let isNewUser = wx.getStorageSync('isNewUser')
    let number = wx.getStorageSync('number')
    if (isNewUser) {
      this.setData({
        number: number < 0 ? 0 : number
      })
      console.log(this.data.number)
    }
  },
  initPage: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function (t) {
    return t.from, {
      title: "分享王者LOL改名小神器给你，超实用！！",
      path: "/pages/rename/rename",
      imageUrl: ""
    };
  },

});

var t = null;

wx.createInterstitialAd && ((t = wx.createInterstitialAd({
    // 插屏广告
    adUnitId: "adunit-2b336a84567d635a"
  })).onLoad(function () {}), t.onError(function (n) {}), t.onClose(function () {})),
  t && t.show().catch(function (n) {
    console.error(n);
  });