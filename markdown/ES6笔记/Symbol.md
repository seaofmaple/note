# Symbol

//创建Symbol

```
let s = Symbol();
console.log(s,typeof s)//Symbol()'Symbol' 
let s2 = Symbol('111');
let s3 = Symbol('111');
console.log(s2 === s3)//false
let s4 = Symbol.for('111');
let s5 = Symbol.for('111');
console.log(s4 === s5)//true
```

1.不能与其他数据进行运算

2.用来给对象添加属性或者方法

```
let game = {
            name: 'lol',
            up(){

            },
            down(){

            }
        }
        let methods = {
            up:Symbol(),
            down: Symbol()
        }
        game[methods.up] = function(){
            console.log('up');
        }
        game[methods.down] = function(){
            console.log("down");
        }
        //console.log(game);
        game[methods.down]();//down
```

