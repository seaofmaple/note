# HTTP（hypertext transport protocol）

超文本传输协议，协议详细规定了浏览器和万维网服务器之间的通信的约定，规则

## 请求报文

请求行  GET(请求类型) / url路径/HTTP/1.1

请求头 Host:

​			 Cookie:

​			 Content-type:

​			 User-Agent:

请求空行

请求体 GET请求为空，POST 请求可以不为空

## 响应报文

响应行  HTTP协议版本 响应状态码  响应状态字符串

```
比如 HTTP1.1 200 OK
```

响应头  Content-Type

​				Content-length

​				Content-encoding (压缩方式)

响应空行

响应体<html></html>

[响应状态码]:https://baike.baidu.com/item/HTTP%E7%8A%B6%E6%80%81%E7%A0%81/5053660?fr=aladdin

