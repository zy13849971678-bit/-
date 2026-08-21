// 午餐照片上传页面逻辑

Page({
  data: {
    imagePath: '',
    uploadTime: '',
    isValidTime: false
  },

  chooseImage() {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      success: res => {
        const path = res.tempFiles[0].tempFilePath;
        this.setData({
          imagePath: path
        });
        this.checkUploadTime();
      }
    });
  },

  checkUploadTime() {
    const hour = new Date().getHours();
    const valid = hour >= 11 && hour <= 14;

    this.setData({
      uploadTime: new Date().toLocaleString(),
      isValidTime: valid
    });
  },

  submitPhoto() {
    if (!this.data.isValidTime) {
      wx.showToast({
        title: '请在规定时间上传',
        icon: 'none'
      });
      return;
    }

    wx.cloud.uploadFile({
      filePath: this.data.imagePath,
      cloudPath: `lunch/${Date.now()}.jpg`
    });
  }
});
