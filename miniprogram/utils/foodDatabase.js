// 蚂蚁阿福午餐健康评分食物规则数据库
// 根据《午餐照片健康饮食评分标准 V1.0》整理

const foodDatabase = {
  vegetables: {
    keywords: ['西兰花','青菜','白菜','番茄','黄瓜','洋葱','青椒'],
    score: 2
  },
  grains: {
    keywords: ['糙米','燕麦','杂粮饭','玉米','红薯'],
    score: 2
  },
  normalStaple: {
    keywords: ['米饭','白饭','面条','馒头'],
    score: 0
  },
  protein: {
    keywords: ['鱼','虾','豆腐','鸡蛋','瘦肉'],
    score: 2
  },
  processedMeat: {
    keywords: ['火腿','培根','腊肠'],
    score: -1
  },
  friedFood: {
    keywords: ['炸鸡','薯条','炸串','油条'],
    score: -2
  },
  sugaryDrink: {
    keywords: ['可乐','奶茶','果汁饮料'],
    score: -2
  },
  dessert: {
    keywords: ['蛋糕','冰淇淋','甜面包'],
    score: -1
  }
};

module.exports = foodDatabase;
