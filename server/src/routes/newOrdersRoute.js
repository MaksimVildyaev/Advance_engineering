const express = require('express');

const route = express.Router();

const  {newOrder}  = require('../controllers/newOrder');

route.get('/', newOrder);
route.post('/', newOrder);


module.exports = route;