const db = require('../models/index')
const bcrypt = require('bcrypt')

const handleUserLogin = async (email, password) => {
    const userData = {}
    const user = await checkUserEmail(email);

    if (!user) {
        return false
    } else {
        // Load hash from your password DB, compare input password
        const match = await bcrypt.compare(password, user.password);
        
        //Not match
        if (!match) {
            userData.data = null,
                userData.message = "Wrong password!"
        } else {
            //Delete password before return to client
            delete user.password
            userData.data = user
            userData.message = "Login success!"
        }

        return userData
    }
}
// 1. check exist userEmail
const checkUserEmail = async (userEmail) => {
    const user = await db.User.findOne({
        where: { email: userEmail },
        raw: true
    })

    if (user) {
        return user
    } else {
        return false
    }
}


module.exports = {
    handleUserLogin,
    checkUserEmail
}