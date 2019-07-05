var app = require('scripts/app')
var requests = require('scripts/requests')

// var sspaiUserName = 'SpencerWoo'

// 请在这里将 userId 的值替换为你的少数派用户 ID，在你的少数派用户主页链接中即可找到
// 比如：https://beta.sspai.com/user/800610/updates 中, 800610 即为少数派 userId
var userId = '800610'

function main() {
  // 通过搜索接口获取少数派用户 ID，目前访问速度非常慢，以后再说
  // requests.getUserId(sspaiUserName).then(resp => {
  //   let userId = resp.data.data[0].id

  // })

  // 将 ID 传递给获取用户信息接口
  requests.getUserInfo(userId).then(resp => {
    let userInfo = resp.data
    // $console.info(userInfo)

    app.renderUI(userInfo)
  })
}

main()
