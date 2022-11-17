const db = require('../models/index')
const bcrypt = require('bcrypt')

const createNewUser = async (data) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await db.User.create({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: hashedPassword,
        phoneNumber: data.phoneNumber,
        image: data.image,
        address: data.address,
        gender: data.gender === 1 ? true : false,
        roleid: data.roleid,
    })
    return user
}

const getAllUser = async () => {
    try {
        const users = await db.User.findAll()
        return users
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createNewUser,
    getAllUser
}