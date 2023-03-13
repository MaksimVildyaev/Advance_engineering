const express = require('express');

const route = express.Router();

const logoutUser = require('../controllers/logout');

route.get('/', logoutUser);
// route.post('/', logoutUser);

module.exports = route;