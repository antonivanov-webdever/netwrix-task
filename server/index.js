require('dotenv').config()
const express = require('express');
const sequelize = require('./db/index');
const models = require('./models/models')
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middleware/errorHandling')

const PORT = process.env.PORT || 8080
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', router);
app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {console.log(`Server is start on port: ${PORT}`)})
    } catch (e) {
        console.log(e)
    }
}

start();