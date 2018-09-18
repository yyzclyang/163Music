﻿var http = require('http');
var fs = require('fs');
var url = require('url');
var port = process.argv[2];
var qiniu = require('qiniu');

if (!port) {
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？');
  process.exit(1);
}

var server = http.createServer(function(request, response) {
  var parsedUrl = url.parse(request.url, true);
  var pathWithQuery = request.url;
  var queryString = '';
  if (pathWithQuery.indexOf('?') >= 0) {
    queryString = pathWithQuery.substring(pathWithQuery.indexOf('?'));
  }
  var path = parsedUrl.pathname;
  var query = parsedUrl.query;
  var method = request.method;

  /******** 从这里开始看，上面不要看 ************/

  console.log('HTTP 路径为\n' + path);
  if (path === '/uptoken') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/json; charset=utf-8');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.removeHeader('Date');

    var qiniuConfig = fs.readFileSync('./qiniu-config.json');
    qiniuConfig = JSON.parse(qiniuConfig);

    let { accessKey, secretKey } = qiniuConfig;
    var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    var options = {
      scope: 'net-music'
    };
    var putPolicy = new qiniu.rs.PutPolicy(options);
    var uploadToken = putPolicy.uploadToken(mac);

    response.write(`{
      "uptoken":"${uploadToken}"
    }`);
    response.end();
  } else {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.write(`{
      fail: "找不到对应的路径"
    }`);
    response.end();
  }
});

server.listen(port);
console.log(
  '监听 ' +
    port +
    ' 成功\n请打开 http://localhost:' +
    port +
    '/  进行下一步操作'
);
