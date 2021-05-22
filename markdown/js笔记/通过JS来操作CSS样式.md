# 通过JS来操作CSS样式

##### 1.语法，元素.style.css样式名 = 样式值；这个方式可以获取和改变CSS样式，但是只能获取到内联的CSS样式，即是写在HTML代码里面的；

##### 2.元素.currentStyle.样式名,这里只有IE浏览器可以使用，其他的浏览器不支持

##### 3.window.getComoutedStyle()有两个参数，一个是要找的样式的元素，一个是一个伪元素一般是null。这个方法可以在ie8以上的ie浏览器和其他浏览器里面执行，但是在ie8里面不符合，所以在用的时候应该考虑兼容性问题在用的时候添加一个判断，即用window.getComoutedStyle判断，不能缺少window，少了会报错，因为少了就是一个变量在ie里面没有getComoutedStyle这个变量所以会报错。

##### 即function getStyle(obj, name){

##### //obj要获取的样式的元素，name获取的样式名如backgroundColor

##### if(window.getComoutedStyle){

##### getComoutedStyle(obj,null)[name]

##### }else{

##### 元素.currentStyle.样式名

##### }

##### }