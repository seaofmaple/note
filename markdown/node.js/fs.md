### fs即flie-system的简写就是文件系统

``` 
let fs = require('fs')

fs.readFile('路径','回调函数')
//成功 data 数据(二进制) error null
//失败 data null error 错误对象
```

```
let fs = require('fs')

fs.writeFile('路径', '内容', '回调函数')
```

