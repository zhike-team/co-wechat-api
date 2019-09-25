Wechat API(ES6版)
===========
微信公共平台API。

**此项目 Fork 自[原作者项目](https://github.com/node-webot/co-wechat-api)，原因是微信公众平台添加了一些新的接口，找其他包要考虑历史兼容性问题，于是决定在此包上扩展，由于仅针对内部使用，所以可能不够完善，将来也不会合回主项目**

## 功能列表
- 发送客服消息（文本、图片、语音、视频、音乐、图文）
- 菜单操作（查询、创建、删除、个性化菜单）
- 二维码（创建临时、永久二维码，查看二维码URL）
- 分组操作（查询、创建、修改、移动用户到分组）
- 用户信息（查询用户基本信息、获取关注者列表）
- 媒体文件（上传、获取）
- 群发消息（文本、图片、语音、视频、图文）
- 客服记录（查询客服记录，查看客服、查看在线客服）
- 群发消息
- 公众号支付（发货通知、订单查询）
- 微信小店（商品管理、库存管理、邮费模板管理、分组管理、货架管理、订单管理、功能接口）
- 模版消息
- 网址缩短
- 语义查询
- 数据分析
- JSSDK服务端支持
- 素材管理
- 摇一摇周边

详细参见[API文档](http://doxmate.cool/node-webot/co-wechat-api/api.html)

## Installation

```sh
$ npm install co-wechat-api
```

## Usage

```js
var WechatAPI = require('co-wechat-api');

async function() {
  var api = new WechatAPI(appid, appsecret);
  var result = await api.updateRemark('open_id', 'remarked');
}
```

### 多进程
当多进程时，token需要全局维护，以下为保存token的接口：

```js
var api = new API('appid', 'secret', async function () {
  // 传入一个获取全局token的方法
  var txt = await fs.readFile('access_token.txt', 'utf8');
  return JSON.parse(txt);
}, async function (token) {
  // 请将token存储到全局，跨进程、跨机器级别的全局，比如写到数据库、redis等
  // 这样才能在cluster模式及多机情况下使用，以下为写入到文件的示例
  await fs.writeFile('access_token.txt', JSON.stringify(token));
});
```

## 详细API
原始API文档请参见：[消息接口指南](http://mp.weixin.qq.com/wiki/index.php?title=消息接口指南)。
## License
The MIT license.
