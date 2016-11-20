const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const swagger = require('./config/swagger');
const app = express();

// 미들웨어 설정 
if (process.env.NODE_ENV === 'development') app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 스웨거 설정 
swagger(app);

// 라우팅 설정
app.use('/users', require('./api/user'));

// for test
module.exports = app;