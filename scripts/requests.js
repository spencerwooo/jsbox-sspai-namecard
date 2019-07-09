/**
 * 处理 API 请求
 */

// 少数派用户信息接口更新频繁，可能会有查询问题，请注意及时更新脚本
var sspaiApiUrl = 'https://beta.sspai.com/api/v1/user/slug/info/get?slug='

var sspaiSearchApi =
  'https://beta.sspai.com/api/v1/user/search/page/get?limit=1&nickname='

async function getUserId(sspaiSearchName) {
  let resp = await $http.get({
    url: sspaiSearchApi + sspaiSearchName
  })
  $console.info(resp.data)
  return resp.data
}

async function getUserInfo(sspaiUserId) {
  let resp = await $http.get({
    url: sspaiApiUrl + sspaiUserId
  })
  $console.info(resp.data)
  return resp.data
}

module.exports = {
  getUserInfo: getUserInfo,
  getUserId: getUserId
}
