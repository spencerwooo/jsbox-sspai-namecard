var app = require('scripts/app')
var requests = require('scripts/requests')

// var sspaiUserName = 'SpencerWoo'

// 请在这里将 userId 的值替换为你的少数派用户 ID，在你的少数派用户主页链接中即可找到
// 比如：https://beta.sspai.com/user/spencerwoo/updates 中, spencerwoo 即为少数派 userId
var userId = '372f60d'

function main() {
  // 通过搜索接口获取少数派用户 ID，目前访问速度非常慢，以后再说
  // requests.getUserId(sspaiUserName).then(resp => {
  //   let userId = resp.data.data[0].id

  // })

  // 将 ID 传递给获取用户信息接口
  requests.getUserInfo(userId).then(resp => {
    if (resp.error === 0) {
      // API 接口正常
      let userInfo = resp.data
      // $console.info(userInfo)

      app.renderUI(userInfo)
    } else {
      $ui.alert({
        title: '⚠️ API 出现问题',
        message: '少数派用户信息接口错误，检查是否联网或重新安装最新脚本',
        actions: [
          {
            title: '好的',
            handler: function() {
              $app.close()
            }
          },
          {
            title: '前往脚本 Release 页',
            handler: function() {
              $app.openURL(
                'https://github.com/spencerwooo/jsbox-sspai-namecard/releases'
              )
            }
          }
        ]
      })
    }
  })
}

main()
