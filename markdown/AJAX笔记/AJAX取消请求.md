# AJAX取消请求

借助abort方法

```
let xhr = null
//点击发送按钮
btn.onclick = function(){
xhr = new XMLHttpRequest();
xhr.open('GET','http://127.0.0.1:8000/send');
xhr.send();
}
//点击取消按钮
btn.onclick = function(){
xhr.abort();
}

```

xhr定义在两个函数以外才可以在第二个函数里面调用这个变量，否则是一个函数的内部变量