const express = require('express');

const route = express.Router();

const  {editSnanusDone}  = require('../controllers/statusDone');

route.get('/', editSnanusDone);
route.post('/', editSnanusDone);


module.exports = route;