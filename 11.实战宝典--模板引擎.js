var template = require('art-template')
var fs = require('fs')
fs.readFile('../sss.html', function(err, data) {
    if (err) {
        return console.log('读取文件失败了')
    }
    var ret = template.render(data.toString(), {
        name: 'juzi',
        age: 00,
        province: '山西省',
        hobbies: [
            '看电影',
            '购物',
            '吃'
        ],
        title: '个人信息'
    })

    console.log(ret)
})