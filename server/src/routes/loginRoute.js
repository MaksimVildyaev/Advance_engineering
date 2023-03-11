const express = require('express');

const route = express.Router();

const  {logIn}  = require('../controllers/login');

route.get('/', logIn);
route.post('/', logIn);


module.exports = route;