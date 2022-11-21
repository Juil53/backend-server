const express = require('express');
const auth = require('../middleware/check-auth')
const homeController = require("../controllers/homeController")
const userController = require("../controllers/userController")

const router = express.Router();

const initWebRoutes = (app) => {
    router.get("/", auth.checkAuth, homeController.getUser)
    router.post("/register", homeController.register)
    router.post("/login", userController.login)


    return app.use('/', router)
}

module.exports = {
    initWebRoutes
}