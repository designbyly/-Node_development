### *Express 这个框架中，默认不支持 Session 和 Cookie*

*使用第三方中间件：express-session 来解决*

1. npm install express-session

2. 配置 (一定要在 app.use(router) 之前)

3. 使用

-   当把这个插件配置好之后，我们就可以通过 req.session 来发访问和设置 Session 成员了
-   添加 Session 数据：req.session.foo = 'bar'
-   访问 Session 数据：req.session.foo

```
app.use(session({
  secret: 'juzi',
  resave: false,
  saveUninitialized: false // 钥匙
}))
```

## 自动化测试工具Selenium

1. http://www.selenium.org.cn/
2. npm install selenium-webdriver
3. 注意浏览器版本和工具的一致性
4. 注意浏览器和版本工具的匹配性

![1611628403839](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1611628403839.png)

![1611628983138](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1611628983138.png)

## Selenium的基本使用

1. 根据平台下载需要的webdriver
2. 项目中安装selenium-webdriver包
3. 根据官方文档写demo

## 流程

1. npm  init -y  初始化文档
2. npm i selenium-webdriver    安装包
3. 修改by.id(‘kw’),sendKeys的内容

## 反爬虫机制

爬取次数的增加会出现操作频繁请稍后再试的问题

1. 检查IP地址的请求频率
2. 检查请求头

解决方案：大量动态IP代理

## seleniumAPI

1. ### 核心对象

   Builder             用于构建WebDriver对象的构造器

   WebDriver

   WebElement

2. ### 辅助对象

   By

   Key



