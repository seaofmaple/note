# DOM查询

##### (1)parentNode，返回当前元素的父节点

##### (2)previousSibling，返回当前元素的前一个兄弟节点（也会获取空白的文本）

##### (3)previousElementSibling获取前一个兄弟元素

##### (4)nextSibling，返回当前元素的下一个节点

##### (5)document.body获取body元素

##### (6)document.documentElement获取HTML，即是根标签

##### (7)document.all HTML里面的所有元素

##### (8)document.getElementsByClassName() 获取css里面的class= "";具有兼容性问题，IE8及以下不支持

##### (9)document.querySelector(),需要一个选择器的字符串作为参数，可以根据CSS选择器来查询一个元素节点对象，这个可以用来完成document.getElementsByClassName 的兼容性的缺点来查找class，注意这个方法只会返回一个唯一的一个元素，如果元素有多个，只会返回一个；

##### (10)document.querySelectorAll()，与querySelector()类似但是会把符合条件的元素封装到一个类数组里面，即使符合条件的元素只有一个也会返回一个类数组；









