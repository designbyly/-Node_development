var fs = require('fs')
fs.readFile('./data/橘子.txt', function(error, data) {
    if (error) {
        console.log('读取文件失败了')
    } else {
        console.log(data.toString())
    }
})