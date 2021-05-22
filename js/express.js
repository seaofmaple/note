//1.引入express
/*jshint esversion: 6 */
const express = require('express');
//2。创建应用对象
const app = express();
//3.创建路由规则
//require是对请求报文的封装
//response是对响应报文的封装
app.get('/',(require , response) => {
//设置响应
response.send('hello AJAX');
});
//4.监听 端口启动服务
app.listen(8000, () => {
    console.log('服务已经启动了.....');
});