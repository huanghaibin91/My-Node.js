var http = require('http'); // node自带的HTTP模块

http.createServer(function (request, response) {
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain，此格式原样显示
    response.writeHead(200, {'Content-Type': 'text/html'});
    // 发送响应数据 "Hello World"
    response.end('<h1>Hello World\n</h1>');
}).listen(3000);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:3000/');