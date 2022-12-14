const express = require('express');
const bodyParser = require('body-parser')
const routes = require('./routes/web')
const db = require('./config/connectDB')
const app = express();
const cors = require('cors');

//Run env file
require('dotenv').config();

//Setup port
// const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

routes.initWebRoutes(app);

db.checkConnection()

app.listen(process.env.PORT || 8000, () => {
    console.log(`Example app listening on port: ${process.env.PORT} `)
})