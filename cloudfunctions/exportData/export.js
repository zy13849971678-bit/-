// 实验数据导出结构模块

function formatExportData(records) {
  return records.map(item => ({
    participant_id: item.participant_id,
    group: item.group,
    date: item.date,
    lunch_score: item.lunch_score,
    foods: item.food_labels.join(','),
    valid: item.valid ? 1 : 0
  }));
}

module.exports = {
  formatExportData
};
