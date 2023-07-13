// index.js
// 获取应用实例
var app = getApp()

Page({
  data: {
    motto: 'yonghu',
    userInfo: {},
    sexIndex: 0,
    sexArray: ['男','女'],
    multiArray:[],
    multiIndex:[],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: false,//wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
    barrageLineCount: 10,
    barrageNewMsgs: ['男','女','男1','女1','男2','女2','男3','女3','男4','女4'],
  },
  // 事件处理函数
  Confirm() {
    app.globalData.userSex = this.data.sexIndex
    console.log('用户性别设置为', app.globalData.userSex)
    app.globalData.userBirth = this.data.multiIndex
    console.log('用户生辰设置为', app.globalData.userBirth)
    wx.switchTab({
      url: '../result/result',
    })
  },
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  
  bindMultiPickerChange: function (e) {
    console.log('生辰picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindPickerChange: function (e) {
    console.log('性别picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      sexIndex: e.detail.value
    })
  },
  sexpickerTap: function (e) {
    var data = {
      sexArray: this.data.sexArray,
      sexIndex: this.data.sexIndex
   };
  },
  datepickerTap: function (e) {
    var years = [];
    var months = ['正','二','三','四','五','六','七','八','九','十','冬','腊'];
    var days = [];
    var hours = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
    // 年
    for (var i = 1950; i <= 2019; i++) {
      years.push(i+'年');
    };
    for (var i = 0; i <= 11; i++) {
      months[i] = months[i] +'月';
      hours[i] = hours[i] +'时';
    };
    for (var i = 1; i <= 30; i++) {
      days.push(i);
    };
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
   };
   data.multiArray = [years, months, days, hours]
   data.multiIndex = [25, 6, 15, 6];
   this.setData(data);
}
})
