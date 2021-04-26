## NODE手册

### 分号问题

采用了无分号的代码风格的时候，只需要注意以下情况就不会有代码报错问题了：

  当一行代码是以：

1. ​    (
2. ​    [
3. ​    `

  开头的时候，则在前面补上一个分号用以避免一些语法解析错误。

### 模板字符串

` 是 EcmaScript 6 中新增的一种字符串包裹方式，叫做：模板字符串

### 如何得到 wwwDir 目录列表中的文件名和目录名

​    fs.readdir

### 如何将得到的文件名和目录名替换到 template.html 中

1. ​     在 template.html 中需要替换的位置预留一个特殊的标记（就像以前使用模板引擎的标记一样）
2. ​     根据 files 生成需要的 HTML 内容

### 模板引擎

#### 使用方法

1.   npm install art-template
2.   该命令在哪执行就会把包下载到哪里。默认会下载到 node_modules 目录中
3.   node_modules 不要改，也不支持改。
4. 在需要使用的文件模块中加载 art-template
5. 只需要使用 require 方法加载就可以了：require('art-template')
6. 查文档，使用模板引擎的 API