var http = require('http')
var url = require('url')
var cookie = require('./middlewares/cookie')
var postBody = require('./middlewares/post-body')
var query = require('./middlewares/query')
var session = require('./middlewares/session')
var server = http.createServer(function(req, res) {
    console.log(req.query)
    console.log(req.body)
    console.log(req.cookies)
    console.log(req.session)
    query(req, res)
    postBody(req, res)
    cookie(req, res)
    session(req, res)
    res.render = function() {

    }
    if (req.url === 'xxx') {} else if (url === 'xx') {}
})
server.listen(3000, function() {
    console.log('3000. running...')
})