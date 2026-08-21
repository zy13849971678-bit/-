// 保存午餐实验记录模块

function createLunchRecord(data) {
  return {
    participant_id: data.participant_id || '',
    group: data.group || '',
    date: data.date || new Date().toISOString().slice(0, 10),
    upload_time: new Date().toISOString(),
    image_url: data.image_url || '',
    food_labels: data.food_labels || [],
    lunch_score: data.lunch_score || 0,
    valid: true
  };
}

function checkDuplicate(records, participant_id, date) {
  return records.some(item =>
    item.participant_id === participant_id && item.date === date
  );
}

module.exports = {
  createLunchRecord,
  checkDuplicate
};
