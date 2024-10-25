const express = require('express');
require('dotenv').config();
const userController = require('./controllers/userController');
const app = express();
app.use(express.json());

app.use('/api/users', userController);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Este programa esta corriendo en el puerto: ${port}`);
})