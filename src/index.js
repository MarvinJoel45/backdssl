const express = require('express');
require('dotenv').config();
const userController = require('./controllers/userController');
const rolController = require('./controllers/rolController');

const app = express();
app.use(express.json());

app.use('/api/users', userController);
app.use('/api/roles', rolController);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Este programa esta corriendo en: http://localhost:${port}`);
})