var fs = require('fs')
fs.readFile('./data/juzi1.txt', 'utf8', function(err, data) {
    if (err) {
        throw err
    }
    console.log(data)
    fs.readFile('./data/juzi1.txt', 'utf8', function(err, data) {
        if (err) {
            throw err
        }
        console.log(data)
        fs.readFile('./data/juzi2.txt', 'utf8', function(err, data) {
            if (err) {}
            console.log(data)
        })
    })
})