# Navigator

##### Navigator.appName  代表当前浏览器的信息，通过该对象可以识别不同的浏览器，由于历史原因Navigator对象中的大部分属性已经不能帮助我们识别浏览器了

##### Navigator.userAgent 判断浏览器信息，是一个字符串，不同的浏览器有不同的userAgent

##### IE11:Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; rv:11.0) like Gecko

###### IE10:Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E)

##### IE9:Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E)

##### IE8:Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E)

##### Chrome:Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; rv:11.0) like Gecko **Chrome**/86.0.4240.183 Safari/537.36

##### Microsoft Edge:Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36 Edg/86.0.622.63

如果通过userAgent找不到浏览器的信息可以通过某一个浏览器的一些独有的属性来判断

比如 IE里面的ActiveXObject但是IE11已经不可以用了

```
("ActiveXObject" in window)
```

可以找到IE11的浏览器但是找不到Microsoft Edge

