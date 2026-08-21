// 午餐照片健康评分计算模块
// LunchScore = 食物类别得分求和

function calculateLunchScore(foodLabels) {
  let score = 0;

  foodLabels.forEach(item => {
    score += item.score || 0;
  });

  return score;
}

function calculateThreeDayScore(scores) {
  if (!scores || scores.length === 0) return 0;

  const total = scores.reduce((a, b) => a + b, 0);
  return Number((total / scores.length).toFixed(2));
}

module.exports = {
  calculateLunchScore,
  calculateThreeDayScore
};
