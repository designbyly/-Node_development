## NODE手册

### node中的模块系统

exports 是一个对象，我们可以通过多次为这个对象添加成员实现对外导出多个内部成员。

### 模块原理

1. 在 Node 中，每个模块内部都有一个自己的 module 对象。
2. 该 module 对象中，有一个成员叫：exports 也是一个对象。
3. 如果你需要对外导出成员，只需要把导出的成员挂载到 module.exports 中。
4. **注意：**当一个模块需要导出单个成员的时候，直接给 exports 赋值是不管用的。

### 模块断开问题

1. 给 exports 赋值会断开和 module.exports 之间的引用
2. 同理，给 module.exports 重新赋值也会断开

### exports !== module.exports问题

- 最终 return 的是 module.exports
- 所以无论你 exports 中的成员是什么都没用

### 分不清两者问题

1. 实在分不清楚 exports 和 module.exports
2. 你可以选择忘记 exports
3. 而只使用 module.exports 也没问题

`module.exports.xxx = xxx`

`moudle.exports = {}`

### require优先从缓存加载

目的是为了避免重复加载，提高模块加载效率

### 核心模块的本质

1. 核心模块的本质也是文件
2. 核心模块文件已经被编译到了二进制文件中，只需要按照名字来加载就可以

`require('fs')`

`require('http')`

### 非路径形式的模块标识

#### 路径形式的模块：

1.  ./ 当前目录，不可省略
2.  ../ 上一级目录，不可省略
3.  /xxx 几乎不用
4.  d:/a/foo.js 几乎不用

####  首位的 / 在这里表示的是当前文件模块所属磁盘根路径

 .js 后缀名可以省略

`require('./foo.js')`

### 第三方模块

1. 凡是第三方模块都必须通过 npm 来下载
2. 使用的时候就可以通过 require('包名') 的方式来进行加载才可以使用
3. 不可能有任何一个第三方包和核心模块的名字是一样的

### 既不是核心模块、也不是路径形式的模块

  **1.先找到当前文件所处目录中的 node_modules 目录，  main 属性中就记录了 art-template 的入口模块**

-   node_modules/art-template
-   node_modules/art-template/package.json 文件
-   node_modules/art-template/package.json 文件中的 main 属性

 **2.然后加载使用这个第三方包，实际上最终加载的还是文件**

1.   如果 package.json 文件不存在或者 main 指定的入口模块是也没有，则 node 会自动找该目录下的 index.js，也就是说 index.js 会作为一个默认备选项。
2.   如果以上所有任何一个条件都不成立，则会进入上一级目录中的 node_modules 目录查找
3.   如果上一级还没有，则继续往上上一级查找
4.   。。。
5.   如果直到当前磁盘根目录还找不到，最后报错：can not find module xxx

### 只放一个原则

我们一个项目有且只有一个 node_modules，放在项目根目录中，这样的话项目中所有的子目录中的代码都可以加载到第三方包，不会出现有多个 node_modules。

### 模块查找机制

1.   优先从缓存加载
2.   核心模块
3.   路径形式的文件模块
4.   第三方模块
5.    `node_modules/art-template/`
6.    `node_modules/art-template/package.json`
7.    `node_modules/art-template/package.json main`
8.    index.js 备选项
9.    进入上一级目录找 node_modules

   