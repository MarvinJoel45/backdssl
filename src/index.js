const express = require('express');
const userController = require('./controllers/userController');

require('dotenv').config();
const app = express();
app.use(express.json);
app.use('/api/users', userController);
const port = 3000;

app.get('/', (req,res) => {
    res.send("<h1>Hola mundo</h1>");
})

app.listen(port, () => {
    console.log(`Este programa esta corriendo en el puerto: ${port}`);
})