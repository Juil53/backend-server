const db = require('../models/index')
const CRUD = require('../services/crudServices')

const getUser = async (req, res) => {
    try {
        const users = await CRUD.getAllUser()
        res.status(200).json({ data: users })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong!',error })
    }
}

const register = async (req, res) => {
    try {
        const user = await CRUD.createNewUser(req.body)
        res.status(200).json({ message: 'register successfully!', data: user })
    } catch (error) {
        res.status(500).json({ message: 'register failed!', error })
    }
}

module.exports = {
    getUser,
    register
}