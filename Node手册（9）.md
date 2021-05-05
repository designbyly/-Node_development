## 异步操作需要保持一定的执行顺序

回调函数的嵌套

```
const fs = require('fs');
fs.stat('./juzi.js', (err, stats) => {
    if (err) {
        console.log('文件不存在');
    } else {
        fs.unlink('./juzi.js'), (err) => {
            console.log(err);
        }
    }
})
```

## promise

抽象异步处理对象以及对其进行各种操作的组件，基于并列 / 并行处理设计的一种语言

大量的异步操作，如果需要顺序执行，通过回调函数执行   回调地狱

### promise解决回调地狱

1. 封装promise函数
2. 根据顺序，形成链式调用
3. 捕获错误

## asyc/awiat（es7）

## 蓝鸟。。。

## 链式调用

1. 一组链式调用中只需要一个catch

1. 终止链式调用执行

   抛出一个错误   throw  new Error（‘手动终止’）

图片上传：npm  install  multer