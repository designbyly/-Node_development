var http = require('http')
var server = http.createServer()
server.on('request', function(req, res) {
    console.log('收到请求了，请求路径是：' + req.url)
    console.log('请求我的客户端的地址是：', req.socket.remoteAddress, req.socket.remotePort)
    var url = req.url
    if (url === '/') {
        res.end('index page')
    } else if (url === '/login') {
        res.end('login page')
    } else if (url === '/products') {
        var juzi = [{
                name: '橘子太大了',
                price: 520
            },
            {
                name: '橘子太大了',
                price: 520
            },
            {
                name: '橘子太大了',
                price: 520
            }
        ]
        res.end(JSON.stringify(juzi))
    } else {
        res.end('404 Not Found.')
    }
})
server.listen(3000, function() {
    console.log('服务器启动成功，可以访问了。。。')
})