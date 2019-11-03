function contWords(inputWords) {
    return inputWords.reduce((dict, current) => {
        if(!dict[current]) {
            dict[current] =1
        } else {
            dict[current] ++
        }
        return dict
    },{})
}

module.exports = contWords