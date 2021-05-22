# Vue

Vue是一个渐进式的框架，意味着可以将Vue作为应用的一部分嵌入其中，或者如果你希望将
将更多的业务逻辑使用Vue实现

创建一个Vue实例(声明式编程：数据和界面分离)
				const app = new Vue({
				el：''  //用于挂载要管理的元素,类型为String或者HTMLElement
				data: { //定义数据,类型为Object或者Function(组件中data必须是一个函					数)
			}，
			computed:{//计算属性
			定义函数，但是当成属性来使用
			},
			methods:{//定义函数
				
			}
		})
	## 插值语法
	v-for = "":遍历
	v-on: 事件(如click)= "事件发生后的处理" 监听事件 == @click
	v-on可以有修饰符：
	.stop 阻止事件冒泡
	.prevent 阻止默认事件
	.{keyCode(键盘代码) | keyAlias(键盘简写 )}
	.once 只触发一次
	
	
	v-once: 使得被其定义的组件或者元素只被渲染一次，即使数据发生变化也不会再改变
	v-html: 当data里面大的数据定义的是一个html的标签时让vue知道他是html标签
	v-text="变量名": 类似于{{变量名}} //一般不用，会覆盖掉原本html标签里面的所有内					容
	v-pre: 让html标签里面的东西原封不动的显示而不去解析
	v-cloak: clock(斗篷) 隐藏一个组件或者标签
	
	# v-bind
	 ## 绑定属性
	v-bind: 可以用在标签的内部可以个如a标签之类的src属性使用变量名赋值路径
	比如v-bind:src="aHref"
	v-bind语法糖 :
	语法糖写法 如 :src="aHref"
	### 对象语法
		v-bind动态绑定class属性，:class="{类名:Boolean,类					  		  名:boolean....}",boolean为true的时候类名加上反之则不加如果对象过于复杂可以放在methods里面用函数返回值代替或者computed  
		
	### 数组语法
		['类名','类名'](用得少)
	 ## 动态绑定style
	 :style="{属性名:属性值}"(对象语法)
	 :style="[对象]"(数组语法)
	 
	 # 计算属性
	 01 基本使用
	 new Vue({computed:{})
	 实际上的计算属性有set和get方法即：
	 new Vue({computed:{
	 	属性名:{
	 	get:function{},
	 	set:function{}
	 	}
	 })//但是一般情况下我们不用set方法所以一般不用所以一般写成new Vue({computed:{属性名:function(){}})


​	 

​	