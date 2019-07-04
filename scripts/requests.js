var sspaiApiUrl = 'https://beta.sspai.com/api/v1/user/id/info/get?id='
// var sspaiUserId = '800610'

var sspaiSearchApi = 'https://beta.sspai.com/api/v1/user/search/page/get?limit=1&nickname='
// var sspaiSearchName = 'SpencerWoo'

async function getUserId(sspaiSearchName) {
  let resp = await $http.get({
    url: sspaiSearchApi + sspaiSearchName
  });
  return resp.data
}

async function getUserInfo(sspaiUserId) {
  let resp = await $http.get({
    url: sspaiApiUrl + sspaiUserId
  })
  return resp.data
}

module.exports = {
  getUserInfo: getUserInfo,
  getUserId: getUserId
}
