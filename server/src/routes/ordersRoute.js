const express = require('express');

const route = express.Router();

const  {allOrders}  = require('../controllers/allOrders');

route.get('/', allOrders);
// route.post('/', allOrders);


module.exports = route;