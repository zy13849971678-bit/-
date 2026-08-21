// 午餐健康评分云函数
// 输入：AI识别后的食物列表
// 输出：LunchScore及评价建议

const foodDatabase = {
  vegetable: {
    keywords: ['青菜','白菜','菠菜','西兰花','油菜','番茄','黄瓜','洋葱','青椒'],
    score: 2,
    category: '蔬菜'
  },
  healthyProtein: {
    keywords: ['鱼','虾','豆腐','鸡胸肉'],
    score: 2,
    category: '优质蛋白'
  },
  protein: {
    keywords: ['牛肉','猪肉','鸡肉','鸡蛋','鸡腿'],
    score: 1,
    category: '蛋白质'
  },
  staple: {
    keywords: ['米饭','面条','馒头','包子'],
    score: 0,
    category: '主食'
  },
  wholeGrain: {
    keywords: ['杂粮饭','燕麦','糙米','红薯'],
    score: 2,
    category: '全谷物主食'
  },
  fried: {
    keywords: ['炸鸡','薯条','油条','炸串'],
    score: -2,
    category: '油炸食品'
  },
  sugaryDrink: {
    keywords: ['可乐','奶茶','雪碧'],
    score: -2,
    category: '含糖饮料'
  }
};

function analyzeFood(food) {
  for (const key in foodDatabase) {
    const item = foodDatabase[key];
    if (item.keywords.some(k => food.includes(k))) {
      return {
        food,
        category: item.category,
        score: item.score
      };
    }
  }

  return {
    food,
    category: '未知食物',
    score: 0
  };
}

function calculateScore(foodList) {
  let total = 0;
  const details = foodList.map(food => {
    const result = analyzeFood(food);
    total += result.score;
    return result;
  });

  return {
    totalScore: total,
    details,
    suggestion: total >= 4 ? '整体搭配较合理，请继续保持。' : '建议增加蔬菜和优质蛋白摄入。'
  };
}

exports.main = async (event) => {
  const foodList = event.foodList || [];
  return calculateScore(foodList);
};
