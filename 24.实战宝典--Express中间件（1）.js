var express = require('express')
var app = express()
app.use(function(req, res, next) {
    console.log(1)
    next()
})
app.get('/abc', function(req, res, next) {
    console.log('abc')
    next()
})
app.get('/', function(req, res, next) {
    console.log('/')
    next()
})
app.use(function(req, res, next) {
    console.log('haha')
    next()
})
app.get('/abc', function(req, res, next) {
    console.log('abc 2')
})
app.use(function(req, res, next) {
    console.log(2)
    next()
})
app.get('/a', function(req, res, next) {
    console.log('/a')
})
app.get('/', function(req, res, next) {
    console.log('/ 2')
})
app.listen(3000, function() {
    console.log('app is running at port 3000.')
})