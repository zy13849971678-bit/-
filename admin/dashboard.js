// 管理员后台数据统计模块

function summarizeRecords(records) {
  const total = records.length;
  const valid = records.filter(item => item.valid).length;

  const scores = records
    .filter(item => item.valid && typeof item.lunch_score === 'number')
    .map(item => item.lunch_score);

  const averageScore = scores.length
    ? Number((scores.reduce((a,b)=>a+b,0) / scores.length).toFixed(2))
    : 0;

  return {
    totalRecords: total,
    validRecords: valid,
    averageScore
  };
}

module.exports = {
  summarizeRecords
};
