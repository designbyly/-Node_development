var express = require('express')
var app = express()
app.use('/public/', express.static('./public/'))
app.use('/static/', express.static('./static/'))
app.get('/about', function(req, res) {
    console.log(req.query)
    res.send('你好，我是 Express!')
})
app.get('/said', function(req, res) {})
app.get('/', function(req, res) {
    res.send(`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
<body>
  <h1>hello Express！你好</h1>
</body>
</html>
`)
})
app.listen(3000, function() {
    console.log('app is running at port 3000.')
})