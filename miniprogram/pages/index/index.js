//index.js

const db = wx.cloud.database()
const book = db.collection('mybooks')
Page({
  data: {
    book_list: []
  },

  onLoad: function() {
    let _this = this
    book.get({
      success: function (res) {
        console.log(res.data)
        _this.setData({
          book_list: res.data
        })
      }
    })
  },

  viewItem: function(event) {
    const id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: '../bookDetail/bookDetail?id=' + id,
    })
  }

})
