# Promise

语法上来说是一个构造函数，可以 用来封装一个异步操作返回成功或者失败的结果

支持链式调用，解决回掉地狱

实例化Promise对象
		const p = new Promise(function(resolve, reject){
		
		})

## 调用then()方法返回的结果是 Promise 对象，对象的状态由回调函数的执行结果决定
 ### 如果回调函数中的返回结果是非 Promise 对象，状态为成功，返回的值为对象的成功的值
 ### 如果回调函数中的返回结果是 Promise 对象，由返回的Promise 对象的状态决定，返回的值为Promise对象的值
 ### 抛出错误 状态则是失败
 
 