# ES6

## let关键字：

声明格式：let a,b.....;

### 特性：

1.变量不能重复声明

2.块级作用域 比如if while

即变量只在作用域里面有效，而在外面是无效的

3.不存在变量提升

4.不影响作用域链

## const关键字：

定义的是一个值不能修改的量即是一个常量

### 注意：

1.一定要赋初始值否则会报错

2.一般使用大写即const A = 1;

3.块作用域

4.对于数组和对象的元素的修改，不算作对常量的修改，不会报错

```
const TEAM = ['uzi'];
TEAM.push('mlxg');
```

## 解构赋值：

ES6允许按照一定模式从数组和对象中提取值对变量进行赋值即解构赋值

1.数组的解构

```
const F4 = ['小沈阳','刘能'];
let ['xiao','liu'] = F4;
consple.log(xiao);//'小沈阳'
consple.log(liu);//'刘能'
```

2.对象的解构

```
const zhao = {
	name: '赵本山',
	age： '不祥',
	sayName: function(){
		console.log(this.name);
	}
}
let {name, age, sayNsme} = zhao;//'赵本山', '不祥',function(){console.log(this.name);
console.log(name);
console.log(age);
console.log(setName);
setName('Aim');
console.log(name);//'Tom'此时this为window,无法为name赋值
```



