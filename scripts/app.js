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
          id: 'app',
          bgcolor: $color('#ffffff'),
          radius: 10
        },
        layout: function(make, view) {
          make.top.equalTo(view.super).inset(5)
          make.left.right.bottom.equalTo(view.super).inset(10)
        }
      },
      {
        type: 'image',
        props: {
          id: 'avatar',
          src: defaultAssetPath + userInfo.avatar,
          radius: 32
        },
        layout: function(make, view) {
          make.top.inset(14)
          make.right.inset(15)
          make.size.equalTo($size(64, 64))
        }
      },
      {
        type: 'label',
        props: {
          id: 'nickname',
          text: userInfo.nickname,
          font: $font('Menlo-Bold', 22),
          align: $align.left
        },
        layout: function(make, view) {
          make.top.inset(15)
          make.left.inset(20)
        }
      },
      {
        type: 'label',
        props: {
          id: 'follower-stats',
          text:
            $l10n('FOLLOWING') +
            ' ' +
            userInfo.following_count +
            ' · ' +
            $l10n('FOLLOWERS') +
            ' ' +
            userInfo.followed_count,
          font: $font(12),
          color: $color('#777777'),
          align: $align.left
        },
        layout: function(make, view) {
          make.left.inset(20)
          make.top.equalTo($('nickname').bottom).offset(10)
        }
      },
      {
        type: 'label',
        props: {
          id: 'bio',
          text: userInfo.bio,
          font: $font(12),
          align: $align.left
        },
        layout: function(make, view) {
          make.left.inset(20)
          make.top.equalTo($('follower-stats').bottom).offset(5)
          make.width.equalTo(300)
        }
      },
      {
        type: 'views',
        views: [
          {
            type: 'view',
            props: {
              id: 'details',
              bgcolor: $color('#292525'),
              radius: 10
            },
            layout: function(make, view) {
              make.top.left.right.bottom.equalTo(view.super)
            }
          },
          {
            type: 'label',
            props: {
              id: 'achievements-label',
              text: $l10n('ACHIEVEMENTS'),
              font: $font('Menlo-Bold', 18),
              color: $color('#ffffff')
            },
            layout: function(make, view) {
              make.top.equalTo(view.super).inset(30)
              make.left.inset(20)
            }
          },
          {
            type: 'image',
            props: {
              id: 'writing-icon',
              src: 'assets/writing.png'
            },
            layout: function(make, view) {
              make.top.equalTo($('achievements-label').bottom).offset(15)
              make.left.offset(20)
              make.size.equalTo($size(15, 15))
            }
          },
          {
            type: 'label',
            props: {
              id: 'writing-label',
              text:
                '写作 ' + userInfo.articles_word_count.toLocaleString() + ' 字',
              font: $font(12),
              color: $color('#ffffff')
            },
            layout: function(make, view) {
              make.top.equalTo($('achievements-label').bottom).offset(15)
              make.left.equalTo($('writing-icon').right).offset(10)
            }
          },
          {
            type: 'image',
            props: {
              id: 'lightning-icon',
              src: 'assets/lightning.png'
            },
            layout: function(make, view) {
              make.top.equalTo($('achievements-label').bottom).offset(15)
              make.left.offset(200)
              make.size.equalTo($size(15, 15))
            }
          },
          {
            type: 'label',
            props: {
              text: '获得 ' + userInfo.liked_count.toLocaleString() + ' 能量',
              font: $font(12),
              color: $color('#ffffff')
            },
            layout: function(make, view) {
              make.top.equalTo($('achievements-label').bottom).offset(15)
              make.left.equalTo($('lightning-icon').right).offset(10)
            }
          },
          {
            type: 'image',
            props: {
              id: 'eye-icon',
              src: 'assets/eye.png'
            },
            layout: function(make, view) {
              make.top.equalTo($('writing-label').bottom).offset(15)
              make.left.offset(20)
              make.size.equalTo($size(15, 15))
            }
          },
          {
            type: 'label',
            props: {
              id: 'eye-label',
              text:
                '文章被阅读 ' +
                userInfo.article_view_count.toLocaleString() +
                ' 次',
              font: $font(12),
              color: $color('#ffffff')
            },
            layout: function(make, view) {
              make.top.equalTo($('writing-label').bottom).offset(15)
              make.left.equalTo($('eye-icon').right).offset(10)
            }
          },
          {
            type: 'image',
            props: {
              id: 'user-icon',
              src: 'assets/user.png'
            },
            layout: function(make, view) {
              make.top.equalTo($('writing-label').bottom).offset(15)
              make.left.offset(200)
              make.size.equalTo($size(15, 15))
            }
          },
          {
            type: 'label',
            props: {
              text:
                '成为少数派 ' + userInfo.liked_count.toLocaleString() + ' 天',
              font: $font(12),
              color: $color('#ffffff')
            },
            layout: function(make, view) {
              make.top.equalTo($('writing-label').bottom).offset(15)
              make.left.equalTo($('user-icon').right).offset(10)
            }
          }
        ],
        layout: function(make, view) {
          make.top.equalTo($('bio').bottom).offset(15)
          make.left.right.inset(10)
          make.bottom.equalTo(view.super).inset(10)
        }
      }
    ]
  })
}

module.exports = {
  renderUI: renderUI
}
