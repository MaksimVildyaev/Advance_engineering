
const express = require('express');

const route = express.Router();

const  {editSnanusNew}  = require('../controllers/statusNew');

route.get('/', editSnanusNew);
route.post('/', editSnanusNew);


module.exports = route;