// 实验数据导出模块
// 将云数据库记录转换为Excel分析格式

function formatForExport(records) {
  return records.map(item => ({
    participant_id: item.participant_id || '',
    group: item.group || '',
    date: item.date || '',
    foods: (item.food_labels || []).join(','),
    lunch_score: item.lunch_score || 0,
    valid: item.valid ? 1 : 0
  }));
}

module.exports = {
  formatForExport
};
