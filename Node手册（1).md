## NODE手册

1. Node中，采用EcmaScript进行编码，没有 BOM、DOM，和浏览器中的 JavaScript 不一样。
2. 浏览器中的JavaScript没有文件操作的能力,但是 Node 中的JavaScript 具有文件操作的能力

### 文件系统

- fs 是 file-system 的简写，文件系统的意思，想要进行文件操作，就必须引入 fs 这个核心模块
- 例如：fs.readFile 就是用来读取文件的

### 读取文件步骤

1. 使用 require 方法加载 fs 核心模块
2. 读取文件，通过 toString 方法把其转为我们能认识的字符

​         （参数1，参数2）

​            成功：    data 数据  ，error null

​            失败：    data undefined没有数据， error 错误对象

### 写入文件步骤

1. 使用 require 方法加载 fs 核心模块

2. 写入文件。

   （参数1，参数2，参数3）

     成功：    文件写入成功 ，error null

     失败：    文件写入失败， error 错误对象

### 构建Web服务器

 http模块创建编写服务器

### 创建服务器步骤

1. 加载http核心模块
2. 使用 http.createServer() 方法创建一个 Web 服务器
3. 绑定端口号，启动服务器

### 服务器的作用

1.   提供服务：对数据的服务
2.   发请求
3.   接收请求
4.   处理请求
5.   给个反馈（发送响应）
6.   注册 request 请求事件

### 核心模块

- os：用来获取机器信息的
- path：用来操作路径的
- cpus：获取当前机器的CPU信息
- totalmem：memory内存
- extname extension name：获取一个路径中的扩展名部分

### ip地址和端口号

1. ip 地址用来定位计算机
2. 端口号用来定位具体的应用程序
3. 所有需要联网通信的应用程序都会占用一个端口号

### HTTP协议数据类型

在 http 协议中，Content-Type 就是用来告知对方我给你发送的数据内容是什么类型

```
 res.setHeader('Content-Type', 'text/plain; charset=utf-8')
```

###  Content-Type类型的查看方法

http://tool.oschina.net/commons