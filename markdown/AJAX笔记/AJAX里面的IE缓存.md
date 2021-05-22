# AJAX里面的IE缓存

在XMLHttpRequest()对象的open的第二个参数路径里面加上一个Date.now()用来表示不同的请求，而不敢会去使用缓存里面的AJAX请求

```
const xhr = new XMLHttpRequest();
xhr.open('get', 'http://127.0.0.1:8000?t+' + Date.now());
```

