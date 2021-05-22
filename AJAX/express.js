//1.引入express
const express = require('express');
//2.新建express对象
const app = express();
//3.创建路由规则
app.get('/server',(require, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('hello ajax zzz');
})
//4.建立监听
app.listen('8000',()=>{
    console.log('监听建立了....');
})