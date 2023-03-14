const express = require('express');

const route = express.Router();

const  {deleteOrder}  = require('../controllers/deleteOrder');

route.get('/', deleteOrder);
route.post('/', deleteOrder);
route.delete('/', deleteOrder);


module.exports = route;