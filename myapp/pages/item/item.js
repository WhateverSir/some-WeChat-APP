// pages/item.js
var app = getApp()

Page({
    data: {
        goodslist: [
            {
                id:"001",
                imgUrl:"../../image/fu.jpg",
                name:"父母",
                price:"限时免费"
            },
            {
                id:"002",
                imgUrl:"../../image/hun.jpg",
                name:"婚恋",
                price:"限时免费"
            },
            {
                id:"003",
                imgUrl:"../../image/q.jpg",
                name:"天命",
                price:"限时免费"
            },
            {
                id:"004",
                imgUrl:"../../image/liu.jpg",
                name:"流年",
                price:"限时免费"
            },
            {
                id:"005",
                imgUrl:"../../image/shou.jpg",
                name:"寿命",
                price:"限时免费"
            },
        ]
    },
    // 加入购物车
    addcart:function(e){
        app.globalData.item = e.target.id
        console.log('用户测算的项目是', app.globalData.item)
        wx.switchTab({
          url: '../result/result',
        })
    }
})