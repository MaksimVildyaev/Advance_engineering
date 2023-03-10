/* eslint-disable no-unused-vars */
require('dotenv').config();
require('@babel/register');
const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cors = require('cors');
const { sequelize } = require('./db/models');

app.use(express.static(path.resolve('public')));
app.use(morgan('dev'));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use((req, res, next) => {
   const accessList = [
     'http://localhost:3000',
   ];
   const origin = req.get('origin');
   if (accessList.includes(origin)) {
     res.header('Access-Control-Allow-Origin', origin);
     res.header('Access-Control-Allow-Headers', 'content-type');
     res.header('Access-Control-Allow-Credentials', true);
   }
   next();
 });

 const { PORT } = process.env;


const sessionConfig = {
  name: 'Test',
  store: new FileStore(),
  secret: 'SECRET',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 10000000 * 24 * 60 * 60,
    httpOnly: true,
  },
};

app.use(session(sessionConfig));

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Соединение с базой установлено!');
  } catch (err) {
    console.log(err, 'Error!');
  }
  console.log(`Сервер поднят на ${PORT} порту!`);
});