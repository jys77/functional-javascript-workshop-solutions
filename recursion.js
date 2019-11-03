function getDependencies(tree, result) {
    var result = result || [];
    var deps = tree.dependencies || {}
    if(!tree.dependencies) return []

    Object.keys(deps).forEach((dep) => {
        var depName = dep + "@" + deps[dep].version

        if(result.indexOf(depName)===-1) result.push(depName)
        getDependencies(deps[dep],result)
    })
    return result.sort()
}

module.exports = getDependencies