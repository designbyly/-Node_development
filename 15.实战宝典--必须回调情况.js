function add(x, y, callback) {
    console.log(1)
    setTimeout(function() {
        var ret = x + y
        callback(ret)
    }, 1000)
}

add(10, 20, function(ret) {
    console.log(ret)
})