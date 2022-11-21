const userServices = require('../services/userServices')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    const email = req.body.email;
    const password = String(req.body.password)

    try {
        //check email,password input exist
        if (!email || !password) {
            return res.status(500).json({
                errorCode: 1,
                message: 'Missing inputs!'
            })
        }

        const userData = await userServices.handleUserLogin(email, password)
        const accessToken = jwt.sign({ email }, process.env.JWT_KEY, { expiresIn: '1h' })
        
        if (!userData.data) {
            res.status(500).json({ message: userData.message })
        } else {
            res.status(200).json({ message: userData.message, userData, accessToken })
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    login
}