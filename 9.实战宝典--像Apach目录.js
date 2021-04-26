var http = require('http')
var fs = require('fs')
var server = http.createServer()
var wwwDir = 'D:/juzi/www'
server.on('request', function(req, res) {
    var url = req.url
    fs.readFile('../template.html', function(err, data) {
        if (err) {
            return res.end('404 Not Found.')
        }
        fs.readdir(wwwDir, function(err, files) {
            if (err) {
                return res.end('Can not find www dir.')
            }
            var content = ''
            files.forEach(function(item) {
                content += `
          <tr>
            <td data-value="juzi/"><a href="/D:/Movie/www/apple/">${item}/</a></td>
            <td class="detailsColumn" data-value="0"></td>
            <td class="detailsColumn" data-value="1509589967">2017/11/2 上午10:32:47</td>
          </tr>
        `
            })
            data = data.toString()
            data = data.replace('~_~', content)
            res.end(data)
        })
    })
})
server.listen(3000, function() {
    console.log('running...')
})