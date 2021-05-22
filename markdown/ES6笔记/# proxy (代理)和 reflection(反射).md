# proxy (代理)和 reflection(反射)

用Proxy构造函数创建一个代理需要两个参数：目标(target)和处理程序(handler),其中处理程序是一个或多个陷阱的对象 

用set陷阱验证属性
接受4个参数
		trapTarget 用于接收属性（代理的目标）的对象
		key 要写入的属性键(字符串或Symbol类型)
		value 被写入属性的值
		receiver 操作发生的对象(通常是代理)
		Reflect.set()是set陷阱对应的反射方式，和默认特性，和set代理一样接收4个参数
		
	set代理陷阱可以拦截写入属性的操作，get代理陷阱可以拦截读取属性的操作。

用get陷阱验证对象结构
接收3个参数
		trapTarget 用于读取属性（代理的目标）的对象
		key 要读取的属性键(字符串或Symbol类型)
		receiver 操作发生的对象(通常是代理)
	注意get陷阱不写入值

用has陷阱隐藏属性
接收2个参数
		trapTarget 读取属性（代理的目标）的对象
		key 要检查的属性键(字符串或Symbol类型)

用deleteProperty陷阱防止删除属性
接收2个参数
		trapTarget 用于删除属性（代理的目标）的对象
		key 要删除的属性键(字符串或Symbol类型)