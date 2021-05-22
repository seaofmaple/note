HTTP



response头:可以用Content-type指定传递的数据类型以及编码方式 

text/plain：普通文本

text/html：html文件

https://www.oschina.net/可以查看一些http的文档

建立一个简单的HTTP服务

```
1.引入http模块
let http =  require('http')

2.加载http核心模块
let server = http.createServer()

3.服务器工作：
	提供服务
	发请求
	接收请求
	处理请求
	发送响应
	注册request请求事件
	当客户端请求过来就会自动触发服务器的request事件，然后执行第二个参数回调处理
server.on('request', function(request, reponse) {
//request 请求对象
	获取客户端的一些信息比如：请求路径request.url
	
//reponse  对象有一个方法write可以用来给客户端发送响应数据
//write可以有多个但是最后要有一个end来表示结束 
推荐用end('内容')发送响应数据
})	
4. 绑定端口号，启动服务器
server.listen('端口号',function() {

})

```

