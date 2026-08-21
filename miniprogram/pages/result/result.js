// 午餐评分结果页面

Page({
  data: {
    foods: [],
    score: 0,
    suggestion: ''
  },

  onLoad(options) {
    if (options.result) {
      const result = JSON.parse(decodeURIComponent(options.result));
      this.setData({
        foods: result.foods || [],
        score: result.lunchScore || 0,
        suggestion: this.generateSuggestion(result.lunchScore || 0)
      });
    }
  },

  generateSuggestion(score) {
    if (score >= 6) {
      return '本次午餐搭配较均衡，继续保持。';
    }
    if (score >= 3) {
      return '午餐基本合理，可适当增加蔬菜或水果摄入。';
    }
    return '建议增加蔬菜和优质蛋白，减少高油高糖食物。';
  }
});
