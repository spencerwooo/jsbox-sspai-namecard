/**
 * 渲染 app 界面
 */

var defaultAssetPath = 'https://cdn.sspai.com/'

function getRegisteredDays(creationDay) {
  // 返回的注册日期是 unix timestamp，例子：1515163617，单位是秒
  let registerDay = new Date(creationDay * 1000)
  let today = new Date()
  let diff = Math.abs((today - registerDay) / 1000 / 60 / 60 / 24)
  return Math.floor(diff)
}

function renderUI(userInfo) {
  // Avatar animation cycles
  let cycles = 1
  // Icon tapped boolean
  let iconTapped = 0

  // Render UI elements
  $ui.render({
    props: {
      title: '少数派作者名片'
    },
    views: [
      {
        type: 'view',
        props: {
          id: 'app',
          bgcolor: $color('#F9F9F9'),
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
          id: 'background',
          src: 'assets/bg.png',
          alpha: 0.1,
          radius: 10
        },
        layout: function(make, view) {
          make.top.right.equalTo($('app'))
          make.size.equalTo($size(300, 91.5))
        }
      },
      {
        type: 'views',
        props: {
          id: 'avatar-container'
        },
        views: [
          {
            type: 'image',
            props: {
              id: 'avatar',
              src: defaultAssetPath + userInfo.avatar,
              radius: 32
            },
            layout: function(make) {
              make.size.equalTo($size(64, 64))
            },
            events: {
              tapped: function() {
                $device.taptic(1)
                $ui.animate({
                  duration: 0.4,
                  delay: 0,
                  damping: 1,
                  velocity: 0,
                  options: 0,
                  animation: function() {
                    $('avatar').rotate(Math.PI * cycles)
                    cycles = cycles + 1
                  }
                })
              }
            }
          }
        ],
        layout: function(make, view) {
          make.top.equalTo(view.super).inset(18)
          make.right.equalTo(view.super).inset(22)
          make.size.equalTo($size(64, 64))
        }
      },
      {
        type: 'image',
        props: {
          id: 'sspai-icon',
          src: 'assets/icon.png'
        },
        layout: function(make, view) {
          make.top.inset(18)
          make.left.inset(25)
          make.size.equalTo($size(25, 25))
        },
        events: {
          tapped: function() {
            $device.taptic(1)

            if (iconTapped === 0) {
              $ui.animate({
                duration: 0.4,
                animation: function() {
                  $('background').alpha = 0.9
                }
              })
              iconTapped = 1
            } else {
              $ui.animate({
                duration: 0.4,
                animation: function() {
                  $('background').alpha = 0.1
                }
              })
              iconTapped = 0
            }
          }
        }
      },
      {
        type: 'label',
        props: {
          id: 'nickname',
          text: userInfo.nickname,
          font: $font('Menlo-Bold', 20),
          color: $color('#24292E'),
          align: $align.left
        },
        layout: function(make, view) {
          make.top.equalTo(view.super).inset(18)
          make.left.equalTo(view.super).inset(60)
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
          make.left.inset(25)
          make.top.equalTo($('nickname').bottom).offset(8)
        }
      },
      {
        type: 'label',
        props: {
          id: 'bio',
          text: userInfo.bio.split('\n').join(' '),
          font: $font(12),
          color: $color('#24292E'),
          align: $align.left
        },
        layout: function(make, view) {
          make.left.inset(25)
          make.top.equalTo($('follower-stats').bottom).offset(5)
          make.width.equalTo(280)
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
              make.top.equalTo(view.super).inset(25)
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
                '成为少数派 ' +
                getRegisteredDays(userInfo.created_at).toLocaleString() +
                ' 天',
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
          make.top.equalTo($('avatar-container').bottom).offset(15)
          make.left.right.inset(10)
          make.bottom.equalTo(view.super).inset(10)
        }
      }
    ]
  })

  // 拥有勋章：
  // 1. 签约作者、专业作者、少数派成员等等
  // 最右侧 badge 距离头像 12 初始距离
  let insetMargin = 12

  if (userInfo.user_flags.length > 0) {
    let flagLabelMargin = insetMargin + userInfo.user_flags.length * 30
    // 显示勋章信息的 label
    $('app').add({
      type: 'label',
      props: {
        id: 'flags-label',
        text: 'label',
        alpha: 0,
        font: $font(14),
        color: $color('#777777')
      },
      layout: function(make, view) {
        make.top.equalTo(view.super).inset(16)
        make.left.equalTo($('nickname').right).offset(flagLabelMargin)
      }
    })

    // 勋章点击与否
    let tapped = 0

    userInfo.user_flags.forEach(flag => {
      // 在头像 avatar 左侧每隔 30 距离添加一个 badge
      $('app').add({
        type: 'image',
        props: {
          src: flag.icon
        },
        layout: function(make, view) {
          make.size.equalTo($size(18, 20))
          make.top.equalTo(view.super).inset(15)
          make.left.equalTo($('nickname').right).offset(insetMargin)
        },
        events: {
          tapped: function() {
            $device.taptic(1)

            // 显示勋章名称
            $ui.animate({
              duration: 0.4,
              delay: 0,
              damping: 0,
              velocity: 0,
              options: 0,
              animation: function() {
                if (tapped === 0) {
                  $('flags-label').text = flag.name
                  $('flags-label').alpha = 1
                  tapped = 1
                } else {
                  $('flags-label').alpha = 0
                  tapped = 0
                }
              }
            })
          }
        }
      })

      // 增加 30 的距离
      insetMargin = insetMargin + 30
    })
  }

  // Power+ User 判定
  if (userInfo.power_plus_flag === 1) {
    $('avatar-container').add({
      type: 'image',
      props: {
        src: 'assets/power-plus.png',
        radius: 8
      },
      layout: function(make) {
        make.size.equalTo($size(16, 16))
        make.bottom.equalTo($('avatar-container').bottom)
        make.right.equalTo($('avatar-container').right)
      }
    })
  }
}

module.exports = {
  renderUI: renderUI
}
