Page({
  data: {
    participantId: ''
  },

  inputId(e) {
    this.setData({
      participantId: e.detail.value
    });
  },

  startUpload() {
    if (!this.data.participantId) {
      wx.showToast({
        title: '请输入实验编号',
        icon: 'none'
      });
      return;
    }

    wx.navigateTo({
      url: `/pages/upload/upload?participantId=${this.data.participantId}`
    });
  }
});
