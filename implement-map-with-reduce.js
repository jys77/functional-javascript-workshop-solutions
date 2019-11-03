module.exports = function arrayMap(arr, fn) {
    let result = []
    arr.reduce(function(prev, curr, idx, arr){
        result.push(fn(curr))
    }, null)
    return result
}