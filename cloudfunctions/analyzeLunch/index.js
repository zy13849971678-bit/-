// 午餐照片AI识别云函数
// 功能：接收图片 -> 调用视觉识别接口 -> 返回食物标签

const axios = require('axios');

exports.main = async (event) => {
  const imageUrl = event.imageUrl;

  // 百度智能云接口配置
  // 实际部署时填写 ACCESS_TOKEN
  const accessToken = process.env.BAIDU_ACCESS_TOKEN;

  try {
    const response = await axios.post(
      `https://aip.baidubce.com/rest/2.0/image-classify/v2/advanced_general?access_token=${accessToken}`,
      {
        url: imageUrl
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    const result = response.data.result || [];

    const foods = result.map(item => ({
      name: item.keyword,
      confidence: item.score
    }));

    return {
      success: true,
      foods: foods
    };

  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
};
