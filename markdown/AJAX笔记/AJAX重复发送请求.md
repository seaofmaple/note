# AJAX重复发送请求

通过设置一个标识变量来实现

```
let xhr = null；
//创建一个标识变量
let isSending = false;
//点击发送按钮
btn.onclick = function(){
//判断标识变量
if(isSending){
xhr.abort();
}
xhr = new XMLHttpRequest();
//此时请求已经发送改变标识变量
isSending = true;
xhr.open('GET','http://127.0.0.1:8000/send');
xhr.send();
xhr.onreadystatechange = function(){
if(xhr.readystate === 4){
//修改标识变量
isSending = false;
}
}
}

```

注意isSending = false;这个代码不能写在加了状态判断里面，一旦写了则不能改变isSending,因为请求已经成功了