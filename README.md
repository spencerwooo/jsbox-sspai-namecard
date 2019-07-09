<div align="center">
<img src="assets/sspai.png" alt="sspai" width="256px"/>
</div>

# 少数派名片 for JSBox

> 少数派作者名片 | 一个 JSBox 小组件

**推荐阅读：**[新版少数派网站的作者成就墙好好看啊，于是我用它写了一个 JSBox 小插件](https://beta.sspai.com/post/55562)

## Screenshots

### Interface 界面

![](https://i.loli.net/2019/07/09/5d23e6a1e772a64161.jpg)

按照新版少数派 API，显示了少数派作者：

- 用户名、头像
- 关注与关注者
- 获得勋章
- 用户简介
- 以及获得成就

### Badges 勋章墙

![](https://i.loli.net/2019/07/09/5d23e6d765fe096224.png)

### Animations 动画

<div align="center">
<img src="https://i.loli.net/2019/07/09/5d23e6f3e98cd77813.gif" width="600" alt="demo gif"/>
</div>

## 安装

顾名思义，你需要先在 iOS 上购买 JSBox。

然后，用 Safari 浏览器打开：[Namecard for sspai 的安装链接](https://xteko.com/redir?name=Namecard%20for%20sspai&url=https://github.com/spencerwooo/jsbox-sspai-namecard/releases/download/v0.1.0/Namecard-for-sspai.box) 来安装脚本。

## 使用

> 少数派主站在更新迭代，最近 API 可能有频繁变化，请大家如果发现脚本失效或其他问题及时给我提 issue。也请大家密切关注发布页：[jsbox-sspai-namecard/releases](https://github.com/spencerwooo/jsbox-sspai-namecard/releases)，新版脚本我会及时发布在这里。

查看脚本源码，找到目录下的 `main.js`，将第八行：

```javascript
var userId = 'ardazhlq'
```

后面的数字替换为你的少数派用户 ID，通常在你的少数派个人主页的链接里面就可以找到，比如 `https://beta.sspai.com/u/ardazhlq/updates` 里面的 `ardazhlq` 就是我的少数派用户 ID。

推荐将脚本设置为通知中心小组件，以 Today Widget（小组件）的形式使用。

推荐将 Today Widget（小组件）的高度设置为 240。

## 免责

**少数派作者名片 for JSBox** 和少数派官方无关，只作为 JSBox 中的展示作者信息的途径。

---

📟 **Namecard for sspai** ©Spencer Woo. Released under the MIT License.

Authored and maintained by Spencer Woo.

[@Blog](https://spencerwoo.com/) · [ⒿJike](https://web.okjike.com/user/4DDA0425-FB41-4188-89E4-952CA15E3C5E/post) · [@GitHub](https://github.com/spencerwooo)
