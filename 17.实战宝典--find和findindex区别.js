// EcmaScript 6 对数组新增了很多方法
//    find
//    findIndex

// find 接收一个方法作为参数，方法内部返回一个条件
// find 会遍历所有的元素，执行你给定的带有条件返回值的函数
var users = [
    { id: 1, name: '张三' },
    { id: 2, name: '张三' },
    { id: 3, name: '张三' },
    { id: 4, name: '张三' }
]
Array.prototype.myFind = function(conditionFunc) {
    for (var i = 0; i < this.length; i++) {
        if (conditionFunc(this[i], i)) {
            return this[i]
        }
    }
}

var ret = users.myFind(function(item, index) {
    return item.id === 2
})
console.log(ret)