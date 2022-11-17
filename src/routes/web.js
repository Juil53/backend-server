const express = require('express');
const homeController = require("../controllers/homeController")

const router = express.Router();

const initWebRoutes = (app) => {
    router.get("/", homeController.getUser);
    router.post("/register", homeController.register)

    return app.use('/', router)
}

module.exports = {
    initWebRoutes
}