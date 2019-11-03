function loadUsers(userIds, load, done) {
    let users = []
    let count = 0
    userIds.forEach((id, idx) => {
        load((id, (data) => {
            users[idx] = data
            if(++count == usersId.length) return done(users)
        }))
    })
}

module.exports = loadUsers