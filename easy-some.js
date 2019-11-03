function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(user => {
            return goodUsers.some(goodUser => goodUser.id === user.id)
        })
    }
}

module.exports = checkUsersValid