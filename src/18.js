let express = require('express');

// 定义一个路由函数
function indexRouter() {
  // 返回预设的 HTML 页面
  return express.static(__dirname + '/public/index.html');
}

module.exports = indexRouter;
