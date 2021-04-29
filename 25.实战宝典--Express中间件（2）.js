var express = require('express')
var fs = require('fs')
var app = express()
app.get('/', function(req, res, next) {
    fs.readFile('.d/sa./d.sa/.dsa', function(err, data) {
        if (err) {
            next(err)
        }
    })
})
app.get('/', function(req, res, next) {
    console.log('/ 2')
})
app.get('/a', function(req, res, next) {
    fs.readFile('./abc', function(err, data) {
        if (err) {
            next(err)
        }
    })
})
app.use(function(req, res, next) {
    res.send('404')
})
app.use(function(err, req, res, next) {
    res.status(500).send(err.message)
})
app.listen(3000, function() {
    console.log('app is running at port 3000.')
})