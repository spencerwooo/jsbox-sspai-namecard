/**
 * 渲染 app 界面
 */

var defaultAssetPath = 'https://cdn.sspai.com/'

function renderUI(userInfo) {
  $ui.render({
    props: {
      title: '少数派作者名片'
    },
    views: [
      {
        type: 'view',
        props: {
          id: 'app'
        },
        layout: function(make, view) {
          make.center.equalTo(view.super)
          make.width.equalTo(view.super)
        }
      },
      {
        type: 'image',
        props: {
          id: 'avatar',
          src: defaultAssetPath + userInfo.avatar,
          borderWidth: '1'
        },
        layout: function(make, view) {
          make.left.top.inset(10)
          make.size.equalTo($size(80, 80))
        }
      },
      {
        type: 'label',
        props: {
          text: userInfo.nickname,
          align: $align.left
        },
        layout: function(make, view) {
          make.left.equalTo($('avatar').right).offset(10)
          make.top.inset(10)
        }
      }
    ]
  })
}

module.exports = {
  renderUI: renderUI
}
