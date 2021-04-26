var fs = require('fs')
fs.writeFile('./data/橘子1.txt', '大家好，给大家介绍一下，我是Node.js', function(error) {
    if (error) {
        console.log('写入失败')
    } else {
        console.log('写入成功了')
    }
})