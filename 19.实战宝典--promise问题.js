var fs = require('fs')
var p1 = new Promise(function(resolve, reject) {
    fs.readFile('./data/juzi.txt', 'utf8', function(err, data) {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})
var p2 = new Promise(function(resolve, reject) {
    fs.readFile('./data/juzi.txt', 'utf8', function(err, data) {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})
var p3 = new Promise(function(resolve, reject) {
    fs.readFile('./data/c.txt', 'utf8', function(err, data) {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})
p1
    .then(function(data) {
        console.log(data)
        return p2
    }, function(err) {
        console.log('读取文件失败了', err)
    })
    .then(function(data) {
        console.log(data)
        return p3
    })
    .then(function(data) {
        console.log(data)
        console.log('end')
    })