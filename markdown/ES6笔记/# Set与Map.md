# Set与Map

## Set
	类似于数组，但是没有重复元素，实现了iterator接口可以用...与for...of
	let s = new Set([]);//typeof s Object类型
	
### 属性和方法
	元素个数 .size
	添加元素 .add('元素')
	删除元素 .delete('元素')
	检查     .has('元素')
	清空     .clear()

### 作用
	1.数组去重
	let arr = [1, 2, 3, 2, 2];
	let result = [...new Set(arr)];
	
	2.交集
	let arr2 = [2, 3, 3];
	let result = [...new Set(arr)].filter(item =>{
		new Set(arr2).has(item);
	})
	
	3.并集
	let union = [new Set([...arr,...arr2])];
	
	4.差集
	let diff = let result = [...new Set(arr)].filter(item =>{
		!(new Set)(arr2).has(item);
	})
	
	
## Map
类似于对象，是键值对的集合，实现了iterator接口可以用...与for...of
用for...of输出的是一个个的数组[key,value]
let m = new Map();

### 属性和方法
	添加元素 .set(key,value)
	元素个数 .size
	删除元素 .delete(key)
	获取元素 .get(key)
	清空元素 .clear()
