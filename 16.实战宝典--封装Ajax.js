    function get(url, callback) {
        var oReq = new XMLHttpRequest()
        oReq.onload = function() {
            callback(oReq.responseText)
        }
        oReq.open("get", url, true)
        oReq.send()
    }
    get('data.json', function(data) {
        console.log(data)
    })