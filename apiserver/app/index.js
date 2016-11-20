const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

if (process.env.NODE_ENV === 'development') app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/users', require('./api/user'));


// for test
module.exports = app;