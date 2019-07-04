var app = require('scripts/app')
var requests = require('scripts/requests')

var sspaiUserName = 'SpencerWoo'
var userInfo

function main() {
  // 通过搜索接口获取少数派用户 ID
  requests.getUserId(sspaiUserName).then(resp => {
    let userId = resp.data.data[0].id

    // 将 ID 传递给获取用户信息接口
    requests.getUserInfo(userId).then(resp => {
      userInfo = resp.data
      // $console.info(userInfo)

      app.renderUI(userInfo)
    })
  })
}

main()
