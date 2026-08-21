// 午餐照片AI分析云函数框架

const cloud = require('wx-server-sdk');
cloud.init();

const { calculateLunchScore } = require('../../utils/score');
const { matchFood } = require('../../utils/foodDatabase');

exports.main = async (event) => {
  const imageUrl = event.imageUrl;

  // 后续接入视觉识别API
  // 返回示例：['牛肉','青椒','米饭']
  const detectedFoods = await recognizeFood(imageUrl);

  const foodScores = detectedFoods.map(food => ({
    food,
    score: matchFood(food)
  }));

  const lunchScore = calculateLunchScore(foodScores);

  return {
    foods: foodScores,
    lunchScore,
    analyzedAt: new Date()
  };
};

async function recognizeFood(imageUrl) {
  // TODO: 接入阿里云/百度视觉识别接口
  return [];
}
