# 定型数组(Typed Array)

定值数组是一种用于处理数值型数据的专用数组，不是所有类型

支持存储的类型
有符号的8位整数（int8）· 无符号的8位整数（uint8）· 有符号的16位整数（int16）· 无符号的16位整数（uint16）· 有符号的32位整数（int32）· 无符号的32位整数（uint32）· 32位浮点数（float32）· 64位浮点数（float64）

## 注意可以通过length属性来修改普通数组的长度，但是不能通过它来修改定型数组的长度，定型数组的长度是一个定值，不能修改，一旦修改会报错

set()方法将其他数组复制到已有的定型数组，subarray()提取已有定型数组的一部分作为一个新的定型数组。但是定型数组没有concat(),pop(),push(),shift(),unshift(),splice()方法
set()方法接受两个参数：一个是数组（定型数组或普通数组都支持）；一个是可选的偏移量，表示开始插入数据的位置，如果什么都不传，默认的偏移量为0

# 数组缓冲区

		let buffer = new ArrayBuffer(20);//建立一个数组缓冲区
		console.log(buffer.byteLength);//通过byteLength返回数组缓冲区的比特数量

可以通过slice()方法来分割一个数组缓冲区创建一个新的缓存区

		let buffer = new ArrayBuffer(20);
        console.log(buffer.byteLength);//20
        let buffer2 = buffer.slice(4,6);
        console.log(buffer.byteLength);//20
        console.log(buffer2.byteLength);//2
注意：数组缓冲区包含的实际字节数量在创建时就已确定，可以修改缓冲区内的数据，但是不能改变缓冲区的尺寸大小。

# 通过视图操作缓冲区（DataView）

数组缓冲区是内存中的一段地址，视图是用来操作内存的接口
要使用DataView，首先要创建一个ArrayBuffer实例，然后用这个实例来创建新的DataView
构造函数DataView有三个参数第一个缓冲区的大小，第二个缓冲区的偏移量，第三给选取的缓冲区的比特数量

获取视图信息
通过
	.buffer 视图绑定的缓冲区
	.byteOffset 视图DataView构造函数的第二个参数 默认为0只有传入参数是2才有值
	.byteLength DataView构造函数的第三个参数 默认是缓冲区的byteLengt

# 读入和写入数据

通过get加上数据类型来读数据
通过set加上数据类型来写数据

例如	getInt8(byteOffset, littleEndian)　读取位于byteOffset后的int8类型数据。

get方法接受两个参数：读取数据时偏移的字节数量；和一个可选的布尔值，表示是否按照小端序进行读取（小端序是指最低有效字节位于字节0的字节顺序）。set方法接受三个参数：写入数据时偏移的比特数量；写入的值；和一个可选的布尔值，表示是否按照小端序格式存储。