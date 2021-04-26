function say() {
    console.log('hello world')
}
say();
(function() {
    console.log('hello')
})()
// TypeError: say(...) is not a function