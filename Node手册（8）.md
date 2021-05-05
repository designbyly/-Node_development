## 爬虫

请求网站并提取数据的自动化程序

## 基本流程

1. 向指定的url发送http请求
2. 获取响应（HTML,XML,JSON。。。等数据）
3. 处理数据（解析DOM，解析JSON）
4. 将处理好的数据进行存储

用处：打码平台。。。。

## 爬取图片步骤

1. 发送http请求，获取整个网页内容
2. 通过cheerio对网页内容进行分析
3. 提取img标签的src属性
4. 使用download库进行批量图片下载

npm  install  cheerio

npm  i  download

##  socket（链接）被挂断 

## **Socket hang up 解决**方案

```javascript
const server = http.createServer((request, response) => {
    console.log('request url: ', request.url);

    if (request.url === '/timeout') {
        setTimeout(function() {
            response.end('OK!');
        }, 1000 * 60 * 3)
    }
}).listen(port);

server.setTimeout(0); // 设置超时时间
```

## 网站动态生成信息的爬虫解决方案

伪造header的方式

## 爬虫基础库的封装

1. tsc  --init
2. 修改tsconfig.json  



