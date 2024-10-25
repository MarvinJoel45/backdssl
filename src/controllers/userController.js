const express = require('express');
const userService = require('../services/userService');
const router = express.Router();

router.get('/', async(req, res) => {
    const users = await userService.getAllUsers();
    res.json(users);
});

module.exports = router;
