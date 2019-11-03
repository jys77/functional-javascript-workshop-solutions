function getShortMessage(messages){
    let filtered = messages.filter( msg => {
        if(msg.message && msg.message.length < 50) return true
    })

    return filtered.map( msg => {
        return msg.message;
    })
}

module.exports = getShortMessage